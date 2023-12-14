import { Injectable } from "@angular/core";
import { FootballService } from "./football.service";
import { Observable, ReplaySubject } from "rxjs";
import { tap, switchMap } from "rxjs/operators";

@Injectable({
  providedIn: 'root',
})
export class CachingService<T> {
  private dictionary: Map<string, ReplaySubject<T>> = new Map();

  constructor(private apiService: FootballService) { }

  public getRequest(endpoint: string): Observable<T> {
    const cachedData = localStorage.getItem(endpoint);

    if (cachedData) {
      return new Observable<T>(observer => {
        observer.next(JSON.parse(cachedData));
        observer.complete();
      });
    }

    if (!this.dictionary.has(endpoint)) {
      const subject = new ReplaySubject<T>(1);
      this.dictionary.set(endpoint, subject);

      return this.apiService.get<T>(endpoint).pipe(
        tap((data: T) => {
          localStorage.setItem(endpoint, JSON.stringify(data));
          subject.next(data);
          subject.complete();
        })
      );
    }

    return this.dictionary.get(endpoint)!.asObservable().pipe(
      switchMap((cachedData: T) => cachedData ? [cachedData] : this.apiService.get<T>(endpoint))
    );
  }
}

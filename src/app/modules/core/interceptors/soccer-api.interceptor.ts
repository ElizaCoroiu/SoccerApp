import { Injectable } from "@angular/core";
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environment';

@Injectable()
export class SoccerApiInterceptor implements HttpInterceptor {
    private apiUrl = environment.apiUrl;
    private apiKey = environment.apiKey;

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const headers = new HttpHeaders({
            'x-rapidapi-key': this.apiKey,
            'x-rapidapi-host': this.apiUrl,
            'Content-Type': 'application/json'
        });

        const modifiedRequest = request.clone({
            setHeaders: {
                'x-rapidapi-key': this.apiKey,
                'x-rapidapi-host': this.apiUrl,
                'Content-Type': 'application/json'
            }
        });

        return next.handle(modifiedRequest);
    }
}
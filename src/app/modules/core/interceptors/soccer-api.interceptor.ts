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

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        const modifiedRequest = request.clone({
            setHeaders: {
                'x-rapidapi-key': this.apiKey,
                'x-rapidapi-host': 'v3.football.api-sports.io',
                'Content-Type': 'application/json'
            }
        });

        return next.handle(modifiedRequest);
    }
}
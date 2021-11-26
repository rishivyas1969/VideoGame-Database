import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone(
            {
                setHeaders: {
                    'x-rapidapi-key' : '0a98c1e506msh0b9e7e0a3de1822p15d641jsn9cdbae41300e',
                    'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com'
                },
                setParams: {
                    key: 'ee78e1d31f3c4125a2894a813bd57a99'
                }
            }
        );
        return next.handle(req);
    }
    
}
import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
/**
 * For Http Request Handling
 */
@Injectable({
  providedIn: 'root',
})
export class AppHttpInterceptorService implements HttpInterceptor {
  /**
   * Intercept Request and Response
   * @param req HttpRequest
   * @param next HttpHandler
   * @returns Observable for HttpEvent
   */
  intercept(req: HttpRequest<any>, next: HttpHandler): any {
    return next.handle(req).pipe(
      map((res) => res),
      catchError((err: HttpErrorResponse): any => {
        return this.handlerError(next, req, err);
      })
    );
  }

  /**
   * @description Handle Http error
   * @param next HttpHandler
   * @param req HttpRequest
   * @param err Error
   */
  private handlerError(
    next: HttpHandler,
    req: HttpRequest<any>,
    err: HttpErrorResponse
  ) {
    const errorType = err.error.errors[0].type;

    switch (errorType) {
      case 'InvalidGrantError':
        console.log('You are not authorized!!!');
        return '';
        break;
      default:
        return throwError(err);
    }
  }
}

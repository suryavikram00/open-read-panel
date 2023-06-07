import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Router, ParamMap } from '@angular/router';
import { throwError } from 'rxjs';
import { LoadingService } from '../service/loading.service';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TokenIntercepterService {
  constructor(public injector: Injector,
    private route: ActivatedRoute,
    private router: Router,
    private loadingService: LoadingService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loadingService.show(); // Show progress bar when request starts
    

    console.log('Intercepted HTTP call', request);
    
    return next.handle(request)
      .pipe(map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse && ~~(event.status / 100) > 3) {
          console.info('HttpResponse::event =', event, ';');
        } else console.info('event =', event, ';');
        return event;
      })).pipe(
        catchError(this.handleError<any>('addHero')))
      .pipe(
        finalize(() => {
          this.loadingService.hide(); // Hide progress bar when request completes
        })
      )
      ;
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      // log to console instead
      if (error instanceof HttpErrorResponse) {        
        error.error.error = "Something went wrong!";
        return throwError(error);
      }

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };

  }
}

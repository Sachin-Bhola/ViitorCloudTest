import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmitEventService } from '../emit-event.service';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  constructor(private eventEmitService: EmitEventService) { }

  private requests: HttpRequest<any>[] = [];

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.requests.push(req);
    this.eventEmitService.isLoading.next(true);
    return Observable.create((observer: any) => {
      const subscription = next.handle(req)
        .subscribe(
          event => {
            if (event instanceof HttpResponse) {
              this.removeRequest(req);
              observer.next(event);
            }
          },
          err => {
            this.removeRequest(req);
            observer.error(err);
          },
          () => {
            this.removeRequest(req);
            observer.complete();
          });
      return () => {
        this.removeRequest(req);
        subscription.unsubscribe();
      };
    });

  }

  removeRequest(req: HttpRequest<any>) {
    const i = this.requests.indexOf(req);
    if (i >= 0) {
      this.requests.splice(i, 1);
    }
    this.eventEmitService.isLoading.next(this.requests.length > 0);
  }


}

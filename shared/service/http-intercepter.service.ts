import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

import { environment } from '../../../environments/environment';
import { NotificationsService } from 'angular2-notifications';

@Injectable()
export class HttpIntercepterService implements HttpInterceptor {
constructor(
    private router: Router,
    private notifyService: NotificationsService
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const newRequest = req.clone({
      url: `${environment.apiUrl}${req.url}`
    });

    return next.handle(newRequest).catch(
      err => {
        if (err instanceof HttpErrorResponse) {
            this.notifyService.html(`<i class="fa fa-exclamation-circle"></i>Error - ${err.message}`, 'danger', {
              clickToClose: true,
              pauseOnHover: true,
              showProgressBar: false,
              timeOut: 3000,
            });
        }

        return Observable.throw(err);
      }
    );
  }
}

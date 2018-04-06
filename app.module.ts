import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { HttpIntercepterService, HttpService, UserService } from './shared/service';
import { SimpleNotificationsModule, NotificationsService } from 'angular2-notifications';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    SimpleNotificationsModule.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpIntercepterService,
      multi: true
    },
    HttpService,
    UserService,
    NotificationsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

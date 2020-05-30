import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { NgxsModule } from '@ngxs/store';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';

import { CacheInterceptor } from './interceptors/cache-interceptor.service';
import { environment } from '../environments/environment';
import { AuthState } from './states/auth.state';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxsModule.forRoot([AuthState], {
      developmentMode: !environment.production
    }),
    NgxsStoragePluginModule.forRoot({
      key: 'auth.token'
    }),
    // ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: false }),
  ],
  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

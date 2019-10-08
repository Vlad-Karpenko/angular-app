import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './shared/error-page/404/not-found.component';
import { LoginComponent } from './login-page/login.component';
import { ServerErrorComponent } from './shared/error-page/500/server-error.component';
import { ForbiddenPageComponent } from './shared/error-page/403/forbidden-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    LoginComponent,
    ServerErrorComponent,
    ForbiddenPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ForbiddenPageComponent} from './error-page/403/forbidden-page.component';
import {NotFoundComponent} from './error-page/404/not-found.component';
import {ServerErrorComponent} from './error-page/500/server-error.component';

@NgModule({
  declarations: [
    ForbiddenPageComponent,
    NotFoundComponent,
    ServerErrorComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule {
}

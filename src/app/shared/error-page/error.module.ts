import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ForbiddenPageComponent} from './403/forbidden-page.component';
import {NotFoundComponent} from './404/not-found.component';
import {ServerErrorComponent} from './500/server-error.component';

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
export class ErrorModule {
}

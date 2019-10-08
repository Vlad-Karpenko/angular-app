import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ForbiddenPageComponent} from './shared/error-page/403/forbidden-page.component';
import {NotFoundComponent} from './shared/error-page/404/not-found.component';
import {ServerErrorComponent} from './shared/error-page/500/server-error.component';
import {LoginComponent} from './login-page/login.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: '403',
    component: ForbiddenPageComponent
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: '500',
    component: ServerErrorComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

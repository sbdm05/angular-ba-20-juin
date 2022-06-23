import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PageForgotPasswordComponent } from './login/page-forgot-password/page-forgot-password.component';
import { PageResetPasswordComponent } from './login/page-reset-password/page-reset-password.component';
import { PageSignInComponent } from './login/page-sign-in/page-sign-in.component';
import { PageSignUpComponent } from './login/page-sign-up/page-sign-up.component';

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: PageSignInComponent },
  { path: 'sign-up', component: PageSignUpComponent },
  { path: 'reset-password', component: PageResetPasswordComponent },
  { path: 'forgot-password', component: PageForgotPasswordComponent },
  {
    path: 'orders',
    loadChildren: () =>
      import('./orders/orders.module').then((m) => m.OrdersModule),
  },
  // ajouter du lazyloading pour le module clients
  {
    path: 'clients',
    loadChildren: () =>
      import('./clients/clients.module').then((m) => m.ClientsModule),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./page-not-found/page-not-found.module').then((m) => m.PageNotFoundModule),
  },
];

// décorateur
@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy : PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

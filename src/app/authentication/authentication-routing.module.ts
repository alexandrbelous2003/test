import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SignInComponent } from '@air-authentication/sign-in/sign-in.component';
import { ForgotPasswordComponent } from '@air-authentication/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from '@air-authentication/reset-password/reset-password.component';
import { SignUpComponent } from '@air-authentication/sign-up/sign-up.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'sign-in',
        component: SignInComponent,
      },
      {
        path: 'sign-up',
        component: SignUpComponent,
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
      },
      {
        path: 'reset-password',
        component: ResetPasswordComponent,
      },
    ]),
  ],
  exports: [RouterModule],
  providers: [],
})
export class AuthenticationRoutingModule {}

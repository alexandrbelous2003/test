import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';



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
  providers: [LoginGuardService],
})
export class AuthenticationRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationMaterialModule } from './authentication-material.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

@NgModule({

  declarations: [
      ForgotPasswordComponent,
      ResetPasswordComponent,    
      SignInComponent,
      SignUpComponent
  ],
  imports: [
    FlexLayoutModule,
    CommonModule,
    AuthenticationRoutingModule,
    AuthenticationMaterialModule
    
  ]
})
export class AuthenticationModule {}

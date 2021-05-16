import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationMaterialModule } from './authentication-material.module';

@NgModule({
  imports: [
    FlexLayoutModule,
    CommonModule,
    AuthenticationRoutingModule,
    AuthenticationMaterialModule,
  ]
})
export class AuthenticationModule {}

import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SignInFacadeService } from './sign-in.facade.service';


@Component({
  selector: 'air-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  public loginForm: FormGroup;

  constructor(
    private signInFacadeService: SignInFacadeService
  ) {
    this.loginForm = new FormGroup({
      login: new FormControl(''),
      password: new FormControl('')
    });
  }

  public onSubmit(): void {
    this.signInFacadeService.onSubmit(this.loginForm.value);
  }

}



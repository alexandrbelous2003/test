import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SignInFacadeService } from './sign-in.facade.service';

@Component({
  selector: 'air-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInComponent {

  public loginForm: FormGroup;

  constructor(
    private signInFacadeService: SignInFacadeService,
    private fb: FormBuilder,
  ) {
    this.loginForm = this.fb.group({
      login: [],
      password: [],
    });
  }

  public onSubmit(): void {
    this.signInFacadeService.handleOnEventOccursFabric(<IEvent>{
      key: 'SignInButtonClick',
      timestamp: Date.now(),
      type: 'outbound',
      component: this.constructor.name,
      payload: null,
    });
  }

}



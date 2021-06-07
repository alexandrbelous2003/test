import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'air-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit{




  nameControl: FormControl = new FormControl;

  ngOnInit(): void {
    this.nameControl = new FormControl();
  }


  constructor() { }

}



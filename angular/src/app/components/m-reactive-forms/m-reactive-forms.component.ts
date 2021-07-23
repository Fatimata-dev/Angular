import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup ,  Validators} from '@angular/forms';

@Component({
  selector: 'app-m-reactive-forms',
  templateUrl: './m-reactive-forms.component.html',
  styleUrls: ['./m-reactive-forms.component.css']
})
export class MReactiveFormsComponent implements OnInit {
  usernameControl =new FormControl('')
  loginForm: FormGroup;
  signUpForm: FormGroup
  constructor(
    private fb: FormBuilder
  ) { 
    this.loginForm = new FormGroup({
      usernameField: new FormControl('Timfa'),
      passwordField: new FormControl('')
    })
    this.signUpForm = this.fb.group({
      usernameField:  ['', Validators.required],
      passwordField: ['', [Validators.required, Validators.minLength(8)]],
      passwordConfirmedFiels:''

    })
  }

  ngOnInit(): void {
  }
sayHello(){
  console.log(this.usernameControl.value)
}
inscription(){
  console.log(this.signUpForm);
 if(this.signUpForm.status === "INVALID"){
 }
  
}
}

import { Component,OnInit } from '@angular/core';

import {FormBuilder,FormGroup,Validators} from '@angular/forms'

import { password } from '../custom-validat/password'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

Register:FormGroup;

submit=false;

constructor(private formbuild:FormBuilder ){}


ngOnInit(){

  this.Register=this.formbuild.group({
    firstName:['',Validators.required],
    lastname:['',Validators.required],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(6)]],
    confirmPassword:['',Validators.required],
    accept:[false,Validators.requiredTrue]

  },
  {
    validators:password('password','confirmPassword')
  })
}





get a(){
  return this.Register.controls;
}


OnReset(){
  this.submit=false;

  this.Register.reset();

}

OnSubmit(){
  this.submit=true;
  

  if(this.Register.invalid){
    return;
  }

  console.table(this.Register.value);
  console.table(this.Register);


 alert("value is"+JSON.stringify(this.Register.value)); 

}
}

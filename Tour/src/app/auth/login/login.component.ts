import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  

  constructor(private formBuilder: FormBuilder,  private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required,Validators.email, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]],
      password: ['', [Validators.required]]
    })
    

   }

  ngOnInit(): void {
  }
  onSubmit() {
    
    

  }
}
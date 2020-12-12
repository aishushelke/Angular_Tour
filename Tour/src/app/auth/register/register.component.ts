import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidationService } from './confirm-password.service';
import { AuthService } from 'src/app/auth.service';
import { RegisterPayoad } from '../register-payload';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

 registerPayload: RegisterPayoad;

  constructor(private formBuilder: FormBuilder, private customValidation: CustomValidationService , private authService: AuthService, private router: Router) {
    this.registerForm = this.formBuilder.group({
      fname: ['', [Validators.required]],
      lname: ['', [Validators.required]],
      
      email: ['', [Validators.required, Validators.email, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
     
      contact: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]
      
    },
      {
        validator: [this.customValidation.confirmedValidator('password', 'confirmPassword')]
      });
      
    this.registerPayload = {
      fname: '',
      lname: '',
      email: '',
      password: '',
      contact: ''
      
    }

    
  }

  ngOnInit(): void {
  }

  onSubmit() 
  {

   this.registerPayload.email = this.registerForm.get('email').value;
    this.registerPayload.fname = this.registerForm.get('fname').value;
    this.registerPayload.lname = this.registerForm.get('lname').value;
    this.registerPayload.password = this.registerForm.get('password').value;
    this.registerPayload.contact = this.registerForm.get('contact').value;
    
    this.authService.register(this.registerPayload).subscribe(data => {
      alert("User register successfully. Now go to login page");
      // this.router.navigateByUrl("/login");
      this.router.navigateByUrl("/register-success");
    }, error => {
      alert("error occurred");
    });


  }



}

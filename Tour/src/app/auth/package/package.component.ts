import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})
export class PackageComponent implements OnInit {
  packageForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router)
   {
     this.packageForm = this.formBuilder.group({
      pname: ['', [Validators.required]],
      ptype: ['', [Validators.required]],
      
      plocation: ['', [Validators.required]],
      price: ['', [Validators.required]]
       
   
      })

   }

  ngOnInit(): void {
  }

}

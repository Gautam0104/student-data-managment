import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../service/common.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm !: FormGroup;

  constructor(private formBuilder:FormBuilder, private router:Router,
    private commonService:CommonService) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name:[''],
      email:[''],
      password:[''],
      mobile:['']
    })
  }
  submit(){
    this.commonService.addSignUp(this.signupForm.value).subscribe((result:any) =>{
      console.log(result);
      this.signupForm.reset();
      Swal.fire(
        'Registered successfully',
        'You clicked the button!',
        'success'
      )
      this.router.navigate(['']);
     
      
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user: any;
  public loginForm !: FormGroup;
  collection : any;
  constructor(private commonService: CommonService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    })
    this.getStudentData();
  }
   check:any
   Obj:any
   email:any
   password:any
  login() {

console.log(this.loginForm.value.email);
for(let data of this.collection){
 if((data.email === this.loginForm.value.email) && (data.pass === this.loginForm.value.pass)){
  Swal.fire(
    'Successfully Login',
    'This is a student data managment portal',
    'success'
  )
 this.router.navigate(['dashboard'])
  
 }else{
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Something went wrong!',
    footer: '<a href="">Why do I have this issue?</a>'
  })
 }
 
}




}
getStudentData(){
  this.commonService.getLogin().subscribe((result:any) =>{
  this.collection = result
  

   
   
  })
}
}

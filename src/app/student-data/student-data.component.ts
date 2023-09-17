import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../service/common.service';
import { StudentModel } from './student-data.model';

@Component({
  selector: 'app-student-data',
  templateUrl: './student-data.component.html',
  styleUrls: ['./student-data.component.css']
})
export class StudentDataComponent implements OnInit {
  formValue !: FormGroup;
  public collection: any;

  constructor(private formBuilder: FormBuilder, private commonService : CommonService, private router:Router) { }
  studentObj : StudentModel = new StudentModel();
  studentdataUpdate: boolean = false;

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      name: [''],
      class: [''],
      email: [''],
      age: [''],
      mobile: [''],
    })
    this.getStudentData();
  }
submit(){
  this.studentObj.name = this.formValue.value.name;
  this.studentObj.class = this.formValue.value.class;
  this.studentObj.age = this.formValue.value.age;
  this.studentObj.email = this.formValue.value.email;
  this.studentObj.mobile = this.formValue.value.mobile;
  this.commonService.addStudent(this.studentObj).subscribe((res:any)=>{
    console.log(res);
    
  })
  this.getStudentData();
  this.formValue.reset();
  
}
getStudentData(){
  this.commonService.getStudentData().subscribe((result:any) =>{
    this.collection = result
  })
}
deleteStudentData(id:any){
  this.commonService.deleteStudentData(id).subscribe((result:any) =>{
    this.collection.result;
  })
  this.getStudentData();
}
edit(data:any){
  this.studentObj.id = data.id;
 this.formValue.controls['name'].setValue(data.name);
 this.formValue.controls['class'].setValue(data.class);
 this.formValue.controls['age'].setValue(data.age);
 this.formValue.controls['email'].setValue(data.email);
 this.formValue.controls['mobile'].setValue(data.mobile);
 this.studentdataUpdate = true;
}
updateStudent(){
  this.studentObj.name = this.formValue.value.name;
  this.studentObj.class = this.formValue.value.class;
  this.studentObj.age = this.formValue.value.age;
  this.studentObj.email = this.formValue.value.email;
  this.studentObj.mobile = this.formValue.value.mobile;
  this.commonService.updateStudentdata(this.studentObj,this.studentObj.id).subscribe((res:any) =>{
    console.log(res);
    this.getStudentData();
    this.formValue.reset();

  })
}

logout(){
 
  this.router.navigate(['']);
}

}

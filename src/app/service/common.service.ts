import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
Url: string = "http://localhost:3000/student-data"
  constructor(private http :HttpClient) { }
  getStudentData(){
    return this.http.get(this.Url);
  }
  addStudent(data:any){
    return this.http.post<any>("http://localhost:3000/student-data/",data).pipe(map((res:any)=>{
      return res;
    }))
  }
  deleteStudentData(id:any){
    return this.http.delete(`${"http://localhost:3000/student-data"}/${id}`)
  }
  updateStudentdata(data:any,id:any){
    return this.http.put<any>("http://localhost:3000/student-data/"+id,data).pipe(map((res:any)=>{
      return res;
    }))
  }
  addSignUp(data:any){
    return this.http.post<any>("http://localhost:3000/signup-data/",data).pipe(map((res:any) =>{
      return res;
    }))
  }
  getLogin(){
    return this.http.get<any>("http://localhost:3000/signup-data/");
    
    
  }



  
}

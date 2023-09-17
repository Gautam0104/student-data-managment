import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './auth-guard.guard';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { StudentDataComponent } from './student-data/student-data.component';

const routes: Routes = [
 
  {path:'', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {
    path:'dashboard', 
    component:StudentDataComponent,
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

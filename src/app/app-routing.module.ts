import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddBookComponent } from './add-book/add-book.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
 
  { path: "home",component:HomeComponent},
  { path: "about",component:AboutComponent},
  { path: "login",component:LoginComponent},
  { path: "register",component:RegisterComponent},
  { path: "addbook",component:AddBookComponent},
  { path:'',redirectTo:'/home',pathMatch:'full'},
  {path:"**",component:PagenotfoundComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

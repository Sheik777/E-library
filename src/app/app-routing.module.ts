import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddBookComponent } from './add-book/add-book.component';
import { HomeComponent } from './home/home.component';
import { LibraryGuard } from './library.guard';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PriceCardComponent } from './price-card/price-card.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
 
  { path: "home",component:HomeComponent},
  { path: "about",component:AboutComponent,canActivate:[LibraryGuard]},
  { path: "login",component:LoginComponent},
  { path: "register",component:RegisterComponent},
  { path: "addbook",component:AddBookComponent,canActivate:[LibraryGuard]},
  { path:"price-card",component:PriceCardComponent,canActivate:[LibraryGuard]},
  { path:'',redirectTo:'/home',pathMatch:'full'},
  {path:"**",component:PagenotfoundComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

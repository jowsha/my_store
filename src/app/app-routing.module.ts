import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddpComponent } from './addp/addp.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { LoginComponent } from './login/login.component';
import { ProductlistComponent } from './productlist/productlist.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"productlist",component:ProductlistComponent},
  {path:"addproduct",component:AddpComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

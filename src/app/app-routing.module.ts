import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewuserComponent } from './newuser/newuser.component';

const routes: Routes = [
  {
    path:'add',
    component:NewuserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

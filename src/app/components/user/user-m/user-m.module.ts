import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { UsermodComponent } from '../usermod/usermod.component';
const routes:Routes = [
  {
    path:'',
    redirectTo:'/users/userList',
    pathMatch:'full'
  },
  {

    path:'userList',
    component:UsermodComponent
  }
]


@NgModule({
  declarations: [
    UsermodComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)

  ]
})
export class UsersListModule { }

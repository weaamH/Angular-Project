import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { FormsModule } from '@angular/forms';
import { UsersRoutingModule } from './users-routing.module';

import { AgeCalculatorPipe } from '../pipes/age-calculator.pipe';

@NgModule({
  declarations: [
    UserComponent,
    UserListComponent,
    AgeCalculatorPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }

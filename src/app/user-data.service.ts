import { Injectable } from '@angular/core';
import { userVM } from './users/user/user.component';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  
  //public num_of_users = 0;

  constructor() { }

  public userArray: userVM[]=[/*{id: 1, name: 'sara', date_of_birth: new Date(), age: 22, email: 'sara@23', password: '12345Aa@', confirm_password: '12345Aa@'},
                        {id: 2, name: 'lama', date_of_birth: new Date(), age: 28, email: 'l99@h', password: '12345Aa#', confirm_password: '12345Aa#'},
{id: 3, name: 'ahmad', date_of_birth: new Date(), age: 19, email: 'ahmad@19', password: '12345Aa#!', confirm_password: '12345Aa#!'}*/]; 

}

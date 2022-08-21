import { Injectable } from '@angular/core';
import { userVM } from './users/user/user.component';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }

  public userArray: userVM[]=[{id: 1, name: 'sara', age: 22, email: 'sara@23', password: '12345Aa@', confirm_password: '12345Aa@'},
                        {id: 2, name: 'lama', age: 28, email: 'l99@h', password: '12345Aa#', confirm_password: '12345Aa#'},
                        {id: 3, name: 'ahmad', age: 19, email: 'ahmad@19', password: '12345Aa#!', confirm_password: '12345Aa#!'}]; 

}

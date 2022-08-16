import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

 interface userVM{
  name: String;
  user_name: String;
  age: number;
  email: String;
  password: String;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

   public userArray: userVM[] = [];
   public user: userVM={name: '', user_name: '', age: 0, email: '', password: ''};
    

   addUser(){
    
    this.userArray.push({...this.user});
   }
}

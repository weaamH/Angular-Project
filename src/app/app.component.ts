import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

 interface userVM{
  id: number;
  name: String;
  age: number;
  email: String;
  password: String;
  confirm_password: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

   public userArray: userVM[] = [];
   public user: userVM={id: 0, name: '', age: 0, email: '', password: '', confirm_password: ''};


   addUser(userForm: NgForm){
    console.log(userForm.value);
    console.log(userForm.valid);
    if(userForm.valid){
      this.user.id+=1;
      console.log(userForm.value);
    this.userArray.push({...this.user});
    }
   }
   deleteUser(user: userVM){
    let index = this.userArray.indexOf(user);
    if(index != -1){
      this.userArray.splice(index, 1);
    }
   }
}

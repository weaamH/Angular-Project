import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { userVM } from './user/user.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userIndex: number = 0;
  public parentInstance: userVM[] = [];

  receiveData(data: any){
    this.parentInstance = data;
  }

  deleteUser(user: userVM){
    let index = this.parentInstance.indexOf(user);
    if(index != -1){
      this.parentInstance.splice(index, 1);
    }
   }
}

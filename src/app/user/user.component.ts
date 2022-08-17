import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { NgForm } from '@angular/forms';

export interface userVM{
  id: number;
  name: String;
  age: number;
  email: String;
  password: String;
  confirm_password: string;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Output() receiveData: EventEmitter<any>= new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public userArray: userVM[] = [];
  public user: userVM={id: 0, name: '', age: 0, email: '', password: '', confirm_password: ''};


   addUser(userForm: NgForm){
    if(userForm.valid){
      this.user.id+=1;
      console.log(userForm.value);
      this.userArray.push({...this.user});
      this.receiveData.emit(this.userArray);
    }
  }  
}

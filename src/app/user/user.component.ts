import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserListComponent } from '../user-list/user-list.component';

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

  constructor(private activatedRout: ActivatedRoute) {
    this.activatedRout.queryParams.subscribe(data =>{
      console.log(data);
    });
   }

  ngOnInit() {
    const user_id = + this.activatedRout.snapshot.params['id'];
    for(let i=0; i<this.userArray.length; i++){
      if(this.userArray[i].id == user_id){
        this.user = {...this.userArray[i]};
      }
    }
  }

  public user: userVM={id: 0, name: '', age: 0, email: '', password: '', confirm_password: ''}; 

  // for testing
  public userArray: userVM[]=[{id: 1, name: 'sara', age: 22, email: 'sara@23', password: '12345Aa@', confirm_password: '12345Aa@'},
                        {id: 2, name: 'lama', age: 28, email: 'l99@h', password: '12345Aa#', confirm_password: '12345Aa#'},
                        {id: 3, name: 'ahmad', age: 19, email: 'ahmad@19', password: '12345Aa#!', confirm_password: '12345Aa#!'}]; 
  public num_of_users = 0;

   addUser(userForm: NgForm){
    if(userForm.valid){
      this.num_of_users += 1;
      this.user.id = this.num_of_users;
      this.receiveData.emit({...this.user});
    }
  }
}

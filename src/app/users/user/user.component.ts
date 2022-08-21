import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserDataService } from 'src/app/user-data.service';
import { NgForm } from '@angular/forms';
import { NgModel } from '@angular/forms';

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

  public idToCheck: number = 0;

  constructor(private usersService: UserDataService, private activatedRout: ActivatedRoute) {
    this.activatedRout.queryParams.subscribe(data =>{
      console.log(data);
    });
   }

  ngOnInit() {
    const user_id = + this.activatedRout.snapshot.params['id'];
    for(let i=0; i<this.usersService.userArray.length; i++){
      if(this.usersService.userArray[i].id == user_id){
        this.user = {...this.usersService.userArray[i]};
        this.idToCheck = user_id;
      }
    }
  }

  public user: userVM={id: 0, name: '', age: 0, email: '', password: '', confirm_password: ''};
  public num_of_users = 0;

   addUser(userForm: NgForm){
    if(userForm.valid){
      this.num_of_users += 1;
      this.user.id = this.num_of_users;
      this.usersService.userArray.push({...this.user});
    }
  }
}

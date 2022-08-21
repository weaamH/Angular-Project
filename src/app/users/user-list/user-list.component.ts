import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/user-data.service';
import { userVM } from '../user/user.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  parentInstance: userVM[] = [];

  constructor(private usersService: UserDataService) { 
  }

  ngOnInit(): void {
    this.parentInstance = this.usersService.userArray;
  }

  userIndex: number = 0;

  deleteUser(user: userVM){
    let index = this.usersService.userArray.indexOf(user);
    if(index != -1){
      this.usersService.userArray.splice(index, 1);
    }
  }
}

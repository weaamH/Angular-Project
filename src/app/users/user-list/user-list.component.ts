import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/user-data.service';
import { userVM } from '../user/user.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  parentInstance: userVM[] = [];
  numOfUsers: number = 0;

  constructor(private usersService: UserDataService, private router: Router) { 
  }

  ngOnInit() {
    this.usersService.getUsers().subscribe(data =>{
      this.parentInstance = data;
      this.numOfUsers = this.parentInstance.length;
    });
  }

  deleteUser(user: userVM){
    this.usersService.deleteUser(user.id).subscribe();
  }
  editUser(object: userVM){
    this.router.navigate(['/users/'+ object.id]);
  }
}

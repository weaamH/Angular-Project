import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  userIndex: number = 0;
  //public parentInstance: userVM[] = [];
  public parentInstance: any[] = [];

  /*receiveData(data: any){
    this.parentInstance.push(data);
  }

  deleteUser(user: userVM){
    let index = this.parentInstance.indexOf(user);
    if(index != -1){
      this.parentInstance.splice(index, 1);
    }
  }*/
}

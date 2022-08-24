import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserDataService } from 'src/app/user-data.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

export interface userVM{
  id: number;
  name: String;
  age: number;
  user_email: String;
  dob: Date;
  password: String;
  posts: [];
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {


  constructor(private usersService: UserDataService, private activatedRout: ActivatedRoute, private router: Router) {
    this.activatedRout.queryParams.subscribe(data =>{
      console.log(data);
    });
   }

   public user: userVM={id: 0, name: '', age: 0, user_email: '', dob: new Date(), password: '', posts: []};
   public idToCheck: number = this.user.id;

  ngOnInit() {
    const user_id = + this.activatedRout.snapshot.params['id'];
    this.usersService.getUserById(user_id).subscribe(data =>{
      this.user = data;
    });
  }

   addUser(userForm: NgForm){
    if(userForm.valid){
      if(this.user.id<1){
        this.usersService.createUser(this.user).subscribe(result =>{
          console.log(result);
        });
      }
      else{
        this.usersService.updateUser(this.user, this.user.id).subscribe();
      }
      this.router.navigate(['/users/list']);
    }
  }
}

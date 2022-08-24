import { Component, OnInit } from '@angular/core';
import { userVM } from '../users/user/user.component';
import { UserDataService } from '../user-data.service';
import { NavigationEnd, Router } from '@angular/router';

export interface postVM{
  Id: number;
  title: String;
  user_id: number;
  user: userVM;
  created_at: Date;
  created_by: number;
  updated_at: Date;
  modified_by: number;
}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  post_list: postVM[] = [];


  constructor(private usersService: UserDataService, private router: Router) {}

  ngOnInit() {
    this.usersService.getPosts().subscribe(data =>{
      console.log(data);
      this.post_list = data;
    });
  }
}

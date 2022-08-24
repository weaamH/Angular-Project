import { Injectable } from '@angular/core';
import { userVM } from './users/user/user.component';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { postVM } from './posts/posts.component';
@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(public http: HttpClient) { }

  getUsers(): Observable<userVM[]>{
    return this.http.get<userVM[]>("https://localhost:7209/api/User");
  }

  getUserById (id: number): Observable<userVM>{
    return this.http.get<userVM>("https://localhost:7209/api/User/" + id);
  }

  createUser(user: userVM){
    return this.http.post("https://localhost:7209/api/User", user);
  }

  updateUser(user: userVM, id: number){
    return this.http.put("https://localhost:7209/api/User/"+id, user);
  }

  deleteUser(id: number){
   return this.http.delete("https://localhost:7209/api/User/" + id);
  }
  getPosts(): Observable<postVM[]>{
    return this.http.get<postVM[]>("https://localhost:7209/api/Post");
  }
}

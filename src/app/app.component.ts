import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentRoute: any;
  public id_url: number = 0;
  

  constructor(private router: Router, private activatedRout: ActivatedRoute){}

  ngOnInit(): any{
    const user_id = + this.activatedRout.snapshot.params['id'];
    this.id_url = user_id;
    console.log(user_id);
    this.router.events.subscribe(e =>{
      if(e instanceof NavigationEnd){
        this.currentRoute=(<NavigationEnd>e).url;
      }
    });
  }
}


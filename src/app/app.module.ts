import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { RouterModule, Routes } from '@angular/router';

const routing: Routes = [
  {path: 'user/form', component: UserComponent},
  {path: 'user/list', component: UserListComponent},
  {path: 'user/:id', component: UserComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routing)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

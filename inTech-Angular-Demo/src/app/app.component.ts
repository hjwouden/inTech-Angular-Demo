import { Component } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private us: UsersService) {}
  username: string = "sample";
  UserList: any[];

  title = 'inTech';

  onClick(){
    alert(this.username + " Button Clicked");
  }

  loadUsers(){
    this.us.getUsers().subscribe(results => this.UserList = results);
  }
}

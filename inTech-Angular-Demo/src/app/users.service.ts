import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<any[]>{
    console.log("called getUsers()");
    return this.http.get<any[]>("https://api.github.com/users");
  }
  
}

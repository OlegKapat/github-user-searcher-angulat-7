import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators'



@Injectable()

export class UsersService{
    constructor(private http:HttpClient){}

    getUser(username:string):Observable<any>{
      return this.http.get(`https://api.github.com/users/${username}?client_id=847a8cb02cb233744c11&client_secret=a42da477b6aad2af8b25dc284769e1005433e9d5`).pipe(map((data)=>data))
    }
}

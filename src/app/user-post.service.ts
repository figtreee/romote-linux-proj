import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserInfo } from './userinfo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserPostService {

  constructor( private http: HttpClient,) { }

  
  logIn(userInfo:UserInfo):Observable<any>{
return this.http.get<any>(`/demo/api/user/login?name=${userInfo.userName}&pwd=${userInfo.userPwd}`).pipe()
  }

  Register(userInfo:UserInfo):Observable<any>{ 
    return this.http.post<any>(`/demo/api/user/register`,userInfo).pipe()
 }
}

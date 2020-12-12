import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocalStorageService } from 'ngx-webstorage';
import { map } from 'rxjs/operators';
import { RegisterPayoad } from './auth/register-payload';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //base url to make it common.
  private baseUrl = "http://localhost:8000/api/";

  constructor(private httpClient: HttpClient, private localStorageService: LocalStorageService) { }

  

//register api call
  register(registerPayload: RegisterPayoad): Observable<any> {
    let headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post(this.baseUrl + 'user/signup', registerPayload, { headers: headers });
  }
   isAuthenticated(): boolean {
    return this.localStorageService.retrieve('loginData') != null;
  }
  
  logout() {
    this.localStorageService.clear('loginData');
  }

  //delete user
  deleteUser(id: Number) {
    let headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.delete(this.baseUrl + 'user/userDelete/' + id, { headers: headers });
  }

}
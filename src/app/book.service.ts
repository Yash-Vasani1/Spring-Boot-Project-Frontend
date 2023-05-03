import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  
  constructor(private httpclient:HttpClient) { }
  
  public saveUser(user:any):Observable<any>{
    return this.httpclient.post(environment.apiURL+'/SignUp', user);
  }
  public login(email:any,password:any):Observable<any>{
    return this.httpclient.get(environment.apiURL+'/Login/?email='+email+'&password='+password);
  }
  public forgotPassword(email: any):Observable<any>{
    return this.httpclient.get(environment.apiURL+'/forgotPassword/?email='+email);
  }
  public resetPassword(otp:any, password:any, conformpassword:any):Observable<any>{
    return this.httpclient.get(environment.apiURL+'/ResetPassword/?otp='+otp+'&password='+password+'&conformpassword='+conformpassword);
  }
}

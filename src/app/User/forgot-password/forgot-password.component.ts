import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { BookService } from 'src/app/book.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  email="";
  constructor(private services:BookService, private router:Router){}
  forgotPass(){
    console.log(this.email);

    this.services.forgotPassword(this.email).subscribe({
      next: (response) => {
        if(response.data != null){
          console.log(response);
          alert(response.msg);
          this.router.navigateByUrl("/ResetPassword")
        }
        else{
          console.log(response);
          alert(response.msg);
        }
      }
    })
    
  }
}

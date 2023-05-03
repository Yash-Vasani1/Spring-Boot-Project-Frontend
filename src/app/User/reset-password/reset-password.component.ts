import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { BookService } from 'src/app/book.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  otp:Number=0;
  password="";
  conformpassword="";
  constructor(private service:BookService, private router:Router){}
  resetPassword()
  {
    this.service.resetPassword(this.otp, this.password, this.conformpassword).subscribe({
      next: (resp) => {
        if(resp.data != null)
        {
          console.log(resp.msg);
          alert(resp.msg);
          this.router.navigateByUrl("/Login")
        }
        else
        {
          console.log(resp.msg);
          alert(resp.msg);
        }
      }
    })
  }
}
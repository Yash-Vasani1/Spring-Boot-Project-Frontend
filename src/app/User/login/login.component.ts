import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/book.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email="";
  password="";
  
  constructor(private bookservice:BookService, private router:Router){ }
  
  Login()
  {
    console.log(this.email);
    console.log(this.password);
    
    this.bookservice.login(this.email, this.password).subscribe({
      next:(response)=>
      {
        console.log(response);
        alert(response.msg);
        if(response.data != null)
        {
          this.router.navigateByUrl("/homePage")
        }
      },
      error : (error)=> {
        console.log(error);
      }
    })
  }
}

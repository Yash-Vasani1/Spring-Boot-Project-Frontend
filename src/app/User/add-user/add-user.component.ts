import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { BookService } from 'src/app/book.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  constructor(private bookservices:BookService, private router:Router){}
  fname="";
  lname="";
  email="";
  password="";
  status:Boolean=false;
  AddUser(){
    console.log(this.fname);
    console.log(this.lname);
    console.log(this.email);
    console.log(this.password);
    console.log(this.status);    
    
    let user = {
      "firstName":this.fname,
      "lastName":this.lname,
      "email":this.email,
      "password":this.password,
      "status":this.status
    }    
    
    this.bookservices.saveUser(user).subscribe({
      next: (response) => {
        console.log(response.msg);
        this.router.navigateByUrl("/Login")
      },
      error: (err) => {
        console.log(err);
        console.log(err.error.msg);
      }
    })
  }
}

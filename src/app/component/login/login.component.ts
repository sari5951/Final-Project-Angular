import { Component,ViewChild } from '@angular/core';
import { UserService } from "../../service/user.service";
import { User } from "../../models/user";
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'; // Import Router for navigation

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
newUser:User= { id: 0, username: "", password: "", jobSearchField: "" } ;
User:User= { id: 0, username: "", password: "", jobSearchField: "" } ;
@ViewChild('f') f: NgForm | null = null;
 
  constructor(private userService:UserService , private router: Router) {
  }

  signUp() {
    if (this.User.password.length < 8 || this.User.password.includes(' ')) {
      alert('Invalid password. Password must be at least 8 characters long and cannot contain spaces.');
      return; 
    }
  
    this.userService.getUser(this.User.username,this.User.password).subscribe(res=>{

     this.newUser= res;
     if (this.newUser) 
     {
      alert(" connect");
       this.router.navigate(['/']);
      localStorage.setItem('userConnect',JSON.stringify(this.newUser));
     } 
    else {
      alert("no connect");
    }
    })
}}


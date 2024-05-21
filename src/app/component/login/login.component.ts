// import { Component,ViewChild } from '@angular/core';
// import { UserService } from "../../service/user.service";
// import { User } from "../../models/user";
// import { NgForm } from '@angular/forms';
// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.css'
// })
// export class LoginComponent {
// newUser:User= { id: 0, username: "", password: "", jobSearchField: "" } ;
// User:User= { id: 0, username: "", password: "", jobSearchField: "" } ;
// @ViewChild('f') f: NgForm | null = null;
 
//   constructor(private userService:UserService ) {
//   }

//   signUp() {
//     this.userService.getUser(this.User.username,this.User.password).subscribe(res=>{
//      this.newUser= res;
//      if (this.newUser) 
//      {
//       alert(" connect");
//       navigator('./maain')
//       // localStorage.setItem('userConnect',JSON.stringify(this.newUser));
//      } 
//     else {
//       alert("no connect");
      
//     }
//     })
    
// }}
import { Component, ViewChild } from '@angular/core';
import { UserService } from '../../service/user.service';
import { User } from '../../models/user';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'; // Import Router for navigation

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  newUser: User = { id: 0, username: '', password: '', jobSearchField: '',countResume:0 };
  User: User = { id: 0, username: '', password: '', jobSearchField: '',countResume:0 }; // Not needed

  @ViewChild('f') f: NgForm | null = null;

  constructor(private userService: UserService, private router: Router) { }

  signUp() {
    this.userService.getUser(this.User.username, this.User.password).subscribe(res => {
      this.newUser = res;
      if (this.newUser) {
        alert('Connected!');
        // Use Router to navigate to the home page
        this.router.navigate(['/']); // Replace '/home' with your actual home route
        // Optional: Store user data in local storage or a service for later use
        // localStorage.setItem('userConnect', JSON.stringify(this.newUser));
      } else {
        alert('Invalid username or password.');
      }
    });
  }
}

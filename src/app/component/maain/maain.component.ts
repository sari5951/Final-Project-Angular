// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { userInfo } from 'os';

// @Component({
//   selector: 'app-maain',
//   templateUrl: './maain.component.html',
//   styleUrl: './maain.component.css'
// })
// export class MaainComponent {
//   user:any= localStorage.getItem('userConnect');
 
// }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  User} from "../../models/user";
@Component({
  selector: 'app-maain',
  templateUrl: './maain.component.html',
  styleUrl: './maain.component.css'
})
export class MaainComponent implements OnInit {

  user: User = { id: 0, username: '', password: '', jobSearchField: '',countResume:0 }; // Not n
  username: string = '';
  userResume:number=0;
  constructor(private router: Router) {}

  ngOnInit() {
    // this.user = JSON.parse(localStorage.getItem('userConnect') || '{}');
    this.username = this.user.username || 'אורח'; // אם אין שם משתמש, יוצג "אורח"


  }

  numOfResume(){
    this.userResume++;
    this.user.countResume=this.userResume;
  }

 
}



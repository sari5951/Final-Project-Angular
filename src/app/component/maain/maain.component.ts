
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  User} from "../../models/user";
@Component({
  selector: 'app-maain',
  templateUrl: './maain.component.html',
  styleUrl: './maain.component.css'
})
export class MaainComponent implements OnInit {

  user: User = { id: 0, username: '', password: '', jobSearchField: '' }; // Not n
  username: string = '';
  userResume:number=0;
  uploadedFiles: string[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('userConnect') || '{}');
    this.username = this.user.username || 'אורח'; // אם אין שם משתמש, יוצג "אורח"


  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0]; // הקובץ שנבחר על ידי המשתמש
    this.uploadedFiles.push(file.name); // הוספת שם הקובץ לרשימה של הקבצים שהועלו
    this.userResume++; // הגדלת מונה קורות החיים שנשלחו
  }

 

 
}

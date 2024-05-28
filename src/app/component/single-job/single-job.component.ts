import { Component ,Input, EventEmitter, Output} from '@angular/core';
import { Job } from '../../models/job';

@Component({
  selector: 'app-single-job',
  templateUrl: './single-job.component.html',
  styleUrl: './single-job.component.css'
})

export class SingleJobComponent {
  userResume:number=0;

  uploadedFiles: string[] = [];

  @Input()
  jobData:Job | null = null
  onFileSelected(event: any) {
    const file: File = event.target.files[0]; // הקובץ שנבחר על ידי המשתמש
    this.uploadedFiles.push(file.name); // הוספת שם הקובץ לרשימה של הקבצים שהועלו
    //  this.userResume = Number.parseInt(localStorage.getItem('userResume')||0);
    this.userResume = parseInt(localStorage.getItem('userResume') || '') || 0;


    this.userResume++; // הגדלת מונה קורות החיים שנשלחו
    // localStorage.setItem('userResume',Number.stringify(this.userResume));
    localStorage.setItem('userResume', this.userResume.toString());

    this.resume.emit(this.userResume);
    this.addJob.emit(this.jobData?.jojbTitle);

  }
  @Output()
  resume:EventEmitter<number> = new EventEmitter<number>()
  @Output()
  addJob:EventEmitter<string> = new EventEmitter<string>()
  
  
}


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Job } from '../../models/job';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css'
})

export class JobsComponent implements OnInit{
  constructor(private router: Router, private route: ActivatedRoute){
  
  }

  listJobs: Job[] = [];
 
  ngOnInit() {
  
   
  }
}









  

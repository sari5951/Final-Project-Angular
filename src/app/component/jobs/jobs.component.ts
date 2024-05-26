
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Job } from '../../models/job';
import { jobService } from "../../service/job.service";

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css'
})

export class JobsComponent implements OnInit{
  constructor(private router:ActivatedRoute, private route: ActivatedRoute,private jobservice:jobService ){
    this.jobservice.getAllJobs().subscribe(res=>{
      this.listJobs=res;
     })
  }
 
  area:string="";
  region:string="";
  listJobs: Job[] = [];
  selectedJob: Job | null = null;
  ngOnInit() {
    this.router.params.subscribe(p=> {
    this.region = p['region'];
    this.area = p['area'];})
    this.changeFilter({ filterReigon:this.region, filterArea:this.area})
  }

  changeFilter($event:any){
    this.jobservice.filter($event).subscribe(res => {this.listJobs = res}
      )
    
  }

  
  showDetails(job: Job) {
    this.selectedJob = job;
  }
}





 








  

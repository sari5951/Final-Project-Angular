
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
    this.jobservice.getAllJobs().subscribe(res=> this.listJobs=res)
    
     
  }
 
  area:string="";
  region:string="";
  listJobs: Job[] = [];
  userResume:number=0;
  listSearchResume:string[]=['dddddd','oo'];
  index:number=1;
  ngOnInit() {
    this.router.params.subscribe(p=> {
    this.region = p['region']
    this.area = p['area'];
    this.changeFilter({ filterReigon:this.region, filterArea:this.area})
  })
}
viewJobs: Job[] = []

  changeFilter($event:any){
    this.jobservice.filter($event).subscribe(res => this.viewJobs = res)
      
    
  }
  selectedJob: Job | null = null;
  
  showDetails(job: Job) {
    this.selectedJob = job;
  }
  updateResume($event:number){
  this.userResume=$event;
  }
  addJobTOlist($event:string){
    this.listSearchResume[this.index++]=$event;
  }
}





 








  

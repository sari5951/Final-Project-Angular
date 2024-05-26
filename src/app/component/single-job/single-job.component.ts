import { Component ,Input} from '@angular/core';
import { Job } from '../../models/job';

@Component({
  selector: 'app-single-job',
  templateUrl: './single-job.component.html',
  styleUrl: './single-job.component.css'
})
export class SingleJobComponent {

  

  @Input()
  jobData:Job | null = null

}

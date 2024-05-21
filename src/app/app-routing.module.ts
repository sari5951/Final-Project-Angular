import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobsComponent } from "./component/jobs/jobs.component";
import { LoginComponent } from "./component/login/login.component";
import { MaainComponent } from "./component/maain/maain.component";

const routes: Routes = [
  { path: '', component: MaainComponent },
  { path: 'login', component: LoginComponent },
  { path: 'jobs', component: JobsComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }










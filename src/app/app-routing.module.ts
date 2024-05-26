import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobsComponent } from "./component/jobs/jobs.component";
import { LoginComponent } from "./component/login/login.component";
import { MaainComponent } from "./component/maain/maain.component";

const routes: Routes = [
  { path: '', component: MaainComponent, children:[{ path: 'jobs/:area/:region', component: JobsComponent}]},
  { path: 'login', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }










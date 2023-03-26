import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AthletePageComponent } from './athlete-page/athlete-page.component';
import { RecordsComponent } from './records/records.component';

const routes: Routes = [
  { path: '', component: RecordsComponent },
  { path: 'athlete/:athleteName', component: AthletePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

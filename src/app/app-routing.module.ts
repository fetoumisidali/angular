import { WorkersListComponent } from './workers-list/workers-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewWorkerComponent } from './new-worker/new-worker.component';
import { EditWorkerComponent } from './edit-worker/edit-worker.component';

const routes: Routes = [
  {path:"",component:WorkersListComponent},
  {path:"add",component:NewWorkerComponent},
  {path:"edit/:id",component:EditWorkerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

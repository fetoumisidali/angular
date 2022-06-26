import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkersListComponent } from './workers-list/workers-list.component';
import { NewWorkerComponent } from './new-worker/new-worker.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { EditWorkerComponent } from './edit-worker/edit-worker.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkersListComponent,
    NewWorkerComponent,
    EditWorkerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

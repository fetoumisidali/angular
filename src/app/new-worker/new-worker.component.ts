import { Router } from '@angular/router';
import { WorkersService } from './../workers.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-worker',
  templateUrl: './new-worker.component.html',
  styleUrls: ['./new-worker.component.css']
})
export class NewWorkerComponent implements OnInit {
  newWorkerForm! :  FormGroup;
  constructor(private formBuilder:FormBuilder,
    private workersService : WorkersService,
    private router:Router) {
   }

  ngOnInit(): void {
    this.newWorkerForm =this.formBuilder.group({
      firstname: new FormControl(null,Validators.required),
      lastname: new FormControl(null,Validators.required)
    })
  }

  createNewUser(){
    this.workersService.createNewUser(this.newWorkerForm.value)
    this.newWorkerForm.reset
    this.router.navigateByUrl('')
  }
}

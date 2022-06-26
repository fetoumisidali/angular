import { WorkersService } from './../workers.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-worker',
  templateUrl: './edit-worker.component.html',
  styleUrls: ['./edit-worker.component.css']
})
export class EditWorkerComponent implements OnInit {
  userId! : number;
  editWorkerForm! : FormGroup;
  currentUser : any;
  constructor(private activatedRoute : ActivatedRoute,
    private workersService : WorkersService,
    private router : Router) {
     }

  ngOnInit(): void {
    this.userId = this.activatedRoute.snapshot.params['id']
    this.currentUser = this.workersService.findUserById(this.userId);
    if(this.currentUser == undefined){
      this.router.navigateByUrl('')
    }
    this.editWorkerForm = new FormGroup({
        'firstname' : new FormControl(this.currentUser['firstname'],Validators.required),
        'lastname': new FormControl(this.currentUser['lastname'],Validators.required)
      })
    
  }
  editUser(){
    this.workersService.editUser(this.userId,this.editWorkerForm.value)
    this.editWorkerForm.reset
    this.router.navigateByUrl('')
  }

}

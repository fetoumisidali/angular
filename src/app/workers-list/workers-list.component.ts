import { Router } from '@angular/router';
import { WorkersService } from './../workers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workers-list',
  templateUrl: './workers-list.component.html',
  styleUrls: ['./workers-list.component.css']
})
export class WorkersListComponent implements OnInit {
  
  users : any = []
  constructor(private workersService : WorkersService,private router:Router) { }
  ngOnInit(): void {
    this.users = this.workersService.users
  }
  deleteUser(i : number){
    let message = confirm("do you want to delete ?");
    if(message == true){
      this.workersService.deleteUser(i)
    }
  }
  edit(id : number){
    this.router.navigateByUrl(`edit/${id}`)
  }
  
}

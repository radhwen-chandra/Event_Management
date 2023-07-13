import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  topUsers : any;
  worstUsers : any;
  newUsers : any;
  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.userService.percentage().subscribe(data => {
      if (data) {
       debugger
      }
    })
    this.userService.topUsers().subscribe(data=> {
      if(data){
        this.topUsers = data ;
      }
    })

    this.userService.worstUsers().subscribe(data => {
      if (data) {
        this.worstUsers = data;
      }
    })
    const d = new Date();
    let month = d.getMonth();
    this.userService.newUsers(month+1).subscribe(data => {
      if (data) {
        this.newUsers = data;
      }
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '@app/app/security/authentication.service';
import { UserService } from '@app/app/user/user.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  isAdmin : boolean =false;

  constructor(private authenticationService : AuthenticationService,private userService:UserService) { }

  ngOnInit(): void {
    let currentUser = this.authenticationService.getCurrentUser();
    this.userService.getUserById(+currentUser).subscribe(data=>{
      if(data){
        if (data.role === "ADMIN"){
          this.isAdmin = true;
        }else{
          this.isAdmin = false;
        }
      }
    })
  }

}

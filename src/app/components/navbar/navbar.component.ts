import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  isLoggedIn:boolean
  constructor(private UserService:UserService){
    this.isLoggedIn = this.UserService.getLocalStorageCheck
  }

  ngOnInit(): void {
    this.UserService.isAuthStatus().subscribe(data => {

      this.isLoggedIn = data
    })

  }


  loggedMeOut(){
    this.UserService.loggedOut()
    this.isLoggedIn = this.UserService.getLocalStorageCheck
  }



}

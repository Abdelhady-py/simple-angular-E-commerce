import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  userLogged: boolean = false;
  @ViewChild('local', { static: true }) testLocal: any;
  constructor(private userServ: UserService, private route: Router) {}
  ngOnInit(): void {
    this.userLogged = this.userServ.getLocalStorageCheck;
  }

  loggedMeIn() {
    this.userServ.login();
    this.userLogged = this.userServ.getLocalStorageCheck;
    this.route.navigate(['/all']);
  }
}

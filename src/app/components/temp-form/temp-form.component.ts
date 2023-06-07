import { UserService } from './../../services/user.service';
import { Component } from '@angular/core';

import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-temp-form',
  templateUrl: './temp-form.component.html',
  styleUrls: ['./temp-form.component.scss'],
})
export class TemplateFormComponent {
  userForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private route: Router
  ) {
    this.userForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required]],
      email: ['', [Validators.required]],
      mobiles: this.fb.array([]),
    });
  }

  get username() {
    return this.userForm.get('username');
  }
  get password() {
    return this.userForm.get('password');
  }
  get email() {
    return this.userForm.get('email');
  }

  get mobiles(): FormArray {
    return this.userForm.get('mobiles') as FormArray;
  }

  newMobile(): FormGroup {
    return this.fb.group({
      mobile: '',
    });
  }
  addMobile() {
    this.mobiles.push(this.newMobile());
  }

  removeMobile(numOfIndex: number) {
    this.mobiles.removeAt(numOfIndex);
  }

  addUser() {
    console.log(this.userForm.value);
    this.userService
      .signUp(this.userForm.value)
      .subscribe((data) => alert('user added!'));
    this.route.navigate(['/all']);
  }
}

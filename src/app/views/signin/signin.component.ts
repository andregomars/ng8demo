import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  username: string;
  password: string;

  constructor() { }

  ngOnInit() {

  }

  login() {
    console.log(`log in ${this.username}`);
  }
}

import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Login, Logout } from 'src/app/actions/auth.actions';
import { LoginInfo } from 'src/app/models/auth.model';
import { AuthState } from 'src/app/states/auth.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  username: string;
  password: string;
  @Select(AuthState.token) token$: Observable<string>;

  constructor(
    private store: Store
  ) { }

  ngOnInit() {

  }

  decodeUserName(token: string) {
    return atob(token);
  }

  login() {
    console.log(`log in ${this.username}`);
    const loginInfo = {
      username: this.username,
      password: this.password
    } as LoginInfo;
    this.store.dispatch(new Login(loginInfo));
  }

  logoff(token: string) {
    console.log(`log off ${atob(token)}`);
    this.store.dispatch(new Logout());
  }
}

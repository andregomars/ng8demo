import { LoginInfo } from '../models/auth.model';

export class Login {
    static readonly type = '[Auth] Login';
    constructor(public payload: LoginInfo) { }
}

export class Logout {
    static readonly type = '[Auth] Logout';
}
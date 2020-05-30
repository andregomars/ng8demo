import { Injectable } from "@angular/core";
import { LoginInfo } from '../models/auth.model';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    login(payload: LoginInfo): Observable<{token: string}> {
        console.log(`${payload.username} is logged in`);
        return of({ token: btoa(payload.username)});
    }

    logout(token: string): Observable<any> {
        console.log(`${atob(token)} is logged out`);
        return of(null);
    }

}
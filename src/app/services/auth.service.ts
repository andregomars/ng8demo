import { Injectable } from "@angular/core";
import { LoginInfo, AuthStateModel } from '../models/auth.model';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    login(payload: LoginInfo): Observable<{token: string}> {
        console.error(`${payload.username} is logged in`);
        return of({ token: btoa(payload.username)});
        // return of({ 
        //     username: payload.username,
        //     token: btoa(payload.password)
        // } as AuthStateModel );
    }

    logout(token: string): Observable<any> {
        console.error(`${atob(token)} is logged out`);
        return of(null);
    }

}
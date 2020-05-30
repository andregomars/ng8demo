import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofActionDispatched } from '@ngxs/store';

import { CheckForUpdateService } from './services/check-for-update.service';
import { UpdateService } from './services/update.service';
import { Logout } from './actions/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private actions: Actions,
    private router: Router,
    private checkForUpdateService: CheckForUpdateService,
    private updateService: UpdateService
    ) { }

  ngOnInit() {
    this.actions.pipe(ofActionDispatched(Logout)).subscribe(() => {
      console.log('dispatched')
      this.router.navigate(['/']);
    });
  }
  
}

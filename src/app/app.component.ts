import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofActionDispatched, Store } from '@ngxs/store';
import { fromEvent, Subject, Subscription } from 'rxjs';

import { CheckForUpdateService } from './services/check-for-update.service';
import { UpdateService } from './services/update.service';
import { Logout } from './actions/auth.actions';
import { filter, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  eventSub$ = new Subscription();

  constructor(
    private store: Store,
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

    this.eventSub$ = fromEvent(window, 'storage').pipe(
      filter((e: StorageEvent) => e.key === 'auth.token')
    ).subscribe((e: StorageEvent) => {
      if (!JSON.parse(e.newValue)) {
        this.store.dispatch(new Logout());
      }
    });
  }

  ngOnDestroy() {
    if (this.eventSub$) {
      this.eventSub$.unsubscribe();
    }
  }
  
}

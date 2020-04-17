import { Injectable, ApplicationRef } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { first } from 'rxjs/operators';
import { interval, concat } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class CheckForUpdateService {
  constructor(appRef: ApplicationRef, private swUpdate: SwUpdate) {
    if (!swUpdate.isEnabled) { return; }

    const appIsStable$ = appRef.isStable.pipe(first(isStable => isStable === true));
    const versionPollInterval$ = interval(environment.versionPollInMinutes * 60 * 1000);
    // const versionPollInterval$ = interval(10 * 1000);
    const pollOnceAppIsStable$ = concat(appIsStable$, versionPollInterval$);

    // pollOnceAppIsStable$.subscribe(() => this.swUpdate.checkForUpdate());
    pollOnceAppIsStable$.subscribe(() => {
      console.warn(`start version check in ${environment.versionPollInMinutes} minutes`);
      this.swUpdate.checkForUpdate();
    });
  }
}

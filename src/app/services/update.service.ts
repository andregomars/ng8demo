import { Injectable } from '@angular/core';

import { SwUpdate } from '@angular/service-worker';

@Injectable({
    providedIn: 'root'
})
export class UpdateService {
  constructor(private swUpdate: SwUpdate) {
    if (!swUpdate.isEnabled) { return; }

    this.swUpdate.available.subscribe(evt => {
      // an update is available, add some logic here.
      console.warn(`new version ${evt.available.hash} is available`);
      this.swUpdate.activateUpdate().then(() =>
        document.location.reload()
      );
    });
  }
}

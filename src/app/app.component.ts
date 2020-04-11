import { Component } from '@angular/core';
import { CheckForUpdateService } from './services/check-for-update.service';
import { UpdateService } from './services/update.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private checkForUpdateService: CheckForUpdateService,
    private updateService: UpdateService
    ) { }
}

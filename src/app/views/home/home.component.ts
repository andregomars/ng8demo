import { Component, OnInit } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Regular Ng8 new';
  show$ = new BehaviorSubject<boolean>(false);

  constructor() { }

  ngOnInit() {
    // this.syncLoad();
    this.show$.next(true);
  }

  private asyncLoad() {
    setTimeout(() => {
      this.loadContent();
    }, environment.delay);
  }

  private syncLoad() {
    const end = Date.now() + environment.delay;
    while (Date.now() < end) { continue; }
    this.loadContent();
  }

  private loadContent() {
    this.title = `Regular Ng8 delays ${environment.delay}ms`;
    this.show$.next(true);
  }

}

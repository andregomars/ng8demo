import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Regular Ng8';
  delay = 3000;

  constructor() { }

  ngOnInit() {
    // setTimeout(() => {
    //   console.log('here the home init')
    //   this.title = `Regular Ng8 delays ${this.delay}ms`;
    // }, this.delay);

    const end = Date.now() + this.delay;
    while (Date.now() < end) continue
    this.title = `Regular Ng8 delays ${this.delay}ms`;
  }

}

import { Component, OnInit } from '@angular/core';
import { Team } from '../../models/team';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-virtualscroll',
  templateUrl: './virtualscroll.component.html',
  styleUrls: ['./virtualscroll.component.scss']
})
export class VirtualScrollComponent implements OnInit {
  teams: Team[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.teams = this.dataService.getTeams();
  }

}
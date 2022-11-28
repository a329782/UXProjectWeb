import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LeaguesService } from '../leagues.service';

@Component({
  selector: 'app-arbitros',
  templateUrl: './arbitros.page.html',
  styleUrls: ['./arbitros.page.scss'],
})
export class ArbitrosPage implements OnInit, OnDestroy {
  
  leagueDay: string;
  subscription: Subscription;

  leagues = [];

  constructor(private leaguesService: LeaguesService) { }

  ngOnInit() {
    this.leagues = this.leaguesService.getLeagues();
    this.subscription = this.leaguesService.currentLeagueDay.subscribe(leagueDay => this.leagueDay = leagueDay)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

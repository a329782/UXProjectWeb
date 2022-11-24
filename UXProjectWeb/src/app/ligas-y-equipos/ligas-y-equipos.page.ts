import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LigasService } from '../ligas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ligas-y-equipos',
  templateUrl: './ligas-y-equipos.page.html',
  styleUrls: ['./ligas-y-equipos.page.scss'],
})
export class LigasYEquiposPage implements OnInit, OnDestroy {

  statisticsDay: string;
  statisticsSubscription: Subscription;

  leagueTeams = [];
  
  constructor(private leaguesService: LigasService, private router: Router) { }

  openTeamDetailsPage(leagueDay){
    this.router.navigateByUrl('./detalles');
    this.leaguesService.changeLeagueDay(leagueDay);
  }

  ngOnInit() {
    this.leagueTeams = this.leaguesService.getLeagueTeams();

    this.statisticsSubscription = this.leaguesService.currentStatisticsDay.subscribe(statisticsDay => this.statisticsDay = statisticsDay);

  }

  ngOnDestroy() {
    this.statisticsSubscription.unsubscribe();
  }

}

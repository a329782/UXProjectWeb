import { Subscription } from 'rxjs';
import { LeaguesService } from '../../leagues.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: ['./detalles.page.scss'],
})
export class DetallesPage implements OnInit {

  constructor(private leaguesService: LeaguesService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

}

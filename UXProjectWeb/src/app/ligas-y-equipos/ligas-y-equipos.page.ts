import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ligas-y-equipos',
  templateUrl: './ligas-y-equipos.page.html',
  styleUrls: ['./ligas-y-equipos.page.scss'],
})
export class LigasYEquiposPage implements OnInit {

  constructor() { }

  ngOnInit() {
    const menu = document.getElementById("menu-lateral");
    if (menu.style.display != 'initial') menu.style.display = 'initial';
  }

}

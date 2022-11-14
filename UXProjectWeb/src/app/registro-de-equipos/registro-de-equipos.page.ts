import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro-de-equipos',
  templateUrl: './registro-de-equipos.page.html',
  styleUrls: ['./registro-de-equipos.page.scss'],
})
export class RegistroDeEquiposPage implements OnInit {

  constructor() { }

  ngOnInit() {
    const menu = document.getElementById("menu-lateral");
    if (menu.style.display != 'initial') menu.style.display = 'initial';
  }

}

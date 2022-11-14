import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nueva-temporada',
  templateUrl: './nueva-temporada.page.html',
  styleUrls: ['./nueva-temporada.page.scss'],
})
export class NuevaTemporadaPage implements OnInit {

  constructor() { }

  ngOnInit() {
    const menu = document.getElementById("menu-lateral");
    if (menu.style.display != 'initial') menu.style.display = 'initial';
  }

}

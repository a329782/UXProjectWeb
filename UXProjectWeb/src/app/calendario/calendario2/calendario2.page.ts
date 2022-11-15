import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendario2',
  templateUrl: './calendario2.page.html',
  styleUrls: ['./calendario2.page.scss'],
})
export class Calendario2Page implements OnInit {

  constructor() { }

  ngOnInit() {
    const menu = document.getElementById("menu-lateral");
    if (menu.style.display != 'initial') menu.style.display = 'initial';
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arbitros',
  templateUrl: './arbitros.page.html',
  styleUrls: ['./arbitros.page.scss'],
})
export class ArbitrosPage implements OnInit {

  constructor() { }

  ngOnInit() {
    const menu = document.getElementById("menu-lateral");
    if (menu.style.display != 'initial') menu.style.display = 'initial';
  }

}

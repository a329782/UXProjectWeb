import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public menu: MenuController) { }

  ngOnInit() {
    // Desactiva el menu cuando se inicializa esta pagina
    this.menu.enable(false);
  }

  ionViewWillEnter() {
    // Desactiva el menu cuando entra a esta pagina
    this.menu.enable(false);
  }

  ionViewDidLeave() {
    // Activa el menu cuando pasa a otra pagina
    this.menu.enable(true);
  }

}

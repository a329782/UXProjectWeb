import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

// Paginas del menú lateral
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/inicio', icon: 'home' },
    { title: 'Calendario', url: '/calendario', icon: 'calendar' },
    { title: 'Estadisticas', url: '/estadisticas', icon: 'stats-chart' },
    { title: 'Ligas y Equipos', url: '/ligas-y-equipos', icon: 'heart' },
    { title: 'Registro de Equipos', url: '/registro-de-equipos', icon: 'archive' },
    { title: 'Nueva Temporada', url: '/nueva-temporada', icon: 'calendar-clear' },
    { title: 'Árbitros', url: '/arbitros', icon: 'warning' },
    { title: 'Salir', url: '/login', icon: 'exit' },
  ];
  constructor() {}
}

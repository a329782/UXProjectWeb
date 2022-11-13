import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'calendario',
    loadChildren: () => import('./calendario/calendario.module').then( m => m.CalendarioPageModule)
  },
  {
    path: 'estadisticas',
    loadChildren: () => import('./estadisticas/estadisticas.module').then( m => m.EstadisticasPageModule)
  },
  {
    path: 'ligas-y-equipos',
    loadChildren: () => import('./ligas-y-equipos/ligas-y-equipos.module').then( m => m.LigasYEquiposPageModule)
  },
  {
    path: 'registro-de-equipos',
    loadChildren: () => import('./registro-de-equipos/registro-de-equipos.module').then( m => m.RegistroDeEquiposPageModule)
  },
  {
    path: 'nueva-temporada',
    loadChildren: () => import('./nueva-temporada/nueva-temporada.module').then( m => m.NuevaTemporadaPageModule)
  },
  {
    path: 'arbitros',
    loadChildren: () => import('./arbitros/arbitros.module').then( m => m.ArbitrosPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

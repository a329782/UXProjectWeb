import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeaguesService {

  private leagueDaySource = new BehaviorSubject('default leagueDay');
  currentLeagueDay = this.leagueDaySource.asObservable();

  private statisticsDaySource = new BehaviorSubject('default statistics day');
  currentStatisticsDay = this.statisticsDaySource.asObservable();

  private playersScoreSource = new BehaviorSubject('default player');
  currentPlayersScore = this.playersScoreSource.asObservable();

  private leagues = [
    {
        id: 0,
        day: 'Domingo',
        belongs: false,
        teamRequested: false,
        team: 'Real Mandril',
    },
    {
        id: 1,
        day: 'Lunes',
        belongs: false,
        teamRequested: false,
        team: 'Los capis',
    },
    {
        id: 2,
        day: 'Martes',
        belongs: false,
        teamRequested: false,
        team: 'Los capis',
    },
    {
        id: 3,
        day: 'Miercoles',
        belongs: true,
        teamRequested: false,
        team: 'Los temerarios',
        season: 10,
        jj: 10, 
        jg: 5, 
        jp: 3, 
        je: 2, 
        gf: 27, 
        gc: 18, 
        pts: 17, 
        pos: 3,
        players: [
          { id:0, name: 'Juan Pérez', numGoals: 14, yellowCards: 5, redCards: 2, gamesPlayed: 10 },
          { id:1, name: 'Daniel García', numGoals: 10, yellowCards: 5, redCards: 2, gamesPlayed: 10 },
          { id:2, name: 'Alexander Martínez', numGoals: 8, yellowCards: 5, redCards: 2, gamesPlayed: 10 },
          { id:3, name: 'Mateo López', numGoals: 7, yellowCards: 5, redCards: 2, gamesPlayed: 10 },
          { id:4, name: 'Leonardo Rodríguez', numGoals: 5, yellowCards: 5, redCards: 2, gamesPlayed: 10 }
        ]
    },
    {
        id: 4,
        day: 'Jueves',
        team: 'Los abuelos F.C.',
        teamRequested: true,
        belongs: false,
        season: 12
    },
    {
        id: 5,
        day: 'Viernes',
        belongs: true,
        teamRequested: false,
        team: 'Los cadetes',
        season: 8,
        jj: 8,
        jg: 8,
        jp: 0,
        je: 0,
        gf: 20,
        gc: 7,
        pts: 24,
        pos: 1,
        players: [
          { id:5, name: 'Pedro Gonzalez', numGoals: 7, yellowCards: 4, redCards: 0, gamesPlayed: 8},
          { id:6, name: 'Gabriel Hernandez', numGoals: 6, yellowCards: 6, redCards: 2, gamesPlayed: 8 },
          { id:7, name: 'Martin Martínez', numGoals: 3, yellowCards: 1, redCards: 0, gamesPlayed: 8 },
          { id:8, name: 'Jose Arellano', numGoals: 2, yellowCards: 3, redCards: 0, gamesPlayed: 8 },
          { id:9, name: 'Jacobo Guerra', numGoals: 2, yellowCards: 6, redCards: 0, gamesPlayed: 8 }
        ]
    },
    {
        id: 6,
        day: 'Sabado',
        team: 'Los capis',
        teamRequested: false,
        season: 6,
        jj: 6,
        jg: 3,
        jp: 1,
        je: 2,
        gf: 12,
        gc: 16,
        pts: 11,
        pos: 7
    }
  ];

  private leagueTeams = [
    {
      id: 1,
      day: 'Lunes',
      season: 10,
      teams: [
        { id: 0, name: 'Vodka Juniors', pts: 31, pos: 1},
        { id: 1, name: 'El Combo Vikingo', pts: 28, pos: 2},
        { id: 2, name: 'Los Cholos', pts: 26, pos: 3},
        { id: 3, name: 'Los Apaches', pts: 25, pos: 4},
        { id: 4, name: 'Los Minotauros', pts: 25, pos: 5},
        { id: 5, name: 'Las capas sin héroes', pts: 21, pos: 6},
        { id: 6, name: 'Grupo verde', pts: 19, pos: 7},
        { id: 7, name: 'Escuadron Dinamita', pts: 18, pos: 8}
      ]
    },
    {
      id: 2,
      day: 'Martes',
      season: 10,
      teams: [
        { id: 0, name: 'Los Plebeyos', pts: 31, pos: 1},
        { id: 1, name: 'Los Soberanos', pts: 28, pos: 2},
        { id: 2, name: 'Sintra bajos', pts: 26, pos: 3},
        { id: 3, name: 'Equipo Chuchuluco', pts: 25, pos: 4},
        { id: 4, name: 'Forever Alones', pts: 25, pos: 5},
        { id: 5, name: 'Reyes del fútbol', pts: 21, pos: 6},
        { id: 6, name: 'Wildcats', pts: 19, pos: 7},
        { id: 7, name: 'Los dormilones', pts: 18, pos: 8}
      ]
    },
    {
      id: 3,
      day: 'Miercoles',
      season: 10,
      teams: [
        { id: 0, name: 'Los correcaminos', pts: 31, pos: 1},
        { id: 1, name: 'Tacos Gera', pts: 28, pos: 2},
        { id: 2, name: 'Los temerarios', pts: 26, pos: 3},
        { id: 3, name: 'Caballeros', pts: 25, pos: 4},
        { id: 4, name: 'Galacticos', pts: 25, pos: 5},
        { id: 5, name: 'Gasolineras Carvel', pts: 21, pos: 6},
        { id: 6, name: 'Bonus team', pts: 19, pos: 7},
        { id: 7, name: 'Jidosha', pts: 18, pos: 8}
      ]
    },
    {
      id: 4,
      day: 'Jueves',
      season: 11,
      teams: [
        { id: 0, name: 'Premiere', pts: 32, pos: 1},
        { id: 1, name: 'Rivelinos F.C.', pts: 30, pos: 2},
        { id: 2, name: 'Tio pipsa', pts: 29, pos: 3},
        { id: 3, name: 'Matamoros', pts: 29, pos: 4},
        { id: 4, name: 'Team papas', pts: 26, pos: 5},
        { id: 5, name: 'La talleres', pts: 24, pos: 6},
        { id: 6, name: 'Mariscrudos', pts: 20, pos: 7},
        { id: 7, name: 'Flor arte', pts: 17, pos: 8}
      ]
    },
    {
      id: 5,
      day: 'Viernes',
      season: 8,
      teams: [
        { id: 0, name: 'Los cadetes', pts: 24, pos: 1},
        { id: 1, name: 'La PRI', pts: 23, pos: 2},
        { id: 2, name: 'Abuelos F.C.', pts: 20, pos: 3},
        { id: 3, name: 'Sacachispas', pts: 18, pos: 4},
        { id: 4, name: 'Rico pollo', pts: 17, pos: 5},
        { id: 5, name: 'Cuervos', pts: 16, pos: 6},
        { id: 6, name: 'Chalo caps', pts: 13, pos: 7},
        { id: 7, name: 'Balones ponchados', pts: 11, pos: 8}
      ]
    },
    {
      id: 6,
      day: 'Sabado',
      season: 6,
      teams: [
        { id: 0, name: 'Granja miranda', pts: 31, pos: 1},
        { id: 1, name: 'La cabañita', pts: 28, pos: 2},
        { id: 2, name: 'Juaguares', pts: 26, pos: 3},
        { id: 3, name: 'Perfiles del real', pts: 25, pos: 4},
        { id: 4, name: 'Vetados', pts: 25, pos: 5},
        { id: 5, name: 'La carreta', pts: 21, pos: 6},
        { id: 6, name: 'Los capis', pts: 11, pos: 7},
        { id: 7, name: 'Don Goyo', pts: 9, pos: 8}
      ]
    },
    {
      id: 0,
      day: 'Domingo',
      season: 6,
      teams: [
        { id: 0, name: 'Golden Warriors', pts: 31, pos: 1},
        { id: 1, name: 'Los muggles', pts: 28, pos: 2},
        { id: 2, name: 'Los Puercules', pts: 26, pos: 3},
        { id: 3, name: 'The Panokias', pts: 25, pos: 4},
        { id: 4, name: 'Los desterrados', pts: 25, pos: 5},
        { id: 5, name: 'The Kwimarts', pts: 21, pos: 6},
        { id: 6, name: 'Los Organelos del señor', pts: 11, pos: 7},
        { id: 7, name: 'Equipo bichito', pts: 9, pos: 8}
      ]
    }
  ]

  constructor() { }

  changeLeagueDay(leagueDay: string){
    this.leagueDaySource.next(leagueDay);
  }

  changeStatisticsDay(statisticsDay: string){
    this.statisticsDaySource.next(statisticsDay);
  }

  setPlayerStatistics(playersInfo: string){
    this.playersScoreSource.next(playersInfo);
  }


  getLeagues() {
    return this.leagues;
  }

  getLeagueTeams() {
    return this.leagueTeams;
  }

}

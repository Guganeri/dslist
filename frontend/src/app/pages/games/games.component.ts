import { Component, OnInit } from '@angular/core';
import { IGameModel } from 'src/app/models/game-model';
import { IGamesListModel } from 'src/app/models/games-list-model';
import { GamesListService } from 'src/app/service/games-list/games-list.service';
import { GamesService } from 'src/app/service/games/games.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css'],
})
export class GamesComponent implements OnInit {
  games: IGameModel[] = [];
  gamesList: IGamesListModel[] = [];

  constructor(
    private gamesService: GamesService,
    private gamesListService: GamesListService
  ) {}

  ngOnInit() {
    this.gamesService.findAllGames().subscribe((result) => {
      this.games = result;
    });

    this.gamesListService.findAllGamesList().subscribe((result) => {
      this.gamesList = result;
    });
  }

  findByGameList(id: number) {
    this.gamesListService.findGamesListById(id).subscribe((result) => {
      this.games = result;
    });
  }

  loadAllGames(){
    this.ngOnInit();
  }
}

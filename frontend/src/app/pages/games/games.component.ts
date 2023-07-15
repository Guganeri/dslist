import { Component, OnInit } from '@angular/core';
import { IGameModel } from 'src/app/models/game-model';
import { GamesService } from 'src/app/service/games/games.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit{

  games : IGameModel[] = [];

  constructor(private gamesService: GamesService){}

  ngOnInit(){
    this.gamesService.findAllGames().subscribe((result) => {
      this.games = result;
      console.log(result)
    })
  }




}

import { Component, OnInit } from '@angular/core';
import { IGamesListModel } from 'src/app/models/games-list-model';
import { GamesListService } from 'src/app/service/games-list/games-list.service';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css'],
})
export class GamesListComponent implements OnInit {
  gamesList: IGamesListModel[] = [];

  constructor(private gamesListService: GamesListService) {}

  ngOnInit() {
    this.gamesListService.findAllGamesList().subscribe((result) => {
      this.gamesList = result;
      console.log(result);
    });
  }

  findByGameList(id: number){
    alert(`TODO - LIST FOR ID GAME LIST ID - ${id}`);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IGameModel } from 'src/app/models/game-model';
import { IGamesListModel } from 'src/app/models/games-list-model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class GamesListService {
  constructor(private httpClient: HttpClient) {}

  apiUrl = environment.apiGamesUrl;
  resource = 'lists';
  resourceFindGamesListById = '/games';

  //'/{listId}/games'

  findAllGamesList(): Observable<IGamesListModel[]>{
    return this.httpClient.get<IGamesListModel[]>(
      `${this.apiUrl}${this.resource}`
    );
  }

  findGamesListById(id: number): Observable<IGameModel[]>{
    return this.httpClient.get<IGameModel[]>(
      `${this.apiUrl}${this.resource}/${id}${this.resourceFindGamesListById}`
    );
  }
}

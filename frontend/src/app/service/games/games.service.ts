import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IGameModel } from 'src/app/models/game-model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private httpClient: HttpClient) { }

  apiUrl = environment.apiGamesUrl;
  resourceFindAllGames = 'games';

  findAllGames(): Observable<IGameModel[]>{
    return this.httpClient.get<IGameModel[]>(
      `${this.apiUrl}${this.resourceFindAllGames}`
    );
  }
}

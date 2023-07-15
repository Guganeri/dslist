import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IGameModel } from 'src/app/models/game-model';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private httpClient: HttpClient) { }

  resourceFoundAllGames = 'http://localhost:8080/games';

  findAllGames(): Observable<IGameModel[]>{
    return this.httpClient.get<IGameModel[]>(`${this.resourceFoundAllGames}`)
  }
}

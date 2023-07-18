import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IGamesListModel } from 'src/app/models/games-list-model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class GamesListService {
  constructor(private httpClient: HttpClient) {}

  apiUrl = environment.apiGamesUrl;
  resourceFindAllGamesList = 'lists';

  findAllGamesList(): Observable<IGamesListModel[]>{
    return this.httpClient.get<IGamesListModel[]>(`${this.apiUrl}${this.resourceFindAllGamesList}`);
  }
}

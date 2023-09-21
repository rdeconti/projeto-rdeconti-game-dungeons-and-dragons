import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from '../model/game.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private baseUrl = "http://localhost:8080/game/games"

  constructor(private httpClient: HttpClient) {
  }

  getGameList(): Observable<Game[]> {
    return this.httpClient.get<Game[]>(`${this.baseUrl}/get`);
  }

  deleteGame(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/delete/${id}`);
  }

  createGame(game: Game): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}/post`, game);
  }

  getGameById(id: number): Observable<Game>{
    return this.httpClient.get<Game>(`${this.baseUrl}/get/${id}`);
  }

  updateGame(id:number, game:Game): Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/put/${id}`, game);
  }

  whoStartGame() {
    return this.httpClient.get(`${this.baseUrl}/whoStartGame`, {responseType: 'text'});
  }

}

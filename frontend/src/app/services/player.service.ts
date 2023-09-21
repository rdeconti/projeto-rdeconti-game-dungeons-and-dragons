import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from '../model/player.model';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private baseUrl = "http://localhost:8080/game/players"

  constructor(private httpClient: HttpClient) {
  }

  getPlayerList(): Observable<Player[]> {
    return this.httpClient.get<Player[]>(`${this.baseUrl}/get`);
  }

  deletePlayer(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/delete/${id}`);
  }

  createPlayer(player: Player): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}/post`, player);
  }

  getPlayerById(id: number): Observable<Player>{
    return this.httpClient.get<Player>(`${this.baseUrl}/get/${id}`);
  }

  updatePlayer(id:number, player:Player): Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/put/${id}`, player);
  }

}

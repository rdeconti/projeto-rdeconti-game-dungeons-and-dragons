import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../model/character.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private baseUrl = "http://localhost:8080/game/characters"

  constructor(private httpClient: HttpClient) {
  }

  getCharacterList(): Observable<Character[]> {
    return this.httpClient.get<Character[]>(`${this.baseUrl}/get`);
  }

  deleteCharacter(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/delete/${id}`);
  }

  createCharacter(character: Character): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}/post`, character);
  }

  getCharacterById(id: number): Observable<Character>{
    return this.httpClient.get<Character>(`${this.baseUrl}/get/${id}`);
  }

  updateCharacter(id:number, character:Character): Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/put/${id}`, character);
  }

}

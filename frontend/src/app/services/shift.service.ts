import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Shift } from '../model/shift.model';

@Injectable({
  providedIn: 'root'
})
export class ShiftService {

  private baseUrl = "http://localhost:8080/game/shifts"

  constructor(private httpClient: HttpClient) {
  }

  getShiftList(): Observable<Shift[]> {
    return this.httpClient.get<Shift[]>(`${this.baseUrl}/get`);
  }

  deleteShift(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/delete/${id}`);
  }

  createShift(shift: Shift): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}/post`, shift);
  }

  getShiftById(id: number): Observable<Shift>{
    return this.httpClient.get<Shift>(`${this.baseUrl}/get/${id}`);
  }

  updateShift(id:number, shift:Shift): Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/put/${id}`, shift);
  }

  calculateAttack(NumberPointsStrength: number, NumberPointsAgility: number) {
    return this.httpClient.get(`${this.baseUrl}/calculateAttack/{NumberPointsStrength}/{NumberPointsAgility}?NumberPointsAgility=${NumberPointsAgility}&NumberPointsStrength=${NumberPointsStrength}`, {responseType: 'text'});
  }

  calculateDefense(NumberPointsDefense: number, NumberPointsAgility: number) {
    return this.httpClient.get(`${this.baseUrl}/calculateDefense/{NumberPointsDefense}/{NumberPointsAgility}?NumberPointsAgility=${NumberPointsAgility}&NumberPointsDefense=${NumberPointsDefense}`, {responseType: 'text'});
  }

  calculateDamage(
      CalculatedDefense: number,
      CalculatedAttack: number,
      NumberPointsStrength: number,
      QuantityDices: number,
      QuantityFaces: number) {
    return this.httpClient.get(`${this.baseUrl}/calculateDamage/{CalculatedDefense}/{CalculatedAttack}/{NumberPointsStrength}/{QuantityDices}/{QuantityFaces}?CalculatedDefense=${CalculatedDefense}&CalculatedAttack=${CalculatedAttack}&NumberPointsStrength=${NumberPointsStrength}&QuantityDices=${QuantityDices}&QuantityFaceDices=${QuantityFaces}`, {responseType: 'text'});
  }

  CalculateLivePoints(CalculatedDamage: number, NumberPointsLive: number) {
    return this.httpClient.get(`${this.baseUrl}/calculateLivePoints/{CalculatedDamage}/{NumberPointsLive}?CalculatedDamage=${CalculatedDamage}&NumberPointsLive=${NumberPointsLive}`, {responseType: 'text'});
  }

}

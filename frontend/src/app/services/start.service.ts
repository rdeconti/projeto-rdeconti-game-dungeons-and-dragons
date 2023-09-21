import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StartService {

  private baseUrl = "http://localhost:8080/game/start"

  constructor(private httpClient: HttpClient) {
  }

}

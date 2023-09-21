import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from '../../../services/game.service';
import { Game } from '../../../model/game.model';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  games: Game[] | undefined;

  constructor(private gameService: GameService, private router: Router) {

  }

  ngOnInit(): void {
    this.getGames();
  }

  private getGames() {
    this.gameService.getGameList().subscribe(data => {
      this.games = data;
    });
  }

  updateGame(id: number) {
    this.router.navigate(['game-update', id]);
  }

  detailGame(id: number) {
    this.router.navigate(['game-detail', id]);
  }

  createGame() {
    this.router.navigate(['game-create']);
  }

  deleteGame(id: number) {
    this.router.navigate(['game-delete', id]);
  }

  chooseGame(id: number) {
    localStorage.setItem("nextStepName", "Character");
    localStorage.setItem("currentGameId", id.toString());
    this.router.navigate(['start']);
  }

}

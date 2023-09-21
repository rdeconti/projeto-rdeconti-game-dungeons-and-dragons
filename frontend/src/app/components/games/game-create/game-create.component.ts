import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from '../../../services/game.service';
import { Game } from '../../../model/game.model';

@Component({
  selector: 'app-game-create',
  templateUrl: './game-create.component.html',
  styleUrls: ['./game-create.component.css']
})
export class GameCreateComponent implements OnInit {

  game: Game = new Game();

  constructor(private gameService: GameService, private router: Router) { }

  ngOnInit(): void {

  }

  saveGame() {
    this.gameService.createGame(this.game).subscribe({
      next: (data) => {
        console.log(data);
        this.redirectToGameList();
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

  redirectToGameList() {
    this.router.navigate(['/game-list']);
  }

  onSubmit() {
    console.log(this.game);
    this.saveGame();
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from '../../../services/game.service';
import { Game } from '../../../model/game.model';

@Component({
  selector: 'app-game-update',
  templateUrl: './game-update.component.html',
  styleUrls: ['./game-update.component.css']
})
export class GameUpdateComponent implements OnInit {
  id!: number;
  game: Game = new Game();

  constructor(private gameService: GameService,
    private route: ActivatedRoute, private router: Router) { }

  private getGameById() {
    this.id = this.route.snapshot.params['id'];
    this.gameService.getGameById(this.id).subscribe({
      next: (data) => {
        this.game = data;
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

  ngOnInit(): void {
    this.getGameById();
  }

  updateGame() {
    this.gameService.updateGame(this.id, this.game).subscribe({
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
    this.updateGame();
  }

}


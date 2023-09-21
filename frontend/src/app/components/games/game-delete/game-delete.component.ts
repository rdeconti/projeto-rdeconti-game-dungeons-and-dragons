import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from '../../../services/game.service';
import { Game } from '../../../model/game.model';

@Component({
  selector: 'app-game-delete',
  templateUrl: './game-delete.component.html',
  styleUrls: ['./game-delete.component.css']
})
export class GameDeleteComponent implements OnInit {
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

  deleteGame() {
    this.gameService.deleteGame(this.id).subscribe(data => {
      console.log(data);
      this.redirectToGameList();
    });
  }
  redirectToGameList() {
    this.router.navigate(['/game-list']);
  }
  onSubmit() {
    console.log(this.game);
    this.deleteGame();
  }

}

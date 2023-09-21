import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from '../../../services/player.service';
import { Player } from '../../../model/player.model';

@Component({
  selector: 'app-player-create',
  templateUrl: './player-create.component.html',
  styleUrls: ['./player-create.component.css']
})
export class PlayerCreateComponent implements OnInit {

  player: Player = new Player();

  constructor(private playerService: PlayerService, private router: Router) { }

  ngOnInit(): void {
  }

  savePlayer() {
    this.playerService.createPlayer(this.player).subscribe({
      next: (data) => {
        console.log(data);
        this.redirectToPlayerList();
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

  redirectToPlayerList() {
    this.router.navigate(['/player-list']);
  }

  onSubmit() {
    console.log(this.player);
    this.savePlayer();
  }
}

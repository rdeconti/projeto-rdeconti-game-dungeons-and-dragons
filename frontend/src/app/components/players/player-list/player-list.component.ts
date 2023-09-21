import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from '../../../services/player.service';
import { Player } from '../../../model/player.model';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  players: Player[] | undefined;

  constructor(private playerService: PlayerService, private router: Router) {

  }

  ngOnInit(): void {
    this.getPlayers();
  }

  private getPlayers() {
    this.playerService.getPlayerList().subscribe(data => {
      this.players = data;
    });
  }

  updatePlayer(id: number) {
    this.router.navigate(['player-update', id]);
  }

  detailPlayer(id: number) {
    this.router.navigate(['player-detail', id]);
  }

  createPlayer() {
    this.router.navigate(['player-create']);
  }

  deletePlayer(id: number) {
    this.router.navigate(['player-delete', id]);
  }

  choosePlayer(id: number, name: string) {
    localStorage.setItem("nextStepName", "Character");
    localStorage.setItem("currentPlayerId", id.toString());
    localStorage.setItem("currentPlayerName", name.toString());
    this.router.navigate(['start']);
  }

}

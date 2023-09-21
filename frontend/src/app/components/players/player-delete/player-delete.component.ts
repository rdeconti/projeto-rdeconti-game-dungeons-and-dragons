import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from '../../../services/player.service';
import { Player } from '../../../model/player.model';

@Component({
  selector: 'app-player-delete',
  templateUrl: './player-delete.component.html',
  styleUrls: ['./player-delete.component.css']
})
export class PlayerDeleteComponent implements OnInit {
  id!: number;
  player: Player = new Player();

  constructor(private playerService: PlayerService,
    private route: ActivatedRoute, private router: Router) { }

  private getPlayerById() {

    this.id = this.route.snapshot.params['id'];
    this.playerService.getPlayerById(this.id).subscribe({
      next: (data) => {
        this.player = data;
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

  ngOnInit(): void {
    this.getPlayerById();
  }

  deletePlayer() {
    this.playerService.deletePlayer(this.id).subscribe(data => {
      console.log(data);
      this.redirectToPlayerList();
    });
  }

  redirectToPlayerList() {
    this.router.navigate(['/player-list']);
  }

  onSubmit() {
    console.log(this.player);
    this.deletePlayer();
  }

}

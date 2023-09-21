import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterService } from '../../../services/character.service';
import { Character } from '../../../model/character.model';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {
  id!: number;
  character: Character = new Character();

  constructor(private characterService: CharacterService,
    private route: ActivatedRoute, private router: Router) { }

  private getCharacterById() {
    this.id = this.route.snapshot.params['id'];
    this.characterService.getCharacterById(this.id).subscribe({
      next: (data) => {
        this.character = data;
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

  ngOnInit(): void {
    this.getCharacterById();
  }

  updateCharacter() {
    this.characterService.updateCharacter(this.id, this.character).subscribe({
      next: (data) => {
        console.log(data);
        this.redirectToCharacterList();
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

  redirectToCharacterList() {
    this.router.navigate(['/character-list']);
  }

  onSubmit() {
    console.log(this.character);
    this.updateCharacter();
  }

}


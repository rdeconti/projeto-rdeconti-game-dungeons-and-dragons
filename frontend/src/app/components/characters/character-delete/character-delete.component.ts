import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterService } from '../../../services/character.service';
import { Character } from '../../../model/character.model';

@Component({
  selector: 'app-character-delete',
  templateUrl: './character-delete.component.html',
  styleUrls: ['./character-delete.component.css']
})
export class CharacterDeleteComponent implements OnInit {
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

  deleteCharacter() {
    this.characterService.deleteCharacter(this.id).subscribe(data => {
      console.log(data);
      this.redirectToCharacterList();
    });
  }
  redirectToCharacterList() {
    this.router.navigate(['/character-list']);
  }
  onSubmit() {
    console.log(this.character);
    this.deleteCharacter();
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CharacterService } from '../../../services/character.service';
import { Character } from '../../../model/character.model';

@Component({
  selector: 'app-character-create',
  templateUrl: './character-create.component.html',
  styleUrls: ['./character-create.component.css']
})
export class CharacterCreateComponent implements OnInit {

  character: Character = new Character();

  constructor(private characterService: CharacterService, private router: Router) { }

  ngOnInit(): void {
  }

  saveCharacter() {
    this.characterService.createCharacter(this.character).subscribe({
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
    this.saveCharacter();
  }
}

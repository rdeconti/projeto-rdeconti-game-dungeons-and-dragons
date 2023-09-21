import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CharacterService } from '../../../services/character.service';
import { Character } from '../../../model/character.model';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  characters: Character[] | undefined;

  constructor(private characterService: CharacterService, private router: Router) {

  }

  ngOnInit(): void {
    this.getCharacters();
  }

  private getCharacters() {
    this.characterService.getCharacterList().subscribe(data => {
      this.characters = data;
    });
  }

  updateCharacter(id: number) {
    this.router.navigate(['character-update', id]);
  }

  detailCharacter(id: number) {
    this.router.navigate(['character-detail', id]);
  }

  createCharacter() {
    this.router.navigate(['character-create']);
  }

  deleteCharacter(id: number) {
    this.router.navigate(['character-delete', id]);
  }

  chooseCharacter(
      id: number,
      name: string,
      type: string,
      numberPointLive: number,
      numberPointStrength: number,
      numberPointDefense: number,
      numberPointAgility: number,
      quantityDice: number,
      quantityFaceDice: number) {
        localStorage.setItem("nextStepName", "Opponent");
        localStorage.setItem("currentYourCharacterId", id.toString());
        localStorage.setItem("currentYourCharacterName", name.toString());
        localStorage.setItem("currentYourCharacterType", type.toString());
        localStorage.setItem("currentYourCharacterNumberPointsLive", numberPointLive.toString());
        localStorage.setItem("currentYourCharacterNumberPointsStrength", numberPointStrength.toString());
        localStorage.setItem("currentYourCharacterNumberPointsDefense", numberPointDefense.toString());
        localStorage.setItem("currentYourCharacterNumberPointsAgility", numberPointAgility.toString());
        localStorage.setItem("currentYourCharacterQuantityDices", quantityDice.toString());
        localStorage.setItem("currentYourCharacterQuantityFaceDices", quantityFaceDice.toString());
        this.router.navigate(['start']);
  }

  chooseOpponent(
        id: number,
        name: string,
        type: string,
        numberPointLive: number,
        numberPointStrength: number,
        numberPointDefense: number,
        numberPointAgility: number,
        quantityDice: number,
        quantityFaceDice: number) {
          localStorage.setItem("nextStepName", "WhoStartGame");
          localStorage.setItem("currentYourOpponentId", id.toString());
          localStorage.setItem("currentYourOpponentName", name.toString());
          localStorage.setItem("currentYourOpponentType", type.toString());
          localStorage.setItem("currentYourOpponentNumberPointsLive", numberPointLive.toString());
          localStorage.setItem("currentYourOpponentNumberPointsStrength", numberPointStrength.toString());
          localStorage.setItem("currentYourOpponentNumberPointsDefense", numberPointDefense.toString());
          localStorage.setItem("currentYourOpponentNumberPointsAgility", numberPointAgility.toString());
          localStorage.setItem("currentYourOpponentQuantityDice", quantityDice.toString());
          localStorage.setItem("currentYourOpponentQuantityFaceDices", quantityFaceDice.toString());

          if (type == "HERO") {
              alert("YOU MUST CHOOSE A MONSTER LIKE OPPONENT!");
          } else {
              this.router.navigate(['start']);
          }
  }
}

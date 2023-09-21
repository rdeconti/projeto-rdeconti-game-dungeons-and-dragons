import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from '../../services/game.service';
import { Game } from '../../model/game.model';
import { ShiftService } from '../../services/shift.service';
import { Shift } from '../../model/shift.model';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})

export class StartComponent implements OnInit {

  shift: Shift = new Shift();
  game: Game = new Game();

  constructor(private gameService: GameService, private shiftService: ShiftService, private router: Router) {

  }

  ngOnInit(): void {

  }

  public nextStepName = localStorage.getItem("nextStepName");

  public currentPlayerId = localStorage.getItem("currentPlayerId");
  public currentGameId = localStorage.getItem("currentGameId");
  public currentShiftId = localStorage.getItem("currentShiftId");

  public currentPlayerName = localStorage.getItem("currentPlayerName");

  public currentYourCharacterId = localStorage.getItem("currentYourCharacterId");
  public currentYourCharacterName = localStorage.getItem("currentYourCharacterName");
  public currentYourCharacterType = localStorage.getItem("currentYourCharacterType");
  public currentYourCharacterNumberPointsLive = localStorage.getItem("currentYourCharacterNumberPointsLive");
  public currentYourCharacterNumberPointsStrength = localStorage.getItem("currentYourCharacterNumberPointsStrength");
  public currentYourCharacterNumberPointsDefense = localStorage.getItem("currentYourCharacterNumberPointsDefense");
  public currentYourCharacterNumberPointsAgility = localStorage.getItem("currentYourCharacterNumberPointsAgility");
  public currentYourCharacterQuantityDices = localStorage.getItem("currentYourCharacterQuantityDices");
  public currentYourCharacterQuantityFaceDices = localStorage.getItem("currentYourCharacterQuantityFaceDices");

  public currentYourOpponentId = localStorage.getItem("currentYourOpponentId");
  public currentYourOpponentName = localStorage.getItem("currentYourOpponentName");
  public currentYourOpponentType = localStorage.getItem("currentYourOpponentType");
  public currentYourOpponentNumberPointsLive = localStorage.getItem("currentYourOpponentNumberPointsLive");
  public currentYourOpponentNumberPointsStrength = localStorage.getItem("currentYourOpponentNumberPointsStrength");
  public currentYourOpponentNumberPointsDefense = localStorage.getItem("currentYourOpponentNumberPointsDefense");
  public currentYourOpponentNumberPointsAgility = localStorage.getItem("currentYourOpponentNumberPointsAgility");
  public currentYourOpponentQuantityDice = localStorage.getItem("currentYourOpponentQuantityDice");
  public currentYourOpponentQuantityFaceDices = localStorage.getItem("currentYourOpponentQuantityFaceDices");

  public currentWhoDoesAttack = localStorage.getItem("currentWhoDoesAttack");
  public currentYourCharacterAttackPoints = localStorage.getItem("currentYourCharacterAttackPoints");
  public currentYourOpponentAttackPoints = localStorage.getItem("currentYourOpponentAttackPoints");
  public currentYourCharacterDefensePoints = localStorage.getItem("currentYourCharacterDefensePoints");
  public currentYourOpponentDefensePoints = localStorage.getItem("currentYourOpponentDefensePoints");
  public currentYourCharacterDamagePoints = localStorage.getItem("currentYourCharacterDamagePoints");
  public currentYourOpponentDamagePoints = localStorage.getItem("currentYourCharacterDamagePoints");

  whoIsThePlayer() {

    let nextStepName = localStorage.getItem("nextStepName");

    if (nextStepName == "Player") {
        this.router.navigate(['player-list']);
    } else {
        alert("You must execute the steps in the correct order!");
    }

  }

  whatIsTheGame() {

    let nextStepName = localStorage.getItem("nextStepName");

    if (nextStepName == "Game") {
        this.createGame();
    } else {
        alert("You must execute the steps in the correct order!");
    }

  }

  whoIsYourCharacter() {

    let nextStepName = localStorage.getItem("nextStepName");

    if (nextStepName == "Character") {
        this.router.navigate(['character-list']);
    } else {
        alert("You must execute the steps in the correct order!");
    }

  }

  whoIsYourOpponent() {

    let nextStepName = localStorage.getItem("nextStepName");

    if (nextStepName == "Opponent") {
        this.router.navigate(['character-list']);
    } else {
        alert("You must execute the steps in the correct order!");
    }



    let myCurrentYourOpponentType = localStorage.getItem("currentYourOpponentType");
    console.log("myCurrentYourOpponentType " +  myCurrentYourOpponentType);
    if (myCurrentYourOpponentType == "HERO") {
        alert("YOU MUST CHOOSE A MONSTER LIKE OPPONENT!");
    }

  }

  whoStartGame() {

    let nextStepName = localStorage.getItem("nextStepName");

    if (nextStepName == "WhoStartGame") {
          this.gameService.whoStartGame().subscribe(data => {
            localStorage.setItem("currentWhoDoesAttack", data);
            localStorage.setItem("nextStepName", "Game");
            this.refreshStartPage();
          });
    } else {
        alert("You must execute the steps in the correct order!");
    }

  }

  playShift() {

    let nextStepName = localStorage.getItem("nextStepName");

    if (nextStepName == "GameOver") {
          alert("Game Over!");
    }

    let myShiftNumber = Number(localStorage.getItem("currentShiftId")) + 1;
    localStorage.setItem("currentShiftId", myShiftNumber.toString());

    this.calculateAttack();
    this.calculateDefense();
    this.calculateDamage();
    this.calculateLivePoints();
    this.saveShift();

    let myShiftResult = this.determineShiftResult();

    if (myShiftResult) {
        localStorage.setItem("nextStepName", "PlayShift");
        this.changeWhoDoesAttack();
    } else {
        localStorage.setItem("nextStepName", "GameOver");
        alert("Game is Over! This Game will be RESET");
        this.resetGame();
    }

    this.refreshStartPage();

  }

  refreshStartPage(){

    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/start']);

  }

  determineShiftResult() {

    let myCharacterNumberPointsLive = Number(localStorage.getItem("currentYourCharacterNumberPointsLive"));
    let myOpponentNumberPointsLive = Number(localStorage.getItem("currentYourOpponentNumberPointsLive"));

    if (myCharacterNumberPointsLive > myOpponentNumberPointsLive) {
        this.refreshStartPage();
        alert("Character won this Shift - Play Next Shift!");
    }

    if (myOpponentNumberPointsLive > myCharacterNumberPointsLive) {
        this.refreshStartPage();
        alert("Opponent won this Shift - Play Next Shift!");
    }

    if (myOpponentNumberPointsLive <= 0) {
        return false;
    }

    if (myCharacterNumberPointsLive  <= 0) {
        return false;
    }

    return true;

  }

  saveShift() {

    this.shift.shiftNumber = Number(localStorage.getItem("currentShiftId"));
    this.shift.gameId = Number(localStorage.getItem("currentGameId"));
    this.shift.attacker = localStorage.getItem("currentWhoDoesAttack")
    this.shift.characterLivePoints = Number(localStorage.getItem("currentYourCharacterNumberPointsLive"));
    this.shift.opponentLivePoints = Number(localStorage.getItem("currentYourOpponentNumberPointsLive"));

    let myCurrentWhoDoesAttack = localStorage.getItem("currentWhoDoesAttack");

    if (myCurrentWhoDoesAttack == "Character") {

        this.shift.attackPoints = Number(localStorage.getItem("currentYourCharacterNumberPointsLive"));
        this.shift.defensePoints = Number(localStorage.getItem("currentYourCharacterNumberPointsDefense"));
        this.shift.damagePoints = Number(localStorage.getItem("currentYourCharacterNumberPointsDefense"));

    } else {

        this.shift.attackPoints = Number(localStorage.getItem("currentYourOpponentNumberPointsLive"));
        this.shift.defensePoints = Number(localStorage.getItem("currentYourOpponentNumberPointsDefense"));
        this.shift.damagePoints = Number(localStorage.getItem("currentYourOpponentNumberPointsDefense"));

    }

    this.shiftService.createShift(this.shift).subscribe({
      next: (data) => {
        console.log(data);
        this.refreshStartPage();
      },
      error: (e) => {
        console.log(e);
      }
    });

  }

  createGame() {

    let date = new Date;
    let myHour = ("0" + (date.getHours() + 1)).slice(-2)
    let myMinutes = ("0" + (date.getMinutes() + 1)).slice(-2)
    let myYear = date.getFullYear();
    let myMonth = ("0" + (date.getMonth() + 1)).slice(-2)
    let myDay = ("0" + (date.getDay())).slice(-2)
    let myCurrentDate = myYear + "/" + myMonth + "/" + myDay;
    let myCurrentTime = myHour + ":" + myMinutes;

    this.game.gameDate = myCurrentDate;
    this.game.gameTime = myCurrentTime;
    this.game.gamePlayerName = localStorage.getItem("currentPlayerName")
    this.game.gameCharacterName = localStorage.getItem("currentYourCharacterName");
    this.game.gameOpponentName = localStorage.getItem("currentYourOpponentName");
    this.game.gameInitiativeName = localStorage.getItem("currentWhoDoesAttack");

    this.gameService.createGame(this.game).subscribe({
      next: (data) => {
        console.log(data);
        let myJsonData = JSON.stringify(data);
        let myJsonParse = JSON.parse(myJsonData);
        let myGameId = myJsonParse.id;
        localStorage.setItem("currentGameId", myGameId);
        localStorage.setItem("nextStepName", "Character");
        this.refreshStartPage();
      },
      error: (e) => {
        console.log(e);
      }
    });

  }

  calculateAttack() {

    let myCurrentWhoDoesAttack = localStorage.getItem("currentWhoDoesAttack");

    let myNumberPointsStrength = 0;
    let myNumberPointsAgility = 0;

    if (myCurrentWhoDoesAttack == "Character") {
        myNumberPointsStrength = Number(localStorage.getItem("currentYourCharacterNumberPointsStrength"));
        myNumberPointsAgility = Number(localStorage.getItem("currentYourCharacterNumberPointsAgility"));
    } else {
        myNumberPointsStrength = Number(localStorage.getItem("currentYourOpponentNumberPointsStrength"));
        myNumberPointsAgility = Number(localStorage.getItem("currentYourOpponentNumberPointsAgility"));
    };

    this.shiftService.calculateAttack(myNumberPointsStrength, myNumberPointsAgility).subscribe(data => {
      if (myCurrentWhoDoesAttack == "Character") {
          localStorage.setItem("currentYourCharacterAttackPoints", data);
      } else {
          localStorage.setItem("currentYourOpponentAttackPoints", data);
      }
    });

  }

  calculateDefense() {

    let myCurrentWhoDoesAttack = localStorage.getItem("currentWhoDoesAttack");

    let myNumberPointsDefense = 0;
    let myNumberPointsAgility = 0;

    if (myCurrentWhoDoesAttack == "Character") {
        myNumberPointsDefense = Number(localStorage.getItem("currentYourCharacterNumberPointsDefense"));
        myNumberPointsAgility = Number(localStorage.getItem("currentYourCharacterNumberPointsAgility"));
    } else {
        myNumberPointsDefense = Number(localStorage.getItem("currentYourOpponentNumberPointsDefense"));
        myNumberPointsAgility = Number(localStorage.getItem("currentYourOpponentNumberPointsAgility"));
    };

    this.shiftService.calculateDefense(myNumberPointsDefense, myNumberPointsAgility).subscribe(data => {
      if (myCurrentWhoDoesAttack == "Character") {
          localStorage.setItem("currentYourCharacterDefensePoints", data);
      } else {
          localStorage.setItem("currentYourOpponentDefensePoints", data);
      }
    });

  }

  calculateDamage() {

      let myCurrentWhoDoesAttack = localStorage.getItem("currentWhoDoesAttack");

      let myNumberPointsDefense = 0;
      let myNumberPointsAgility = 0;
      let myNumberCalculatedDefense = 0;
      let myNumberCalculatedAttack = 0;
      let myNumberPointsStrength = 0;
      let myQuantityDices = 0;
      let myQuantityFaces = 0;

      if (myCurrentWhoDoesAttack == "Character") {
          myNumberPointsStrength = Number(localStorage.getItem("currentYourCharacterNumberPointsStrength"));
          myQuantityDices = Number(localStorage.getItem("currentYourCharacterQuantityDices"));
          myQuantityFaces = Number(localStorage.getItem("currentYourCharacterQuantityFaceDices"));
          myNumberCalculatedDefense = Number(localStorage.getItem("currentYourCharacterDefensePoints"));
          myNumberCalculatedAttack = Number(localStorage.getItem("currentYourCharacterAttackPoints"));
      } else {
          myNumberPointsStrength = Number(localStorage.getItem("currentYourOpponentNumberPointsStrength"));
          myQuantityDices = Number(localStorage.getItem("currentYourOpponentQuantityDice"));
          myQuantityFaces = Number(localStorage.getItem("currentYourOpponentQuantityFaceDices"));
          myNumberCalculatedDefense = Number(localStorage.getItem("currentYourOpponentDefensePoints"));
          myNumberCalculatedAttack = Number(localStorage.getItem("currentYourOpponentAttackPoints"));
      };

      this.shiftService.calculateDamage(
          myNumberCalculatedDefense,
          myNumberCalculatedAttack,
          myNumberPointsStrength,
          myQuantityDices,
          myQuantityFaces
      ).subscribe(data => {
        if (myCurrentWhoDoesAttack == "Character") {
            localStorage.setItem("currentYourCharacterDamagePoints", data);
        } else {
            localStorage.setItem("currentYourOpponentDamagePoints", data);
        }
      });

  }

  calculateLivePoints() {

       let myCurrentWhoDoesAttack = localStorage.getItem("currentWhoDoesAttack");

        let myNumberPointsLive = 0;
        let myNumberPointsDamage = 0;

        if (myCurrentWhoDoesAttack == "Character") {
            myNumberPointsDamage = Number(localStorage.getItem("currentYourCharacterDamagePoints"));
            myNumberPointsLive = Number(localStorage.getItem("currentYourCharacterNumberPointsLive"));
        } else {
            myNumberPointsDamage = Number(localStorage.getItem("currentYourOpponentDamagePoints"));
            myNumberPointsLive = Number(localStorage.getItem("currentYourOpponentNumberPointsLive"));
        };

        this.shiftService.CalculateLivePoints(myNumberPointsDamage, myNumberPointsLive).subscribe(data => {
          if (myCurrentWhoDoesAttack == "Character") {
              localStorage.setItem("currentYourCharacterNumberPointsLive", data);
          } else {
              localStorage.setItem("currentYourOpponentNumberPointsLive", data);
          }
        });

  }

  changeWhoDoesAttack() {

      let myCurrentWhoDoesAttack = localStorage.getItem("currentWhoDoesAttack");

      if (myCurrentWhoDoesAttack == "Character") {
          localStorage.setItem("currentWhoDoesAttack", "Opponent");
      } else {
          localStorage.setItem("currentWhoDoesAttack", "Character");
      };

  }

  resetGame() {

    localStorage.clear();
    localStorage.setItem("nextStepName", "Player");

    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/start']);

  }

}

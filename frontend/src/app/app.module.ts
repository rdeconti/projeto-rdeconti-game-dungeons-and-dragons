import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShiftUpdateComponent } from './components/shifts/shift-update/shift-update.component';
import { ShiftCreateComponent } from './components/shifts/shift-create/shift-create.component';
import { ShiftDeleteComponent } from './components/shifts/shift-delete/shift-delete.component';
import { ShiftDetailComponent } from './components/shifts/shift-detail/shift-detail.component';
import { ShiftListComponent } from './components/shifts/shift-list/shift-list.component';
import { CharacterCreateComponent } from './components/characters/character-create/character-create.component';
import { CharacterDeleteComponent } from './components/characters/character-delete/character-delete.component';
import { CharacterDetailComponent } from './components/characters/character-detail/character-detail.component';
import { CharacterListComponent } from './components/characters/character-list/character-list.component';
import { CharacterUpdateComponent } from './components/characters/character-update/character-update.component';
import { GameCreateComponent } from './components/games/game-create/game-create.component';
import { GameDeleteComponent } from './components/games/game-delete/game-delete.component';
import { GameDetailComponent } from './components/games/game-detail/game-detail.component';
import { GameListComponent } from './components/games/game-list/game-list.component';
import { GameUpdateComponent } from './components/games/game-update/game-update.component';
import { PlayerCreateComponent } from './components/players/player-create/player-create.component';
import { PlayerDeleteComponent } from './components/players/player-delete/player-delete.component';
import { PlayerDetailComponent } from './components/players/player-detail/player-detail.component';
import { PlayerListComponent } from './components/players/player-list/player-list.component';
import { PlayerUpdateComponent } from './components/players/player-update/player-update.component';
import { StartComponent } from './components/start/start.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    ShiftCreateComponent,
    ShiftDeleteComponent,
    ShiftDetailComponent,
    ShiftListComponent,
    ShiftUpdateComponent,
    StartComponent,
    CharacterCreateComponent,
    CharacterDeleteComponent,
    CharacterDetailComponent,
    CharacterListComponent,
    CharacterUpdateComponent,
    GameCreateComponent,
    GameDeleteComponent,
    GameDetailComponent,
    GameListComponent,
    GameUpdateComponent,
    PlayerCreateComponent,
    PlayerDeleteComponent,
    PlayerDetailComponent,
    PlayerListComponent,
    PlayerUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

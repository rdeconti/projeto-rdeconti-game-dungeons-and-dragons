import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShiftUpdateComponent } from './components/shifts/shift-update/shift-update.component';
import { ShiftCreateComponent } from './components/shifts/shift-create/shift-create.component';
import { ShiftDeleteComponent } from './components/shifts/shift-delete/shift-delete.component';
import { ShiftDetailComponent } from './components/shifts/shift-detail/shift-detail.component';
import { ShiftListComponent } from './components/shifts/shift-list/shift-list.component';
import { CharacterUpdateComponent } from './components/characters/character-update/character-update.component';
import { CharacterCreateComponent } from './components/characters/character-create/character-create.component';
import { CharacterDeleteComponent } from './components/characters/character-delete/character-delete.component';
import { CharacterDetailComponent } from './components/characters/character-detail/character-detail.component';
import { CharacterListComponent } from './components/characters/character-list/character-list.component';
import { GameUpdateComponent } from './components/games/game-update/game-update.component';
import { GameCreateComponent } from './components/games/game-create/game-create.component';
import { GameDeleteComponent } from './components/games/game-delete/game-delete.component';
import { GameDetailComponent } from './components/games/game-detail/game-detail.component';
import { GameListComponent } from './components/games/game-list/game-list.component';
import { PlayerUpdateComponent } from './components/players/player-update/player-update.component';
import { PlayerCreateComponent } from './components/players/player-create/player-create.component';
import { PlayerDeleteComponent } from './components/players/player-delete/player-delete.component';
import { PlayerDetailComponent } from './components/players/player-detail/player-detail.component';
import { PlayerListComponent } from './components/players/player-list/player-list.component';
import { StartComponent } from './components/start/start.component';

const routes: Routes = [
  { path: 'start', component: StartComponent},
  { path: '', redirectTo: 'start', pathMatch: 'full' },
  { path: 'shift-create', component: ShiftCreateComponent },
  { path: 'shift-delete/:id', component: ShiftDeleteComponent },
  { path: 'shift-detail/:id', component: ShiftDetailComponent },
  { path: 'shift-list', component: ShiftListComponent },
  { path: 'shift-update/:id', component: ShiftUpdateComponent },
  { path: '', redirectTo: 'shift-list', pathMatch: 'full' },
  { path: 'character-create', component: CharacterCreateComponent },
  { path: 'character-delete/:id', component: CharacterDeleteComponent },
  { path: 'character-detail/:id', component: CharacterDetailComponent },
  { path: 'character-list', component: CharacterListComponent },
  { path: 'character-update/:id', component: CharacterUpdateComponent },
  { path: '', redirectTo: 'character-list', pathMatch: 'full' },
  { path: 'game-create', component: GameCreateComponent },
  { path: 'game-delete/:id', component: GameDeleteComponent },
  { path: 'game-detail/:id', component: GameDetailComponent },
  { path: 'game-list', component: GameListComponent },
  { path: 'game-update/:id', component: GameUpdateComponent },
  { path: '', redirectTo: 'game-list', pathMatch: 'full' },
  { path: 'player-create', component: PlayerCreateComponent },
  { path: 'player-delete/:id', component: PlayerDeleteComponent },
  { path: 'player-detail/:id', component: PlayerDetailComponent },
  { path: 'player-list', component: PlayerListComponent },
  { path: 'player-update/:id', component: PlayerUpdateComponent },
  { path: '', redirectTo: 'player-list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

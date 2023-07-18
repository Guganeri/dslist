import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from './games.component';
import { GamesListComponent } from './games-list/games-list.component';

const routes: Routes = [
  {
    path: '',
    component: GamesComponent
  },
  {
    path: 'games-list',
    component: GamesListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }

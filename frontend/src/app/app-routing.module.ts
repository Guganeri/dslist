import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/signin-signup/signin-signup.module').then((m) => m.SigninSignupModule)
  },
  {
    path: 'games',
    loadChildren: () => import('./pages/games/games.module').then((m) => m.GamesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

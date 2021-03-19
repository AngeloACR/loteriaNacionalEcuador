import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) }, { path: 'loteria', loadChildren: () => import('./loteria/loteria.module').then(m => m.LoteriaModule) }, { path: 'playerProfile', loadChildren: () => import('./player-profile/player-profile.module').then(m => m.PlayerProfileModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

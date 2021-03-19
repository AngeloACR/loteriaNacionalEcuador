import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayerProfileRoutingModule } from './player-profile-routing.module';
import { PlayerProfileComponent } from './player-profile.component';


@NgModule({
  declarations: [PlayerProfileComponent],
  imports: [
    CommonModule,
    PlayerProfileRoutingModule
  ]
})
export class PlayerProfileModule { }

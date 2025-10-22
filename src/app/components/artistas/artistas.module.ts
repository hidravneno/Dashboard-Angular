import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistasRoutingModule } from './artistas-routing.module';
import { ArtistasComponent } from './artistas.component';

@NgModule({
  imports: [
    CommonModule,
    ArtistasRoutingModule,
    ArtistasComponent
  ]
})
export class ArtistasModule { }

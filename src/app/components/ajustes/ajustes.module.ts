import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AjustesRoutingModule } from './ajustes-routing.module';
import { AjustesComponent } from './ajustes.component';

@NgModule({
  imports: [
    CommonModule,
    AjustesRoutingModule,
    AjustesComponent
  ]
})
export class AjustesModule { }

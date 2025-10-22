import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketsRoutingModule } from './tickets-routing.module';
import { TicketsComponent } from './tickets.component';

@NgModule({
  imports: [
    CommonModule,
    TicketsRoutingModule,
    TicketsComponent
  ]
})
export class TicketsModule { }

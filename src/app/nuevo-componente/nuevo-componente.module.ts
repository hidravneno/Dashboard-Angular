import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NuevoComponenteComponent } from './nuevo-componente.component';

const routes: Routes = [
  {
    path: '',
    component: NuevoComponenteComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NuevoComponenteComponent
  ]
})
export class NuevoComponenteModule { }

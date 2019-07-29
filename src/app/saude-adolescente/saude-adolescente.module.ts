import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SaudeAdolescentePage } from './saude-adolescente.page';

const routes: Routes = [
  {
    path: '',
    component: SaudeAdolescentePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SaudeAdolescentePage]
})
export class SaudeAdolescentePageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DisfuncoesPage } from './disfuncoes.page';

const routes: Routes = [
  {
    path: '',
    component: DisfuncoesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DisfuncoesPage]
})
export class DisfuncoesPageModule {}

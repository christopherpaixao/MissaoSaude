import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NutricaoDicasPage } from './nutricao-dicas.page';

const routes: Routes = [
  {
    path: '',
    component: NutricaoDicasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NutricaoDicasPage]
})
export class NutricaoDicasPageModule {}

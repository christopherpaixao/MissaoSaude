import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PrevencaoDenguePage } from './prevencao-dengue.page';

const routes: Routes = [
  {
    path: '',
    component: PrevencaoDenguePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PrevencaoDenguePage]
})
export class PrevencaoDenguePageModule {}

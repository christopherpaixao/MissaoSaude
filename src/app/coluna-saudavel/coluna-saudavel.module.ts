import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ColunaSaudavelPage } from './coluna-saudavel.page';

const routes: Routes = [
  {
    path: '',
    component: ColunaSaudavelPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ColunaSaudavelPage]
})
export class ColunaSaudavelPageModule {}

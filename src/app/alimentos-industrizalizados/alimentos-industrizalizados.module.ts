import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AlimentosIndustrizalizadosPage } from './alimentos-industrizalizados.page';

const routes: Routes = [
  {
    path: '',
    component: AlimentosIndustrizalizadosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AlimentosIndustrizalizadosPage]
})
export class AlimentosIndustrizalizadosPageModule {}

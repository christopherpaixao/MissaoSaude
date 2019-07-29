import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SaudeCriancaPage } from './saude-crianca.page';

const routes: Routes = [
  {
    path: '',
    component: SaudeCriancaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SaudeCriancaPage]
})
export class SaudeCriancaPageModule {}

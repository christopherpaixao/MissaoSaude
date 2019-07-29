import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SaudeMulherPage } from './saude-mulher.page';

const routes: Routes = [
  {
    path: '',
    component: SaudeMulherPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SaudeMulherPage]
})
export class SaudeMulherPageModule {}

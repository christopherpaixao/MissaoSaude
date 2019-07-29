import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SaudeIdosoPage } from './saude-idoso.page';

const routes: Routes = [
  {
    path: '',
    component: SaudeIdosoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SaudeIdosoPage]
})
export class SaudeIdosoPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SaudeHomemPage } from './saude-homem.page';

const routes: Routes = [
  {
    path: '',
    component: SaudeHomemPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SaudeHomemPage]
})
export class SaudeHomemPageModule {}

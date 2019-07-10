import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'videos', loadChildren: './videos/videos.module#VideosPageModule' },
  { path: 'nutricao', loadChildren: './nutricao/nutricao.module#NutricaoPageModule' },
  { path: 'projeto', loadChildren: './projeto/projeto.module#ProjetoPageModule' },
  { path: 'nutricao-dicas', loadChildren: './nutricao-dicas/nutricao-dicas.module#NutricaoDicasPageModule' },
  { path: 'alimentos-industrizalizados', loadChildren: './alimentos-industrizalizados/alimentos-industrizalizados.module#AlimentosIndustrizalizadosPageModule' },
  { path: 'comer-consciente', loadChildren: './comer-consciente/comer-consciente.module#ComerConscientePageModule' },
  { path: 'saude-homem', loadChildren: './saude-homem/saude-homem.module#SaudeHomemPageModule' },
  { path: 'controlar-hipertensao', loadChildren: './controlar-hipertensao/controlar-hipertensao.module#ControlarHipertensaoPageModule' },
  { path: 'coluna-saudavel', loadChildren: './coluna-saudavel/coluna-saudavel.module#ColunaSaudavelPageModule' },
  { path: 'prevencao-dengue', loadChildren: './prevencao-dengue/prevencao-dengue.module#PrevencaoDenguePageModule' },
  { path: 'outros', loadChildren: './outros/outros.module#OutrosPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

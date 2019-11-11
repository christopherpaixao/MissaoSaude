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
  { path: 'saude-mental', loadChildren: './saude-mental/saude-mental.module#SaudeMentalPageModule' },
  { path: 'saude-mulher', loadChildren: './saude-mulher/saude-mulher.module#SaudeMulherPageModule' },
  { path: 'saude-idoso', loadChildren: './saude-idoso/saude-idoso.module#SaudeIdosoPageModule' },
  { path: 'saude-adolescente', loadChildren: './saude-adolescente/saude-adolescente.module#SaudeAdolescentePageModule' },
  { path: 'saude-crianca', loadChildren: './saude-crianca/saude-crianca.module#SaudeCriancaPageModule' },
  { path: 'disfuncoes', loadChildren: './disfuncoes/disfuncoes.module#DisfuncoesPageModule' },
  { path: 'avisos', loadChildren: './avisos/avisos.module#AvisosPageModule' },
  { path: 'compartilhar', loadChildren: './compartilhar/compartilhar.module#CompartilharPageModule' },
  { path: 'parceiros', loadChildren: './parceiros/parceiros.module#ParceirosPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'registro', loadChildren: './registro/registro.module#RegistroPageModule' },
  /* Firebase */
  { path: '', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'registro', loadChildren: './registro/registro.module#RegistroPageModule' },
  //{ path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

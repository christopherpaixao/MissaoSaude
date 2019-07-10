import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-saude-homem',
  templateUrl: './saude-homem.page.html',
  styleUrls: ['./saude-homem.page.scss'],
})
export class SaudeHomemPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  abrirHipertensao(){
    this.router.navigate(['controlar-hipertensao']);
  }
  abrirColunaSaudavel(){
    this.router.navigate(['coluna-saudavel']);
  }
  abrirPrevencaoDengue(){
    this.router.navigate(['prevencao-dengue']);
  }
}

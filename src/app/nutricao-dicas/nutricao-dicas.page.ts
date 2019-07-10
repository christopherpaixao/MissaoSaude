import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nutricao-dicas',
  templateUrl: './nutricao-dicas.page.html',
  styleUrls: ['./nutricao-dicas.page.scss'],
})
export class NutricaoDicasPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  abrirAlimentosIndustrizalizados(){
    this.router.navigate(['alimentos-industrizalizados']);
  }
  abrirComerConsciente(){
    this.router.navigate(['comer-consciente']);
  }
}

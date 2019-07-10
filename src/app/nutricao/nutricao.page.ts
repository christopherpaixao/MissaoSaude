import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nutricao',
  templateUrl: './nutricao.page.html',
  styleUrls: ['./nutricao.page.scss'],
})
export class NutricaoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  abrirDicas(){
    this.router.navigate(['nutricao-dicas']);
  }
}

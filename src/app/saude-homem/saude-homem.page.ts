import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-saude-homem',
  templateUrl: './saude-homem.page.html',
  styleUrls: ['./saude-homem.page.scss'],
})
export class SaudeHomemPage implements OnInit {

  constructor(private router: Router, private iab: InAppBrowser) { }

  ngOnInit() {
  }
/*   abrirHipertensao(){
    this.router.navigate(['controlar-hipertensao']);
  }
  abrirColunaSaudavel(){
    this.router.navigate(['coluna-saudavel']);
  }
  abrirPrevencaoDengue(){
    this.router.navigate(['prevencao-dengue']);
  } */

  abrirUrl(url:string){
    
    //setup option
    const options: InAppBrowserOptions = {
      zoom: 'no'
    }
    //abrir a url
    const browser = this.iab.create(url, '_self', options);
    
  }
}

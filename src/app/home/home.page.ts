import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { VideosPage } from '../videos/videos.page';
import { Router } from '@angular/router';
import { SMS } from '@ionic-native/sms/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    private router: Router,
    private sms: SMS,
    private toastCtrl: ToastController
){}

 abrirVideos(){
  this.router.navigate(['videos']);
}
abrirNutricao(){
  this.router.navigate(['nutricao']);
}
abrirProjeto(){
  this.router.navigate(['projeto']);
}
abrirSaudeHomem(){
  this.router.navigate(['saude-homem']);
}
abrirOutros(){
  this.router.navigate(['outros']);
}

}

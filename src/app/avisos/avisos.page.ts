import { Component, OnInit } from '@angular/core';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';



@Component({
  selector: 'app-avisos',
  templateUrl: './avisos.page.html',
  styleUrls: ['./avisos.page.scss'],
})
export class AvisosPage implements OnInit {

  constructor(private iab: InAppBrowser, private socialSharing: SocialSharing) { }

  ngOnInit() {
  }

  abrirUrl(url:string){
    
    //setup option
    const options: InAppBrowserOptions = {
      zoom: 'no'
    }
    //abrir a url
    const browser = this.iab.create(url, '_self', options);
    
  }

  whatsappShare() {
    this.socialSharing.shareViaWhatsApp("Baixe o aplicativo Missão Saúde.", "www/assets/img/logo-missao-saude.png", "https://play.google.com/store/apps/details?id=com.devplus.missaosaude");
}

}

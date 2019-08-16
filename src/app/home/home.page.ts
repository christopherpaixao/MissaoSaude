import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { SMS } from '@ionic-native/sms/ngx';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

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
    private toastCtrl: ToastController,
    private admobFree: AdMobFree,
    private socialSharing: SocialSharing
){
  
}

ngOnInit() {

/*       //teste admob
    const bannerConfig: AdMobFreeBannerConfig = {
      isTesting: false,  //Remove in production
      autoShow: true,
      id: "ca-app-pub-1047006946825809/8301360413"
  };
  this.admobFree.banner.config(bannerConfig);

  this.admobFree.banner.prepare().then(() => {
      // success
  }).catch(e => alert(e));
  //fim admob  */
}

/*  showBannerAd() {
        const bannerConfig: AdMobFreeBannerConfig = {
            //isTesting: true,  Remove in production
            autoShow: true,
            id: "ca-app-pub-1047006946825809/8301360413"
        };
        this.admobFree.banner.config(bannerConfig);
 
        this.admobFree.banner.prepare().then(() => {
            // success
        }).catch(e => alert(e));
    } */

    whatsappShare() {
      this.socialSharing.shareViaWhatsApp("Baixe o aplicativo Missão Saúde.", "www/assets/img/logo-missao-saude.png", "https://play.google.com/store/apps/details?id=com.devplus.missaosaude");
  }
  normalShare() {
    this.socialSharing.share("Baixe o aplicativo Missão Saúde.", null, "www/assets/images/logo-missao-saude.png", "https://play.google.com/store/apps/details?id=com.devplus.missaosaude");
}


}

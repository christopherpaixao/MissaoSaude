import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { VideosPage } from '../videos/videos.page';
import { Router } from '@angular/router';
import { SMS } from '@ionic-native/sms/ngx';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free/ngx';


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
    private admobFree: AdMobFree
){}

ngOnInit() {

  this.showBannerAd();
}

 showBannerAd() {
        let bannerConfig: AdMobFreeBannerConfig = {
            isTesting: true, // Remove in production
            autoShow: true//,
            //id: "ca-app-pub-3940256099942544/6300978111"
        };
        this.admobFree.banner.config(bannerConfig);
 
        this.admobFree.banner.prepare().then(() => {
            // success
        }).catch(e => alert(e));
    }

}

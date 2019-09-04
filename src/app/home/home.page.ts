import { Component } from '@angular/core';
import { NavController, ToastController, Platform, IonSlides } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  img: any;

  slideOptions = {
    autoplay: true,
    zoom: {
      maxRatio: 5
    }
  };
  constructor(
    public navCtrl: NavController,
    private socialSharing: SocialSharing,
    public platform: Platform,
    public router: Router
){}


ngOnInit() {

  this.platform.backButton.subscribe(async () => {
    if (this.router.isActive('/home', true) && this.router.url === '/home') {
      navigator['app'].exitApp();
    }
});

}
slidesDidLoad(slides: IonSlides) {
  slides.startAutoplay();
}

  whatsappShare() {
      this.socialSharing.shareViaWhatsApp("Baixe o aplicativo Missão Saúde.", "www/assets/img/logo-missao-saude.png", "https://play.google.com/store/apps/details?id=com.devplus.missaosaude");
  }
  normalShare() {
    this.socialSharing.share("Baixe o aplicativo Missão Saúde.", null, "www/assets/images/logo-missao-saude.png", "https://play.google.com/store/apps/details?id=com.devplus.missaosaude");
}




}

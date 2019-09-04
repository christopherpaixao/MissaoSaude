import { Component } from '@angular/core';
import { Platform, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Firebase } from '@ionic-native/firebase/ngx';
import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeInterstitialConfig } from '@ionic-native/admob-free/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private alertCtrl: AlertController,
    private firebase: Firebase,
    private admobFree: AdMobFree,

  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.solicitarTokenDoFirebase();
      this.pushAdmob();
    });

  }
  /* Config Admob */
  pushAdmob(){
    const bannerConfig: AdMobFreeBannerConfig = {
      isTesting: false,
      autoShow: true,
      id: "ca-app-pub-1047006946825809/8301360413",
     };
     this.admobFree.banner.config(bannerConfig);
     
     this.admobFree.banner.prepare()
       .then(() => {
        this.admobFree.banner.show();
        console.log("show banner");
       })
       .catch(e => console.log(e));
  }
  /* Fim config Admob */
 
  

  /* Config Fireabse Menssagem*/
  solicitarTokenDoFirebase() {

    this.firebase.getToken()
      .then(token => {
        console.log("firebase token recebido", token);
        this.enviarTokenParaOservidor(token);
        this.iniciarListenerDeNotificacoes();
      }) // save the token server-side and use it to push notifications to this device
      .catch(error => {
        console.error('Error getting token', error)
      });

  }

  iniciarListenerDeNotificacoes() {

    this.firebase.onNotificationOpen().subscribe((notification: any) => {

      console.log(notification);
      if (!notification.tap) {
        this.mostrarAlert(notification.title, notification.body);
      }

    });

  }

  enviarTokenParaOservidor(token) {

    // lógica para enviar o token para o seu servidor através da sua api
  }

  async mostrarAlert(titulo, texto) {
    const alert = await this.alertCtrl.create({
      header: titulo,
      message: texto,
      buttons: [
        {
          text: 'Entendi',
          handler: () => {
          }
        }
      ]
    });
    await alert.present();
  }

}





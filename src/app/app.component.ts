import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
/* import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free/ngx';
 */
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
    /* private admobFree: AdMobFree */
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

 /*    //teste admob
    const bannerConfig: AdMobFreeBannerConfig = {
      isTesting: true, // Remove in production
      autoShow: true//,
      //id: "ca-app-pub-1047006946825809/8301360413"
  };
  this.admobFree.banner.config(bannerConfig);

  this.admobFree.banner.prepare().then(() => {
      // success
  }).catch(e => alert(e));
  //fim admob */



  }
}

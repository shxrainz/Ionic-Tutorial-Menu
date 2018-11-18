import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
//import login page
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
  //Menu Toggle
  @ViewChild(Nav) nav: Nav;
  rootPage:any = LoginPage;
  pages: any;

  constructor(public platform: Platform, 
              public statusBar: StatusBar, 
              public splashScreen: SplashScreen) {

                console.log('Entering Menu Page..');
                this.initializeApp();

                this.pages = {
                  homePage: TabsPage,
                  logoutPage: LoginPage,
                } 

  }

  initializeApp() {
    console.log('Entering Menu Page > InitializeApp');
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    //this.nav.setRoot(page.component);

      if(page.component) {
        this.nav.setRoot(page.component);
        console.log('Select Menu');
      } else {
        // Since the component is null, this is the logout option
        // ...
        // redirect to home
        this.nav.setRoot(LoginPage);
      }
  }
}

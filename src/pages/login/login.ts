import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage {

  loginData = { StaffID: '', Password: ''};

  constructor(public navCtrl: NavController,
            private alertCtrl: AlertController) {           

  }

    UserAuthentication(){

      console.log('LoginPage > UserAuthentication');

      //Check if username is not empty
      if (this.loginData.StaffID == ''){
  
            let alert = this.alertCtrl.create({
            title: 'Error!',
            subTitle: 'Username cannot be empty!',
            buttons: [{
                        text: 'OK',
                        role: 'ok',
                        handler: () => {
                            //console.log('Ok clicked');
                        }
                        }]
            });
            alert.present();
            //Exit method
            return;
        }
  
            //Check if password is not empty
            if (this.loginData.Password == ''){
    
                let alert = this.alertCtrl.create({
                title: 'Error!',
                subTitle: 'Password cannot be empty!',
                buttons: [{
                            text: 'OK',
                            role: 'ok',
                            handler: () => {
                                //console.log('Ok clicked');
                            }
                            }]
                });
                alert.present();
                //Exit method
                return;
        }
   
        console.log("Go to TabsPage");
        this.navCtrl.setRoot(TabsPage);
  
    }


}



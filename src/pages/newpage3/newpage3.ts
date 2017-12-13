import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { HomePage } from '../home/home';
/**
 * Generated class for the Newpage3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newpage3',
  templateUrl: 'newpage3.html',
})
export class Newpage3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl : ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Newpage3Page');
  }
public onButtonClicked(): void {
     let modal = this.modalCtrl.create(HomePage);
     modal.present();
   }
}

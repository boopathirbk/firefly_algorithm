import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { HomePage } from '../home/home';
/**
 * Generated class for the Newpage2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newpage2',
  templateUrl: 'newpage2.html',
})
export class Newpage2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl : ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Newpage2Page');
  }
public onButtonClicked(): void {
     let modal = this.modalCtrl.create(HomePage);
     modal.present();
   }
}

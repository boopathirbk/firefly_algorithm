import { Component } from '@angular/core';
import { NavController,ModalController } from 'ionic-angular';
import { Newpage1Page } from '../newpage1/newpage1';
import { Newpage2Page } from '../newpage2/newpage2';
import { Newpage3Page } from '../newpage3/newpage3';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public modalCtrl : ModalController) {

  }
   
   public onButtonClicked1(): void {
     let modal = this.modalCtrl.create(Newpage1Page);
     modal.present();
   }
     public onButtonClicked2(): void {
     let modal = this.modalCtrl.create(Newpage2Page);
     modal.present();}
     public onButtonClicked3(): void {
     let modal = this.modalCtrl.create(Newpage3Page);
     modal.present();
   }
}

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BuyoutPage } from '../pages'
/*
  Generated class for the Shop page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html'
})
export class ShopPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }
  onGoToBuyout(product: string) {
    this.navCtrl.push(BuyoutPage, product);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShopPage');
  }

}

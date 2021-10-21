import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
// kooloniga tyyp, v6rdusm2rgiga v22rtus
  cartItems: any[] = [];

  sumOfCart = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    console.log("cart componendis");

    this.cartItems = this.cartService.cartItemsInService;
    this.sumOfCart = 0;
    // [{hind: 251,p:"1"}, {hind: 121,p:"2"},{hind: 21,p:"3"}].forEach();
    // this.cartItems.forEach ({hind:251,p:"1"} => 251 = 0 + 251 )
    this.cartItems.forEach(toode => this.sumOfCart += toode.hind);
    // see funktsioon l2hb alati enne HTMLi k2ima
    // ostukorvi minek pannakse k2ima kui minnakse selle component HTMLi peale
  }

  onEmptyCart() {
    this.cartService.cartItemsInService = [];
    this.cartItems = this.cartService.cartItemsInService;
  }

  onDeleteFromCart(ese: any) {
    // siin m22rame 2ra, et onDeleteFromCart suudaks service'st yles leida toote j2rjekorranumber (index)
    let j2rjekorraNumber = this.cartService.cartItemsInService.indexOf(ese);
    this.cartService.cartItemsInService.splice(j2rjekorraNumber,1)
    this.cartItems.forEach(toode => this.sumOfCart += toode.hind);
  }

}



//  ostukorvi kogusumma arvutuse
// javascripti forEach() funktsiooni
import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
// kooloniga tyyp, v6rdusm2rgiga v22rtus
// tyybiks yksk6ik milline massiiv ja v22rtuseks tyhi massiiv
// ilma tyybita ei saa talle algv22rtust anda, sest te peab teadma mille masiiv ta on
  cartItems: any[] = [];

// muutuja, millele annab v22rtuseks 0
  sumOfCart = 0;

// yhendab 2ra cartserveri (yleval tekib yhendus)
  constructor(private cartService: CartService) { }

  // l2heb k2ima t2pselt enne HTMLi k2ima panemist
  ngOnInit(): void {
    // kuvab brauserisse consolei mingisuguse s6numi
    console.log("cart componendis");

    this.cartItems = this.cartService.cartItemsInService;
    this.sumOfCart = 0;
    // [{hind: 251,p:"1"}, {hind: 121,p:"2"},{hind: 21,p:"3"}].forEach();
    // this.cartItems.forEach ({hind:251,p:"1"} => 251 = 0 + 251 )
    this.cartItems.forEach(cartItem => this.sumOfCart += cartItem.hind);
    // see funktsioon l2hb alati enne HTMLi k2ima
    // ostukorvi minek pannakse k2ima kui minnakse selle component HTMLi peale
  }

  onEmptyCart() {
    // siin teen service'i tyhjaks
    this.cartService.cartItemsInService = [];
    // kuvan v2lja cartItems, vaja uuesti anda, et uueneks
    this.cartItems = this.cartService.cartItemsInService;
  }

  onDeleteFromCart(item: any) {
    // siin m22rame 2ra, et onDeleteFromCart suudaks service'st yles leida toote j2rjekorranumber (index)
    let index = this.cartService.cartItemsInService.indexOf(item);
    this.cartService.cartItemsInService.splice(index,1)
    this.cartItems.forEach(cartItem => this.sumOfCart += cartItem.hind);
  }

}



//  ostukorvi kogusumma arvutuse
// javascripti forEach() funktsiooni
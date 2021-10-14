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

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    console.log("cart componendis");

    this.cartItems = this.cartService.cartItemsInService;
    // see funktsioon l2hb alati enne HTMLi k2ima
    // ostukorvi minek pannakse k2ima kui minnakse selle component HTMLi peale
  }

}

// siia teeme ostukorvist kustutamise ja
// ostukorvist kustutamise .splice()
// ja tyhjendamise = []

//  ostukorvi kogusumma arvutuse
// javascripti forEach() funktsiooni
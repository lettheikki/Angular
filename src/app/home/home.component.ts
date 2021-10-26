import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // esemed = [300,243,132,87];

  // pealkirjad = ["ese1", "ese2", "ese3"];

  // objekt = {price: 150, title: "ese1"};

  objektiMassiiv: any[] = []

  constructor(private cartService: CartService,
    private itemService: ItemService) { }

  ngOnInit(): void {
    console.log("home componendis")
    this.objektiMassiiv = this.itemService.itemsInService;
  }

lisaOstukorvi(item: any) {
  console.log(item)
  console.log("t66tab");
  console.log(this.objektiMassiiv);
  this.cartService.cartItemsInService.push(item)

  // siin lisame Service-sse kus hoitakse ostukorvi stuffi
  
  
}

}

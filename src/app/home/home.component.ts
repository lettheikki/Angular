import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // esemed = [300,243,132,87];

  // pealkirjad = ["ese1", "ese2", "ese3"];

  // objekt = {price: 150, title: "ese1"};

  objektiMassiiv = [
    {hind: 300, pealkiri: "ese1"},
    {hind: 243, pealkiri: "ese2"},
    {hind: 132, pealkiri: "ese3"}
  ]

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    console.log("home componendis")
  }

lisaOstukorvi(item: any) {
  console.log(item)
  console.log("t66tab");
  console.log(this.objektiMassiiv);
  this.cartService.cartItemsInService.push(item)

  // siin lisame Service-sse kus hoitakse ostukorvi stuffi
  
  
}

}

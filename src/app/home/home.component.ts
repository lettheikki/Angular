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
    {price: 300, title: "ese1"},
    {price: 243, title: "ese2"},
    {price: 132, title: "ese3"}
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

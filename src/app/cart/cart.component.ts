import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("cart componendis")
    // ostukorvi minek pannakse k2ima kui minnakse selle component HTMLi peale
  }

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  itemsInService: any[] = [ 
  {hind: 300, pealkiri: "ese1"},
  {hind: 243, pealkiri: "ese2"},
  {hind: 132, pealkiri: "ese3"}];

  constructor() { }
}

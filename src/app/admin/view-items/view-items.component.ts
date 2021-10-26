import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-view-items',
  templateUrl: './view-items.component.html',
  styleUrls: ['./view-items.component.css']
})
export class ViewItemsComponent implements OnInit {
  // muutuja mis on tyhi massiiv
  // consturctorisse yhendus item.serviceiga
  // pange ylemisse muutujasse v22rtus itemService/i seest
  // kuvage NGfor abil HTMLis
  items: any[] = [];

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.items = this.itemService.itemsInService;
  }

  onRemoveItem(item: any) {
    // siin m22rame 2ra, et onRemoveItem suudaks service'st yles leida toote j2rjekorranumber (index)
    let index = this.itemService.itemsInService.indexOf(item);
    this.itemService.itemsInService.splice(index,1);

}}
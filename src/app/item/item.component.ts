import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../item.mode';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item: Item;
  @Input() itemIndex: number;

  constructor(private itemsService: ItemsService) { }

  ngOnInit(): void {
  }

  onDeleteItem(){
    this.itemsService.deleteItem(this.itemIndex);
  }

  onItemDone(){
    this.itemsService.finishItem(this.itemIndex);
  }

}

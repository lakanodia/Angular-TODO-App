import { Component, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Item } from './item.mode';
import { ItemsService } from './items.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  isChecked: boolean = true;
  title = 'dark-mode';

  changed(event:MatSlideToggleChange): void{
    
  }

  items: Item[];

  ngOnInit() {
    this.items = this.itemsService.getItems();
  }
  constructor(
    private itemsService: ItemsService,
  ) {}


}

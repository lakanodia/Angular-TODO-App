import { Component, OnInit} from '@angular/core';
import { ItemsService } from '../items.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  todoTasks : FormGroup;
  
  constructor(private itemsService: ItemsService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.todoTasks = this.fb.group({
      todoList : ['', Validators.required]
    })

  }

  onNewItem(inputEl: HTMLInputElement){
    console.log(inputEl.value);
    this.itemsService.addItem(inputEl.value);
    inputEl.value = '';
  }

}

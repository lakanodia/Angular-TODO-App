import { Injectable } from "@angular/core";
import { Item } from "./item.mode";


@Injectable({providedIn: 'root'})

export class ItemsService {

    items: Item[]= [
        {description: "Learn Angular", done: false},
        {description: "Complete Udemy Cources", done: false},
        {description: "Learn Typescript", done: false},
        {description: "Read about Object-Oriented Programming", done: false},
    ];

    private saveItems(){
        localStorage.setItem('todos', JSON.stringify(this.items))
    }
    getItems(){
        const todoItems = localStorage.getItem('todos');
        if (todoItems) {
            this.items = JSON.parse(todoItems);
        }
        return this.items;
    }

    addItem(newItemDesc: string){
        this.items.push({description: newItemDesc, done: false})
        this.saveItems();
    }

    deleteItem(index: number){
        this.items.splice(index, 1);
        this.saveItems();
    }

    finishItem(index: number){
        this.items[index].done = !this.items[index].done;
        this.saveItems();
    }

    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];

    setToActive(id: number){
        this.activeUsers.push(this.inactiveUsers[id])
        this.inactiveUsers.splice(id, 1);
    }

    setToInactive(id: number){
        this.inactiveUsers.push(this.activeUsers[id])
        this.activeUsers.splice(id, 1);
    }

}
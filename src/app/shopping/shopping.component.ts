import { Component, OnInit } from '@angular/core';
import { shoppedItem } from '../shared/model/shoppedItem.model';
import { shopping } from '../shared/model/shoppingList.model';
import { ShoppingService } from '../shared/services/shopping.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {

  // quantity : number = 0;
  shoppingList: any[] = [];
  shoppedList : any[]= [];

  constructor(private shopServ : ShoppingService) {
    this.shoppingList = this.shopServ.getRecipeList();
    this.shoppedList = this.shopServ.getShoppedList();
    
   }

  ngOnInit(): void { }

  remove(data : any){
    if(data.quantity ==0){
      return
    }else{
      data.quantity--
    }
  }
  add(data : any){
    data.quantity++
  }

  addToBag(eve : any){
    let newAdd = new shoppedItem(eve.pName,eve.quantity,eve.rate);
    this.shoppedList.push(newAdd)
    this.shopServ.prodshopperEmiter.emit(this.shoppedList)
   }
}

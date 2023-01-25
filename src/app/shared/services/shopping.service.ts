import { EventEmitter, Injectable } from "@angular/core";
import { shopping } from "../model/shoppingList.model";

// @Injectable({providedIn : 'root'})
export class ProductService {
  private productList = [
    new shopping('https://thumbs.dreamstime.com/b/grocery-shopping-cart-vegetables-fruits-supermarket-background-88126559.jpg', 'Product 1', 100),
    new shopping('https://thumbs.dreamstime.com/b/grocery-shopping-cart-vegetables-fruits-supermarket-background-88126559.jpg', 'Product 2', 110),
    // new shopping('https://5.imimg.com/data5/SELLER/Default/2021/3/KO/QG/XG/3922575/all-grocery-items-500x500.jpg','Product 2', '12345'),
    new shopping('https://thumbs.dreamstime.com/b/grocery-shopping-cart-vegetables-fruits-supermarket-background-88126559.jpg', 'Product 3', 130)
  ];

  private shoppedList: any[] = [];

  productEmitter = new EventEmitter();

  getProductList() {
    return this.productList.slice()
  }

  addNewShopppingItem(shopItem: any) {
    this.productList.push(shopItem);
    this.productEmitter.emit(this.productList.slice())
    console.log(this.productList)
  }
  
  getShoppedList() {
    return this.shoppedList;
  }

  addtoShoppedList(data: any) {
    this.shoppedList.push(data);
  }
 
}
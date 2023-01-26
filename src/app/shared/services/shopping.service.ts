import { EventEmitter, Injectable } from "@angular/core";
import { shopping } from "../model/shoppingList.model";

// @Injectable({providedIn : 'root'})
export class ProductService {
  private productList = [
    new shopping('https://thumbs.dreamstime.com/b/chicken-dum-biryani-white-bowl-traditional-indian-one-pot-dish-background-high-angle-view-156498926.jpg', 'Chicken Dum Biriyani ', 180),
    new shopping('https://st2.depositphotos.com/4513173/6656/i/950/depositphotos_66568599-stock-photo-delicious-tandoori-chicken-legs.jpg', 'Chicken Tandoori', 250),
    // new shopping('https://5.imimg.com/data5/SELLER/Default/2021/3/KO/QG/XG/3922575/all-grocery-items-500x500.jpg','Product 2', '12345'),
    new shopping('https://img.freepik.com/free-photo/crispy-fried-chicken-plate-with-salad-carrot_1150-20212.jpg', 'Fried Chicken', 240)
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
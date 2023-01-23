import { EventEmitter, Injectable } from "@angular/core";
import { shopping } from "../model/shoppingList.model";

// @Injectable({providedIn : 'root'})
export class ShoppingService {
  private recipeList = [
    new shopping('https://thumbs.dreamstime.com/b/grocery-shopping-cart-vegetables-fruits-supermarket-background-88126559.jpg', 'Product 1', 100, 1),
    new shopping('https://thumbs.dreamstime.com/b/grocery-shopping-cart-vegetables-fruits-supermarket-background-88126559.jpg', 'Product 2', 110, 1),
    // new shopping('https://5.imimg.com/data5/SELLER/Default/2021/3/KO/QG/XG/3922575/all-grocery-items-500x500.jpg','Product 2', '12345', 3),
    new shopping('https://thumbs.dreamstime.com/b/grocery-shopping-cart-vegetables-fruits-supermarket-background-88126559.jpg', 'Product 3', 130, 1)
  ];

  private shoppedList = [];

  getRecipeList() {
    return this.recipeList
  }

  getShoppedList() {
    return this.shoppedList
  }

  addNewShopppingItem(shopItem: any) {
    this.recipeList.push(shopItem);
    console.log("new recipeList===>", this.recipeList)
  }
  // addtoShoppedList(data: any) {
  //   this.shoppedList.push(data)
  //   console.log(data)
  // }

  prodshopperEmiter = new EventEmitter();
}
import { Component, OnInit } from '@angular/core';
import { shopping } from '../shared/model/shoppingList.model';
import { ProductService } from '../shared/services/shopping.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {

  // quantity : number = 0;
  
  productList1: any[] = [];
  shoppedList : any[]= [];
  grandTotals :any;

  constructor(private shopServ : ProductService) {
    this.productList1 = this.shopServ.getProductList();
    this.shopServ.productEmitter.subscribe((updatedData : any)=>{
      this.productList1 = updatedData;
      console.log(this.productList1)
    })
    this.shoppedList = this.shopServ.getShoppedList();
   }

  ngOnInit(): void { }

  Increase(pdata : any){
    pdata.quantity++
  }

  decrease(pdata : any){
    if(pdata.quantity <= 1){
      return
    }else{
      pdata.quantity--
    }
  }
  
  addToBag(eve : any){
    let flag = false;
    let newObj = Object.assign({}, eve);
  

    for(let i of this.shoppedList){
      if(i.id ===eve.id){
        i.quantity = eve.quantity;
        flag = true;
      }
    }
    if(!flag){
      this.shoppedList.push(newObj)
    }
    this.calculateTotal();
   }

   calculateTotal(){
    this.grandTotals = 0;
    for(let i of this.shoppedList){
      this.grandTotals += i.rate * i.quantity
    }
   }

}

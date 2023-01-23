import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { shopping } from '../shared/model/shoppingList.model';
import { ShoppingService } from '../shared/services/shopping.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private shopServ : ShoppingService ) { }
  myForm : FormGroup| any;

  ngOnInit(): void {
    this.myForm = new FormGroup({
      imgUrl : new FormControl('', Validators.required),
      productName : new FormControl('', Validators.required),
      productRate : new FormControl('', Validators.required),
    })
  }

  buyNow(){
    // let buyedList = this.shopServ.getShoppedList();
    this.shopServ.prodshopperEmiter.subscribe((gotData : any)=>{
      console.log(gotData)
    //   let asd=this.shopServ.getShoppedList()
    // console.log(asd)
    })
    
  }
  submit(){
    // console.log(this.myForm);
    const newShoppedList = new shopping(this.myForm.value.imgUrl, this.myForm.value.productName,this.myForm.value.productRate)
    console.log(newShoppedList)
    this.shopServ.addNewShopppingItem(newShoppedList)
    this.myForm.reset();
  }
}

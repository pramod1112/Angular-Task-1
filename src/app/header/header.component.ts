import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { shopping } from '../shared/model/shoppingList.model';
import { ProductService } from '../shared/services/shopping.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  myForm: FormGroup | any;
  img: any = '';
  myImgFile: any;

  constructor(private shopServ: ProductService) { }

 

  ngOnInit(): void {
    this.myForm = new FormGroup({
      imgUrl: new FormControl('', Validators.required),
      productName: new FormControl('', Validators.required),
      productRate: new FormControl('', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
    })
  }

  buyNow() {
    let buyedList = this.shopServ.getShoppedList();
    console.log('Thank you for Purchasing the items', this.shopServ.getShoppedList())
  }

  submit() {
    console.log(this.myForm);
    const newShoppedList = new shopping(this.myForm.value.imgUrl, this.myForm.value.productName, this.myForm.value.productRate)
    this.shopServ.addNewShopppingItem(newShoppedList)
    this.myForm.reset();
  }
  getImgFile(eve: any) {
    console.log(eve.target.files[0].size);
    this.img = eve.target.files[0]
    console.log('file', this.img)
    let reader = new FileReader();
    reader.readAsDataURL(this.img)
    reader.onload = (eve1: any) => {
      this.myImgFile = eve1.target.result
    }
  }

}

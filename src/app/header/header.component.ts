import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { shopping } from '../shared/model/shoppingList.model';
import { ShoppingService } from '../shared/services/shopping.service';
import { ShoppingUploadValidator } from '../shared/validators/shoppingUpload.validators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private shopServ : ShoppingService, private http : HttpClientModule ) { }
  myForm : FormGroup| any;

  ngOnInit(): void {
    this.myForm = new FormGroup({
      imgUrl : new FormControl('',Validators.required),
      // imgUrl : new FormControl('', [Validators.required, ShoppingUploadValidator.fileSizesValidator]),
      productName : new FormControl('', Validators.required),
      productRate : new FormControl('', Validators.required),
    })
   
  }

  buyNow(){
    let buyedList = this.shopServ.getShoppedList();
    console.log('Thank you for Purchasing the items', buyedList)
  }
  submit(){
    // console.log(this.myForm);
    const newShoppedList = new shopping(this.myForm.value.imgUrl, this.myForm.value.productName,this.myForm.value.productRate)
    console.log(newShoppedList)
    this.shopServ.addNewShopppingItem(newShoppedList)
    this.myForm.reset();
  }

  // files = 0;
  // fileSize(){
  //   let asdfg= this.myForm.controls.imgUrl.files.items[0].size
  //   console.log(asdfg)
  //   this.files = asdfg;
  // }

  // file_error : any;
  // selectedFile1 : File = null as any;
  // selectedFileName = '';
  // disableFileButton : boolean =false;

  
  // onfileUploaded(event : any){
  //   this.file_error='';
  //   this.selectedFile1 = event.target.files[0];
  //   this.selectedFileName = this.selectedFile1.name;
  //   let fileSize = 0;
  //   let fileExt = null;
  //   fileSize = (Math.round(this.selectedFile1.size*100/(1024*1024))/100);
  //   if(fileSize > .100){
  //     this.disableFileButton = false;
  //     this.file_error ='File size limited to 100 kb' 
  //   }else{
  //     fileExt = this.selectedFile1.name.split('?')[0].split('.').pop();
  //     if(fileExt == 'jpg' || fileExt =='jpeg' || fileExt == 'JPG'|| fileExt == 'JPEG'){
  //       this.disableFileButton = true;
  //     }else{
  //       this.disableFileButton = false;
  //       this.file_error = 'Please enter valid File'
  //     }
  //   }
  // }

  
}

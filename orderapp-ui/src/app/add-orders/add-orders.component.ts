import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { OrdersService } from '../services/orders.service';
import { PersonService } from '../services/person.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-add-orders',
  templateUrl: './add-orders.component.html',
  styleUrls: ['./add-orders.component.css']
})
export class AddOrdersComponent implements OnInit {

  constructor(private productService : ProductService,private orderService:OrdersService, private personService:PersonService){

  }
  myForm: FormGroup | any;
  error={
    name:"",
    product:""
  }
  selectedProducts=[];
  selectedEmail=null;
  products:any=[];
  keyword = 'name';
  data?: Observable<any>;
  alertMessage:string="";
  showSuccess:boolean=false;
  showFailure:boolean=false;
  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl(),
      products:new FormControl()
    });
    this.data=this.personService.getUsers();
    this.productService.getProducts().subscribe((event)=>{
      this.products=event;
    })
  }

  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('Name', form.value.name);
    console.log('Email', form.value.email);
    console.log('Message', form.value.message);
  }
  selectEvent(item:any) {
    // do something with selected item
    console.log(item);
    this.selectedEmail=item.email;
  }

  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }
  
  onFocused(e:any){
    // do something when input is focused
    console.log(e);
  }

  save(){
    let isValid=true;
    if( this.selectedEmail ==null || this.selectedEmail===""){
      this.error.name="Select a user ";
      isValid=false;
    }
    if(!(this.selectedProducts.length>0)){
      this.error.product="Select a Product ";
      isValid=false;
    }
    if(isValid){
      isValid=true;
      this.error={
        name:"",
        product:""
      }
    }

    if(isValid){
      let request = {
        email:this.selectedEmail,
        productList:this.selectedProducts
      }
      this.orderService.save(request).pipe().subscribe((event)=>{
        this.showSuccess=true;
        this.showFailure=false;
        this.alertMessage="Saved Successfully";
      },(err: any) => {
        this.showFailure=true;
        this.showSuccess=false;
        this.alertMessage="Save Failed, Try Again";
      });
    }



  }
}

import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { filter, map } from 'lodash';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { Observable } from 'rxjs';
import { ModalComponent } from '../modal/modal.component';
import { FileuploadingService } from '../services/fileuploading.service';
import { OrdersService } from '../services/orders.service';
import { PersonService } from '../services/person.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';

  orders?: Observable<any>;
  data?: Observable<any>;
  selectedEmail:any;

  modalRef: MdbModalRef<ModalComponent> | null = null;



  openModal(data:any) {
    this.modalRef = this.modalService.open(ModalComponent, {
      modalClass: 'modal-lg',
      data,
    });
    this.modalRef.onClose.subscribe((message: any) => {
      console.log(message);

      if(message==="2"){
        this.orders = this.orderService.getOrders();
      }
    });
  }
  constructor(private personService: PersonService,private orderService:OrdersService,private modalService: MdbModalService) { }
  ngOnInit() {
    this.data=this.personService.getUsers();
    this.orders = this.orderService.getOrders();
  }

  selectFile(event: any) {
    this.selectedFiles = event.target.files;
  }


  view(taskId:any){
    // this.fileuploadingService.getAllPhonesWithTaskID(taskId).subscribe(
    //   (event: any) => {
        
    //   });
  }

  delete(taskId:any){
    // this.fileuploadingService.deleteByTaskID(taskId).subscribe(
    //   (event: any) => {
    //     this.fileInfos = this.fileuploadingService.getAllTask();
    //   });
  }

  showUsers(){
    this.personService.getUsers().subscribe(
          (event: any) => {
            this.openModal({"title":"Users",state:"1",event});
          });
    
  }
  addOrder(){
    this.openModal({"title":"Add Order",state:"2"});
  }

  keyword = 'name';
  
  selectEvent(item:any) {
    // do something with selected item
    this.selectedEmail=item.email;
    this.orders=this.orderService.getOrderByEmailId(this.selectedEmail);

  }

  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }
  
  onFocused(e:any){
    // do something when input is focused
    console.log(e);
  }
}

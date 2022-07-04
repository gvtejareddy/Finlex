import { Component, Input, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent implements OnInit {
  constructor(public modalRef: MdbModalRef<ModalComponent>) {}

   

  ngOnInit(): void {
    console.log(this.event);
  }
  state:String | any =null;
  title:String | any =null;
  event:any =null;

}
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import { OrdersComponent } from './orders/orders.component';
import { AddOrdersComponent } from './add-orders/add-orders.component';
import { UsersComponent } from './users/users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { NgSelectModule } from '@ng-select/ng-select';
import { CommonModule } from '@angular/common';
import { TrimPipe } from './trim.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    OrdersComponent,
    AddOrdersComponent,
    UsersComponent,
    TrimPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MdbModalModule,
    ReactiveFormsModule,
    AutocompleteLibModule,
    NgSelectModule,
    CommonModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

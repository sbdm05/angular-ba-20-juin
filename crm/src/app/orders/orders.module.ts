import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageListOrdersComponent } from './page-list-orders/page-list-orders.component';
import { PageAddOrderComponent } from './page-add-order/page-add-order.component';
import { PageEditOrderComponent } from './page-edit-order/page-edit-order.component';



@NgModule({
  declarations: [
    PageListOrdersComponent,
    PageAddOrderComponent,
    PageEditOrderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class OrdersModule { }

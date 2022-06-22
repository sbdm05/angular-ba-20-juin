import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageListOrdersComponent } from './page-list-orders/page-list-orders.component';
import { PageAddClientComponent } from './page-add-client/page-add-client.component';
import { PageEditClientComponent } from './page-edit-client/page-edit-client.component';



@NgModule({
  declarations: [
    PageListOrdersComponent,
    PageAddClientComponent,
    PageEditClientComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ClientsModule { }

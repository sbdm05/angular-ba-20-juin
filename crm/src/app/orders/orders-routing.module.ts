import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAddOrderComponent } from './page-add-order/page-add-order.component';
import { PageEditOrderComponent } from './page-edit-order/page-edit-order.component';
import { PageListOrdersComponent } from './page-list-orders/page-list-orders.component';


const routes: Routes = [
  // ici l'url est /orders
  { path: '', component: PageListOrdersComponent },
  // ici l'url est /orders/add-order
  { path: 'add-order', component: PageAddOrderComponent },
  // ici l'url est /orders/edit-order
  { path: 'edit-order', component: PageEditOrderComponent }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersRoutingModule {}


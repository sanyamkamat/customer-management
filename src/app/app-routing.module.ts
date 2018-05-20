import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "@components/home/home.component";
import { CustomersComponent } from '@components/customers/customers.component'
import { CustomerDetailComponent } from "@components/customers/customer-detail/customer-detail.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'customers',
    component: CustomersComponent
  },
  {
    path: 'addCustomer',
    component: CustomerDetailComponent,
    data: { new_user: true }
  },
  {
    path: 'customer/:id',
    component: CustomerDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

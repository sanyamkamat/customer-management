import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { Customer } from "@interfaces/customer";
import { CustomerService } from "@services/customer/customer.service";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers: Customer[] = [];

  constructor(private customerService: CustomerService,
              private toastrService: ToastrService) {
  }

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers() {
    this.customerService.getCustomers().subscribe(customers => this.customers = customers);
  }

  onDelete(id) {
    this.customerService.deleteCustomer(id).subscribe(() => {
      this.customers = this.customers.filter(customer => customer.id !== id);
      this.toastrService.info('Customer removed');
    });
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

import { Customer } from "@interfaces/customer";
import { CustomerService } from "@services/customer/customer.service";

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
  @Input() customer: Customer;
  pageLoaded: boolean = false;
  newUser: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private customerService: CustomerService,
    private location: Location,
    private toastrService: ToastrService,
  ) {
  }

  ngOnInit(): void {
    this.route.data
      .subscribe((data = { new_user: false }) => {
        if (data.new_user) {
          this.newUser = true;
          this.customer = this.returnEmptyCustomer();
          this.pageLoaded = true;
        } else {
          this.getCustomer();
        }
      });
  }

  getCustomer(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.customerService.getCustomer(+id).subscribe(customer => {
      this.customer = customer[0];
      this.pageLoaded = true;
    });
  }

  save(): void {
    if (this.newUser) {
      this.customerService.addCustomer(this.customer as Customer).subscribe(() => {
        this.toastrService.info('Customer added!');
        //this.router.navigate(['/home']);
      }, () => {
        this.toastrService.error('User addition failed!');
      });
    } else {
      this.customerService.updateCustomer(this.customer).subscribe(() => {
        this.toastrService.info('Customer updated!');
      }, () => {
        this.toastrService.error('FAILED updated!');
      });
    }
  }

  goBack(): void {
    this.location.back();
  }

  returnEmptyCustomer(): Customer {
    return {
      id: 0,
      name: {
        first: '',
        last: '',
      },
      birthday: '',
      gender: '',
      lastContact: '',
      customerLifetimeValue: 0,
    }
  }

}

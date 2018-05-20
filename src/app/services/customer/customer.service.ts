import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Customer } from '@interfaces/customer';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customersUrl = 'api/customers';
  maxId: number = 0;

  constructor(private http: HttpClient) {
  }

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.customersUrl)
      .pipe(
        tap(customers => {
          this.maxId = Math.max(customers.length ? customers[customers.length - 1].id : 0, this.maxId);
        }),
      );
  }

  getCustomer(id: number): Observable<Customer> {
    const url = `${this.customersUrl}/?id=${id}`;
    return this.http.get<Customer>(url);
  }

  addCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.customersUrl, { ...customer, ...{ id: ++this.maxId } }, httpOptions)
  }

  updateCustomer(customer: Customer): Observable<any> {
    return this.http.put(this.customersUrl, customer, httpOptions)
  }

  deleteCustomer(id: number): Observable<Customer> {
    const url = `${this.customersUrl}/${id}`;
    return this.http.delete<Customer>(url, httpOptions);
  }

}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { InMemoryDataService } from '@services/in-memory-api.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersComponent } from '@components/customers/customers.component';
import { HomeComponent } from '@components/home/home.component';
import { GenderPipe } from '@pipes/gender/gender.pipe';
import { CustomerDetailComponent } from '@components/customers/customer-detail/customer-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    HomeComponent,
    GenderPipe,
    CustomerDetailComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 100, dataEncapsulation: false })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDetailComponent } from './customer-detail.component';
import { ToastrModule } from "ngx-toastr";
import { APP_BASE_HREF } from "@angular/common";
import { CustomersComponent } from "@components/customers/customers.component";
import { AppRoutingModule } from "@app/app-routing.module";
import { HomeComponent } from "@components/home/home.component";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "@services/in-memory-api.service";
import { AppComponent } from "@app/app.component";
import { GenderPipe } from "@pipes/gender/gender.pipe";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

describe('CustomerDetailComponent', () => {
  let component: CustomerDetailComponent;
  let fixture: ComponentFixture<CustomerDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

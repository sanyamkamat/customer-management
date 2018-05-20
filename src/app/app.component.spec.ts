import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HomeComponent } from "@components/home/home.component";
import { CustomerDetailComponent } from "@components/customers/customer-detail/customer-detail.component";
import { CustomersComponent } from "@components/customers/customers.component";
import { GenderPipe } from "@pipes/gender/gender.pipe";

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { ToastrModule } from 'ngx-toastr';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { InMemoryDataService } from '@services/in-memory-api.service';

import { AppRoutingModule } from './app-routing.module';

describe('AppComponent', () => {
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
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});

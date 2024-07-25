import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BusDetailsComponent } from './pages/bus-details/bus-details.component';
import { SelectSeatsComponent } from './pages/select-seats/select-seats.component';
import { BillComponent } from './pages/bill/bill.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BusDetailsComponent,
    SelectSeatsComponent,
    BillComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

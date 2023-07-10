import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { LogisticsService } from './services/logistics.service';
import { EventService } from './services/event.service';
import { LogisticDetailComponent } from './logistic-detail/logistic-detail.component';
import { LogisticsDetailsService } from './services/logistics-details.service';
import { NgxPaginationModule } from 'ngx-pagination';






@NgModule({
  declarations: [
    AppComponent,
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})

 
export class AppModule { }
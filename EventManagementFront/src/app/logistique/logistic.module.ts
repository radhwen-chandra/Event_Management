import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogisticRoutingModule } from './logistic-routing.module';
import { LogisticsListComponent } from './logistics-list/logistics-list.component';
import { UpdatelogisticsComponent } from './updatelogistics/updatelogistics.component';
import {ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms'; // Importez FormsModule ici



@NgModule({
  declarations: [LogisticRoutingModule.components, LogisticsListComponent, UpdatelogisticsComponent],
  imports: [
    CommonModule,
    LogisticRoutingModule,
    ReactiveFormsModule,
    FormsModule
    
  ]
})
export class LogisticModule { }
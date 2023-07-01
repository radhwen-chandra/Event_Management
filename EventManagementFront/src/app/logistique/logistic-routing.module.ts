import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogisticsListComponent } from './logistics-list/logistics-list.component';
import { AddLogisticsComponent } from './add-logistics/add-logistics.component';
import { UpdatelogisticsComponent } from './updatelogistics/updatelogistics.component';
import { LogistiqueComponent } from './logistique.component';

const routes: Routes = [
  {
    path:'',component: LogistiqueComponent,
    children : [
      
      { path: 'add',   component: AddLogisticsComponent },
      { path: 'list',   component: LogisticsListComponent },
      { path: 'update/:id',   component: UpdatelogisticsComponent },
      
     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogisticRoutingModule {
  static components = [
    LogistiqueComponent,
  AddLogisticsComponent,
  LogisticsListComponent,
  UpdatelogisticsComponent,
  ]
 }

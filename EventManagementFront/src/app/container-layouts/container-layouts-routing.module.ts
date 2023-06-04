import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProfileComponent } from '../profile/profile.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ContainerLayoutsComponent } from './container-layouts.component';
import { EventListComponent } from '../event/event-list/event-list.component';
import { AddEventComponent } from '../event/add-event/add-event.component';
import { EventDetailsComponent } from '../event/event-details/event-details.component';

const routes: Routes = [
  {
    path:'',component:ContainerLayoutsComponent,
    children : [
      { path:'event',loadChildren:() => import('../event/event.module').then(m => m.EventModule)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ContainerLayoutsRoutingModule { }
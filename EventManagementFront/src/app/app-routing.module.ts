import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerLayoutsComponent } from './container-layouts/container-layouts.component';

const routes: Routes =[
  // {
  //   path: '',
  //   redirectTo: 'dashboard',
  //   pathMatch: 'full',
  // }, 
  {
    path: '',
    component: ContainerLayoutsComponent,
    children: [{
      path: '',
      loadChildren: () => import('./container-layouts/container-layouts.module').then(m => m.ContainerLayoutsModule)
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

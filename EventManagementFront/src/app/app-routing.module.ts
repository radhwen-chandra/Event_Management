import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './security/authguard.guard';
import { AddUserComponent } from './user-components/add-user/add-user.component';
import { SignInComponent } from './user-components/sign-in/sign-in.component';
import { SignUpComponent } from './user-components/sign-up/sign-up.component';
import { UserListComponent } from './user-components/user-list/user-list.component';

const routes: Routes = [
  { path: 'sign-up', component: SignUpComponent },
  { path: 'login', component: SignInComponent },
  { path: 'user-list', component: UserListComponent, canActivate: [AuthGuard] },
  { path: 'add-user/:id', component: AddUserComponent, canActivate: [AuthGuard] },
  { path: 'add-user', component: AddUserComponent, canActivate: [AuthGuard] },
  { path: '', component: SignInComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

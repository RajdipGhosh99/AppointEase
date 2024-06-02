import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { LogoutComponent } from './logout/logout.component';
import { UserMenuComponent } from './user-menu/user-menu.component';

const routes: Routes = [
  {
    path: 'login',
    component: SigninComponent
  },
  {
    path: 'register',
    component: SignupComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: 'menu',
    component: UserMenuComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralRoutingModule { }

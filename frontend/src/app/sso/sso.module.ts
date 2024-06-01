import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SsoRoutingModule } from './sso-routing.module';
import { GoogleComponent } from './google/google.component';


@NgModule({
  declarations: [
    GoogleComponent
  ],
  imports: [
    CommonModule,
    SsoRoutingModule
  ]
})
export class SsoModule { }

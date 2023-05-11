import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CryptRoutingModule } from './crypt-routing.module';
import { CryptComponent } from './crypt.component';


@NgModule({
  declarations: [
    CryptComponent
  ],
  imports: [
    CommonModule,
    CryptRoutingModule
  ]
})
export class CryptModule { }

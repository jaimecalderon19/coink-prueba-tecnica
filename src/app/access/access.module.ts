import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AccessPage } from './access.page';
import { AccessPageRoutingModule } from './access-routing.module';



@NgModule({
  declarations: [
    AccessPage
  ],
  imports: [
    CommonModule,
    IonicModule,
    AccessPageRoutingModule
  ]
})
export class AccessModule { }

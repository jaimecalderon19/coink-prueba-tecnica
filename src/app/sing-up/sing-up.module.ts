import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingUpPage } from './sing-up.page';
import { IonicModule } from '@ionic/angular';
import { SingUpPageRoutingModule } from './sing-up-routing.module';
import { FormsModule } from '@angular/forms';
import { StepsModule } from 'primeng/steps';

@NgModule({
  declarations: [
    SingUpPage,
  ],
  imports: [
    CommonModule,
    IonicModule,
    SingUpPageRoutingModule,
    FormsModule,
    StepsModule
  ]
})
export class SingUpModule {}

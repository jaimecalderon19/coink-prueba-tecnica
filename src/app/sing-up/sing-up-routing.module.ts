import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingUpPage } from './sing-up.page';
import { PhoneFormComponent } from '../phone-form/phone-form.component';
import { DateAccountFormComponent } from '../date-account-form/date-account-form.component';
import { ContratcComponent } from '../contratc/contratc.component';

const routes: Routes = [
  {
    path: '',
    component: SingUpPage,
    children: [
      {
        path: 'phone',
        component: PhoneFormComponent
      },
      {
        path: 'data',
        component: DateAccountFormComponent
      },
      {
        path: 'contract',
        component: ContratcComponent
      },
    ]

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SingUpPageRoutingModule {}

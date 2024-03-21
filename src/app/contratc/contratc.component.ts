import { Component, OnInit, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CheckboxModule } from 'primeng/checkbox';
import { CommonModule } from '@angular/common';
import { DataService } from '../services/data.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-contratc',
  templateUrl: './contratc.component.html',
  styleUrls: ['./contratc.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CheckboxModule,
    CommonModule
  ]

})
export class ContratcComponent implements OnInit  {

  checked:boolean = false;
  private data = inject(DataService);

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
    this.data.setTitle('Finalizar')
  }

  navigateToHome() {
    this.navCtrl.navigateForward('/home');
  }
}

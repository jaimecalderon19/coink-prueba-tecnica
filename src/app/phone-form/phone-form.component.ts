import { Component, OnInit, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { DataService } from '../services/data.service';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-phone-form',
  templateUrl: './phone-form.component.html',
  styleUrls: ['./phone-form.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    InputTextModule,
    ReactiveFormsModule
  ]
})
export class PhoneFormComponent implements OnInit {

  formGroup!: FormGroup;

  private data = inject(DataService);

  constructor(private dataService: DataService, private navCtrl: NavController) { }

  updatePhone() {
    this.dataService.updateDataUserPhone(this.formGroup.get('value')?.value);
    this.navCtrl.navigateForward('/singup/data');
  }

  ngOnInit() {
      this.formGroup = new FormGroup({
          value: new FormControl()
      });

      this.data.setTitle('Numero de celular')

  }


}

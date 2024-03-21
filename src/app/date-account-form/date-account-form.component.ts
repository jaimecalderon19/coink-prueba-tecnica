import { Component, OnInit, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators  } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { PasswordModule } from 'primeng/password';
import { DataService, UserData } from '../services/data.service';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-date-account-form',
  templateUrl: './date-account-form.component.html',
  styleUrls: ['./date-account-form.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    InputTextModule,
    ReactiveFormsModule,
    DropdownModule,
    CalendarModule,
    PasswordModule
  ]

})
export class DateAccountFormComponent  implements OnInit {

  formGroup!: FormGroup;
  private data = inject(DataService);


  constructor(private fb: FormBuilder, private dataService: DataService, private navCtrl: NavController) { };

  ngOnInit() {
      this.formGroup = this.fb.group({
          type_document: ['', Validators.required],
          num_document: ['', Validators.required],
          date_expedition_document: ['', Validators.required],
          date_of_birth_document: ['', Validators.required],
          gender: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          comfirm_email: ['',[Validators.required, Validators.email]],
          pin: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]],
          confirm_pin: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]],
      });

      this.data.setTitle('Datos de cuenta')

  }

  noEsValido(campo: string) {
    return this.formGroup.controls[campo].touched && this.formGroup.controls[campo].invalid;
  }

  getMensaje(campo: string): string {
    const error = this.formGroup.get(campo)?.errors;
    let msg:string="";

    if (error) {
      if(this.formGroup.get(campo)?.hasError('required')){

        msg='El campo es obligatorio';
      }else if(this.formGroup.get(campo)?.hasError('maxLength')){
        msg =  `Este campo no debe exceder el numero caracteres`;
      }else{
        msg = 'campo no valido'
      }
    }
    return msg;
  }

  createUserDataObject(): UserData {
    return {
      phone: this.formGroup.value.phone,
      document: this.formGroup.value.num_document,
      dateExpedition: this.formGroup.value.date_expedition_document,
      dateBirth: this.formGroup.value.date_of_birth_document,
      gender: this.formGroup.value.gender,
      email: this.formGroup.value.email,
      // ... add other properties as needed
    };
  }

  validateForm() {
    const userData = this.createUserDataObject();
    this.dataService.updateDataUser(userData);
    this.navCtrl.navigateForward('/singup/contract');
  }

}

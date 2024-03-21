import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Observable, map, of } from 'rxjs';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-singup',
  templateUrl: 'sing-up.page.html',
  styles:  [`
  .div-con-sombra-inferior {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }

  .container {
  position: relative;
  text-align: center;
}

.back-button {
  position: absolute;
  left: 0.2rem;
  top: 50%;
  transform: translateY(-50%);
}

.centered-title {
  margin: 0;
  color: #004B40;
}

`],
})
export class SingUpPage implements OnInit {
  items: MenuItem[] | undefined;

  title: null | string = '';

  constructor(private dataService: DataService, private cdRef: ChangeDetectorRef) {}



  ngOnInit() {
      this.items = [
          {
              routerLink: 'phone'
          },
          {
              routerLink: 'data'
          },
          {
              routerLink: 'contract'
          },
      ];

      this.dataService.title$.subscribe(nuevoTitulo => {
        this.title = nuevoTitulo;
      });

      this.cdRef.detectChanges();
  }

}

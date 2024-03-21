import { Component, OnInit, inject } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';
import { DataService, UserData } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  private data = inject(DataService);
  visible = true;
  dataUser: UserData | null = null;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    // Subscribe to dataUser$ to receive updates
    this.dataService.dataUser$.subscribe(userData => {
      this.dataUser = userData;
    });
  }

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

}

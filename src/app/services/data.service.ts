import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Message {
  fromName: string;
  subject: string;
  date: string;
  id: number;
  read: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {



  private _titleSubject = new BehaviorSubject<string>('Datos de la cuenta'); // Default title
  title$: Observable<string> = this._titleSubject.asObservable()


  private dataUserSubject = new BehaviorSubject<UserData | null>(null);
  dataUser$: Observable<UserData | null> = this.dataUserSubject.asObservable();

  updateDataUserPhone(phone: string) {

    const updatedDataUser = {...this.dataUserSubject.getValue(), phone} as UserData;
    this.dataUserSubject.next(updatedDataUser);
  }

  updateDataUser(userData: UserData) {
    this.dataUserSubject.next(userData);
  }

  getDataUser(): UserData | null {
    return this.dataUserSubject.getValue(); // Get current value (optional)
  }

  setTitle(title: string): void {
    this._titleSubject.next(title); // Emit new value
  }


  getTitle(): string {
    return this._titleSubject.getValue(); // Get current value (optional)
  }
}


export interface UserData {
  phone: string;
  document: string;
  dateExpedition: string;
  dateBirth: string;
  gender: string;
  email: string;
}

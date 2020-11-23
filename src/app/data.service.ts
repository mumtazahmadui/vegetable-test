import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class DataService {

  public vegetableSubject = new Subject<any>();
  constructor() { 
  }

  public setVegetableList(vegetable: any) {
    if (vegetable) {
      this.vegetableSubject.next(vegetable);
    }
   
  }
 
  public getVegetable(): Observable<any> {
    return this.vegetableSubject.asObservable();
  }
}
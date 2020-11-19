import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {

  public vegetableNameSource = new BehaviorSubject<any>('');
  constructor() { 
  }

  public setVegetableList(vegetable: any) {
    if (vegetable) {
      this.vegetableNameSource.next(vegetable);
    }
   
  }
 
  public getVegetable(): Observable<any> {
    return this.vegetableNameSource.asObservable();
  }
}
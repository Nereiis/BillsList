import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstimateService {

  budget!: number;
  rest!: number;
  private bills$ = new Subject<any>();


  constructor() { 
    this.budget = 0;
    this.rest = 0;
  }

  addExpense(expense: any) {
    this.rest = this.rest - expense.quantity;
    this.bills$.next(expense);
  }

  getBills(): Observable<any> {
    return this.bills$.asObservable();
  }
}

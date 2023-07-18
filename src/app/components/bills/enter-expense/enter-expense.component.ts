import { Component, OnInit } from '@angular/core';
import { EstimateService } from 'src/app/services/estimate.service';


@Component({
  selector: 'app-enter-expense',
  templateUrl: './enter-expense.component.html',
  styleUrls: ['./enter-expense.component.scss']
})
export class EnterExpenseComponent implements OnInit{

  billName!: string;
  quantity!: number;
  formFail!: boolean;
  textFail: string;

  constructor(private _estimateService: EstimateService) {

    this.textFail = 'Importe o nombre incorrecto';

  }

  

  ngOnInit(): void{}

  addBill() {

    if(this.quantity > this._estimateService.rest) {
      this.formFail = true;
      this.textFail = 'El importe del gasto supera el presupuesto';
      return;
    }

    if(this.billName === '' || this.quantity <= 0) {
      this.formFail = true;
    } else {

      const EXPENSE = {
        name: this.billName,
        quantity: this.quantity
      }

      this._estimateService.addExpense(EXPENSE);

      this.formFail = false;
      this.billName = '';
      this.quantity = 0;
    }
  }
  
}

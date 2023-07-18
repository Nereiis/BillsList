import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EstimateService } from 'src/app/services/estimate.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy{

  subscription!: Subscription;
  estimate!: number;
  rest!: number;
  billsList: any[] = [];

  constructor(private _estimateService: EstimateService){
    this.subscription = this._estimateService.getBills().subscribe(data => {
      this.rest = this.rest - data.quantity;
      this.billsList.push(data);
      
    })
  }

  ngOnInit(): void {

    this.estimate = this._estimateService.budget;
    this.rest = this._estimateService.rest;
  }

  ngOnDestroy(): void{
    this.subscription.unsubscribe();
  }

  changeColor() {
    if(this.estimate / 4 > this.rest) {
      return 'alert alert-danger';
    } else if(this.estimate / 2 > this.rest) {
      return 'alert alert-warning';
    } else {
      return 'alert alert-secondary';
    }
  }

  deleteBill(expense: any) {

    const index = this.billsList.indexOf(expense);
  
    if (index !== -1) {
      const deletedAmount = this.billsList[index].quantity;
  
      this.rest += deletedAmount;
  
      this.billsList.splice(index, 1);
    }
  }
}

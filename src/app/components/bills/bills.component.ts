import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EstimateService } from 'src/app/services/estimate.service';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.scss']
})
export class BillsComponent implements OnInit{

  

  constructor(private _estimateService: EstimateService, private router: Router) {}

  ngOnInit(): void {
    if(this._estimateService.budget === 0) {
      this.router.navigate(['/EnterBudget']);
    }
  }

}

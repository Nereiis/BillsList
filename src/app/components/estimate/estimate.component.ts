import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EstimateService } from 'src/app/services/estimate.service';

@Component({
  selector: 'app-estimate',
  templateUrl: './estimate.component.html',
  styleUrls: ['./estimate.component.scss']
})
export class EstimateComponent {

  quantity!: number;
  quantityFail!: boolean;

  constructor(private _estimateService: EstimateService, private router: Router) {}

  ngOnInit(): void{}

  add() {
    if(this.quantity > 0) {

      this.quantityFail = false;
      this._estimateService.budget = this.quantity;
      this._estimateService.rest = this.quantity;

      this.router.navigate(['/Bills'])

    } else {
      this.quantityFail = true;
    }
  } 


}

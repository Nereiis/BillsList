import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnterExpenseComponent } from './components/bills/enter-expense/enter-expense.component';
import { BillsComponent } from './components/bills/bills.component';
import { EstimateComponent } from './components/estimate/estimate.component';

const routes: Routes = [
  { path: ' ', redirectTo: 'EnterBudget', pathMatch: 'full'},
  { path: 'EnterBudget', component: EstimateComponent},
  { path: 'Bills', component: BillsComponent},
  { path: '**', redirectTo: 'EnterBudget', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

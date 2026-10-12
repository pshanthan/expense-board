import { Component } from '@angular/core';
import { Expense } from '../models/Expense';
import { ExpenseService } from '../expense.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  expenses: Expense[] = [];
  constructor(private expenseService: ExpenseService) {}
  getExpenses() {
    this.expenseService.getExpenses().subscribe((e) => (this.expenses = e));
  }
}

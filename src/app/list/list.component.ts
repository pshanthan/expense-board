import { Component, OnInit } from '@angular/core';
import { Expense } from '../models/Expense';
import { ExpenseService } from '../expense.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent implements OnInit {
  expenses: Expense[] = [];

  constructor(private expenseService: ExpenseService) {}
  ngOnInit(): void {
    this.getExpenses();
  }
  getExpenses() {
    this.expenseService.getExpenses().subscribe((e) => (this.expenses = e));
  }
}

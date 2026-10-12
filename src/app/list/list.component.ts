import { Component, OnInit } from '@angular/core';
import { Expense } from '../models/Expense';
import { ExpenseService } from '../expense.service';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-list',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent implements OnInit {
  expenses: Expense[] = [];
  editingId: number | null = null;
  expenseForm = new FormGroup({
    title: new FormControl('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    category: new FormControl('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    amount: new FormControl('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    date: new FormControl('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    paid: new FormControl(false, {
      nonNullable: true,
      validators: Validators.required,
    }),
  });
  constructor(private expenseService: ExpenseService) {}
  ngOnInit(): void {
    this.getExpenses();
  }

  getExpenses() {
    this.expenseService.getExpenses().subscribe((e) => (this.expenses = e));
  }
  startEdit(e: Expense) {
    this.editingId = e.id ?? null;
    this.expenseForm.patchValue({
      title: e.title,
      category: e.category,
      paid: e.paid,
      date: e.date,
      amount: String(e.amount),
    });
  }
  onSubmit(e: Expense) {
    const raw = this.expenseForm.getRawValue();
    const expense: Expense = {
      title: raw.title,
      category: raw.category,
      amount: Number(raw.amount),
      date: raw.date,
      paid: raw.paid,
    };
    if (this.editingId) {
      const found = this.expenses.filter(
        (expense) => expense.id === this.editingId,
      );
      if (found) {
      }
    }
  }
}

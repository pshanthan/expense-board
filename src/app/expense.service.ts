import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Expense } from './models/Expense';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  constructor(private httpClient: HttpClient) {}
  apiUrl = 'http://localhost:3000/expenses';
  getExpenses(): Observable<Expense[]> {
    return this.httpClient.get<Expense[]>(this.apiUrl);
  }
  addExpense(e: Expense): Observable<Expense> {
    return this.httpClient.post<Expense>(this.apiUrl, e);
  }
  updateExpense(e: Expense): Observable<Expense> {
    return this.httpClient.put<Expense>(`${this.apiUrl}/${e.id}`, e);
  }
  deleteExpense(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiUrl}/${id}`);
  }
}

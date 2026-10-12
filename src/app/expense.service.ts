import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  constructor(private httpClient: HttpClient) {}
  apiUrl = 'http://localhost:3000/expenses';
  getExpenses(): Observable<Expense[]> {
    this.httpClient.get(this.apiUrl);
  }
}

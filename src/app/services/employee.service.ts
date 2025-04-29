
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private employees: Employee[] = [
    { id: 1, name: 'Alice Johnson', role: 'Software Developer', email: 'alice@example.com' },
    { id: 2, name: 'Bob Smith', role: 'Project Manager', email: 'bob@example.com' },
    { id: 3, name: 'Charlie Brown', role: 'QA Engineer', email: 'charlie@example.com' }
  ];

  constructor() { }

  getEmployees(): Observable<Employee[]> {
    return of(this.employees);
  }

  getEmployeeById(id: number): Observable<Employee | undefined> {
    return of(this.employees.find(e => e.id === id));
  }
}

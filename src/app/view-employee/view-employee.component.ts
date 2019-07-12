import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable'
import { Store } from '@ngrx/store'
import { Employee } from './../model/employee'
import { AppState } from './../app.state'
import { EmployeeService } from '../app.service'
import * as EmployeeActions from './../actions/employee.action'

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {

  employeeList: Observable<Employee[]>;
  @Output() public updateEmp = new EventEmitter<String>();

  // public employeeList= [];
  public person:any = {};

  constructor(private store: Store<AppState>, private employeeService: EmployeeService ) {
    this.employeeList = store.select('employee')
   
   }

   ngOnInit() {
    // this.employeeService.getEmployeeList().subscribe(function(data){
    //   this.employeeList = data;
    //   console.log(this.employeeList)
    // },
    // function(error){
    //     console.log(error.message)
    // });
  }
  delEmployee(index) {
    this.store.dispatch(new EmployeeActions.DeleteEmployee(index))
  }
  updateEmployee(employee) {
    // this.store.dispatch(new EmployeeActions.UpdateEmployee(employee))
    this.updateEmp.emit(employee)
  }

}

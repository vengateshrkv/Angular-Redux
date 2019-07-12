import { Action } from '@ngrx/store'
import { Employee } from './../model/employee'

export const ADD_EMPLOYEE = 'ADD'
export const DELETE_EMPLOYEE = 'DELETE'
export const UPDATE_EMPLOYEE = 'UPDATE'

export class AddEmployee implements Action {
    readonly type= ADD_EMPLOYEE
    constructor(public payload: Employee){}
}

export class DeleteEmployee implements Action {
    readonly type= DELETE_EMPLOYEE
    constructor(public payload: number){}
}
export class UpdateEmployee implements Action {
    readonly type= UPDATE_EMPLOYEE
    constructor(public payload: Employee){}
}

export type Actions = AddEmployee | DeleteEmployee | UpdateEmployee
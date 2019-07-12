import { Action } from '@ngrx/store'
import { Employee } from './../model/employee'
import * as EmployeeActions from './../actions/employee.action'

const initialState: any =  [
    {
        id : 101,
        name: "Tamil",
        department: "EEE",
        age: 25
    }]


export function reducer(state = initialState, action: EmployeeActions.Actions) {
    switch(action.type) {
        case EmployeeActions.ADD_EMPLOYEE:
            return [ ...state, action.payload]
        case EmployeeActions.DELETE_EMPLOYEE:
            state.splice(action.payload, 1)
            return state
        case EmployeeActions.UPDATE_EMPLOYEE:
            console.log(action.payload)
            return action.payload
        default:
            return state;
    }
}
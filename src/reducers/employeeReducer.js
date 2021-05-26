import { INIT, ADD_EMPLOYEE } from '../constants/employeeConstants.js'

// {
//     firstName: undefined,
//     lastName: undefined,
//     startDate: undefined,
//     street: undefined,
//     city: undefined,
//     state: undefined,
//     zipCode: undefined,
//     department: undefined
// }
const employees = {
    arr: []
}

const EmployeeReducer = (state = employees, action) => {
    switch(action.type) {
        case INIT:
            return {
                employee: action.payload.employee
            }
        case ADD_EMPLOYEE:
            return {
                ...state,
                arr: state.arr.concat(action.payload.new_employee)
            }
        default:
            return state
    }
}

export default EmployeeReducer
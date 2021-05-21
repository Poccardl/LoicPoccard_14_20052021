import * as types from '../constants/employeeConstants.js'

export const init = (employee) => ({
    type: types.INIT,
    payload: {
        employee
    }
})

export const add_employee = (new_employee) => ({
    type: types.ADD_EMPLOYEE,
    payload: {
        new_employee
    }
})
import { configureStore } from '@reduxjs/toolkit'
import EmployeeReducer from '../reducers/employeeReducer.js'

export const store = configureStore({
  reducer: {
    employees: EmployeeReducer,
  },
})

import React from 'react'
import CurrentEmployeesTabStore from '../../components/current_employees_tab/CurrentEmployeesTab.jsx'

function CurrentEmployees() {
    return (
        <>
        <div className="current_employees">
            <h1>Current Employees</h1>
            <CurrentEmployeesTabStore />
        </div>
        </>
    )
}

export default CurrentEmployees
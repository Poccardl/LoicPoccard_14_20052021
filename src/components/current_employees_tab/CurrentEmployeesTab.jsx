import React from 'react'
import { connect } from 'react-redux'
import { DataGrid } from '@material-ui/data-grid'

function CurrentEmployeesTab() {
    return (
        <>
        <div className="current_employees_tab">
            CurrentEmployeesTab!
        </div>
        </>
    )
}

const CurrentEmployeesTabStore = connect()(CurrentEmployeesTab)

export default CurrentEmployeesTabStore
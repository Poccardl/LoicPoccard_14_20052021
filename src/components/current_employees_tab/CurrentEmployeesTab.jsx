import React from 'react'
import { connect } from 'react-redux'
import { DataGrid } from '@material-ui/data-grid'
import { store } from '../../app/store.js'

function CurrentEmployeesTab() {

    /**
     * Adds an id to each employee to be able to use the DataGrid component
     * @date 2021-05-26
     * @returns {object} rows - list of employees
     */
    const addIdToEmployee = () => {
        const rows = []
        let tab = store.getState().employees.arr
        for (let element in tab) {
            tab[element].id = parseInt(element, 10) + 1
            rows.push(tab[element])
        }
        return rows
    }

    const columns = [
        { field: 'firstName', headerName: 'First name', width: 175 },
        { field: 'lastName', headerName: 'Last name', width: 175 },
        { field: 'startDate', headerName: 'Start Date', width: 175},
        { field: 'department', headerName: 'Department', width: 175 },
        { field: 'street', headerName: 'Street', width: 175 },
        { field: 'city', headerName: 'City', width: 175 },
        { field: 'state', headerName: 'State', width: 175 },
        { field: 'zipCode', headerName: 'Zip Code', width: 175 }
      ]

    const rows = addIdToEmployee()

    return (
        <>
        <div className="current_employees_tab">
            <DataGrid rows={rows} columns={columns} pageSize={100} />
        </div>
        </>
    )
}

const CurrentEmployeesTabStore = connect()(CurrentEmployeesTab)

export default CurrentEmployeesTabStore
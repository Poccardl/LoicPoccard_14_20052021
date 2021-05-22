import React from 'react'
import { connect } from 'react-redux'
import { DataGrid } from '@material-ui/data-grid'
import { store } from '../../app/store.js'

function CurrentEmployeesTab() {

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
        { field: 'firstName', headerName: 'First name', width: 150 },
        { field: 'lastName', headerName: 'Last name', width: 150 },
        { field: 'startDate', headerName: 'Start Date', width: 110},
        { field: 'department', headerName: 'Department', width: 150 },
        { field: 'street', headerName: 'Street', width: 150 },
        { field: 'city', headerName: 'City', width: 150 },
        { field: 'state', headerName: 'State', width: 150 },
        { field: 'zipCode', headerName: 'Zip Code', width: 150 }
      ]

    const rows = addIdToEmployee()

    return (
        <>
        <div className="current_employees_tab">
            <DataGrid rows={rows} columns={columns} pageSize={5} />
        </div>
        </>
    )
}

const CurrentEmployeesTabStore = connect()(CurrentEmployeesTab)

export default CurrentEmployeesTabStore
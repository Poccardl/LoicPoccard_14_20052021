import React from 'react'
import Banner from '../components/banner/Banner.jsx'
import CreateEmployeeFormStore from '../forms/create_employee/CreateEmployeeForm.jsx'

function CreateEmployee() {
    return (
        <>
        <Banner />
        <CreateEmployeeFormStore />
        </>
    )
}

export default CreateEmployee
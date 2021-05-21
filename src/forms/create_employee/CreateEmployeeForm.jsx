import React, { useState } from 'react'
import Select from 'react-select'
import { connect } from 'react-redux'
import { employeeSelector } from '../../selectors/employeeSelector.js'
import { add_employee } from '../../actions/employeeActions.js'
import { state_options, department_options } from '../../constants/formConstants.js'

function CreateEmployeeForm({add_employee}) {

    const [isModal, setIsModal] = useState(false)
    const [firstName, setFirstName] = useState(String)
    const [lastName, setLastName] = useState(String)
    const [birthDate, setBirthDate] = useState(String)
    const [startDate, setStartDate] = useState(String)
    const [street, setStreet] = useState(String)
    const [city, setCity] = useState(String)
    const [state, setState] = useState(String)
    const [zipCode, setZipCode] = useState(String)
    const [department, setDepartment] = useState(String)

    const handleSubmit = (e) => {
        console.log("evt", e)
        const form_result = {
            firstName: firstName,
            lastName: lastName,
            birthDate: birthDate,
            startDate: startDate,
            street: street,
            city: city,
            state: state,
            zipCode: zipCode,
            department: department
        }
        e.preventDefault()
        if (formIsValid(form_result)) {
            add_employee(form_result)
            setIsModal(true)
        }
    }

    const formIsValid = (form_result) => {
        let is_valid = true
        for (let property in form_result) {
            if (form_result[property] === "") {
                is_valid = false
            }
        }
        return is_valid
    }

    return (
        <>
        <div className="create_employee_form">
            <h2>Create Employee</h2>
            <form onSubmit={handleSubmit}>
                <div className="form_element">
                    <label htmlFor="">FirstName</label>
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                </div>
                <div className="form_element">
                    <label htmlFor="">LastName</label>
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                </div>
                <div className="form_element">
                    <label htmlFor="">Date of Birth</label>
                    <input type="date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)}/>
                </div>
                <div className="form_element">
                    <label htmlFor="">Start Date</label>
                    <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)}/>
                </div>

                <p>Adress</p>

                <div className="form_element">
                    <label htmlFor="">Street</label>
                    <input type="text" value={street} onChange={(e) => setStreet(e.target.value)}/>
                </div>
                <div className="form_element">
                    <label htmlFor="">City</label>
                    <input type="text" value={city} onChange={(e) => setCity(e.target.value)}/>
                </div>
                <div className="form_element">
                    <label htmlFor="">State</label>
                    <Select defaultValue={state_options[0]} options={state_options} onChange={(e) => setState(e.value)}/>
                </div>
                <div className="form_element">
                    <label htmlFor="">Zip code</label>
                    <input type="text" value={zipCode} onChange={(e) => setZipCode(e.target.value)}/>
                </div>

                <div className="form_element">
                    <label htmlFor="">Department</label>
                    <Select defaultValue={department_options[0]} options={department_options} onChange={(e) => setDepartment(e.value)}/>
                </div>

                <button className="save_button" type="submit">Sign In</button>
            </form>
        </div>
        </>
    )
}

const CreateEmployeeFormStore = connect(employeeSelector, {add_employee})(CreateEmployeeForm)

export default CreateEmployeeFormStore
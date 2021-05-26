import React, { useState } from 'react'
import Select from 'react-select'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { connect } from 'react-redux'
import { employeeSelector } from '../../selectors/employeeSelector.js'
import { add_employee } from '../../actions/employeeActions.js'
import { state_options, department_options } from '../../constants/formConstants.js'
import { WhModal } from 'wh-modal'

function CreateEmployeeForm({add_employee}) {

    const [isModal, setIsModal] = useState(false)
    const [firstNameIsValid, setFirstNameIsValid] = useState(String)
    const [lastNameIsValid, setLastNameIsValid] = useState(String)
    const [birthDateIsValid, setBirthDateIsValid] = useState(String)
    const [startDateIsValid, setStartDateIsValid] = useState(String)
    const [streetIsValid, setStreetIsValid] = useState(String)
    const [cityIsValid, setCityIsValid] = useState(String)
    const [zipCodeIsValid, setZipCodeIsValid] = useState(String)
    const [firstName, setFirstName] = useState(String)
    const [lastName, setLastName] = useState(String)
    const [birthDate, setBirthDate] = useState(String)
    const [startDate, setStartDate] = useState(String)
    const [street, setStreet] = useState(String)
    const [city, setCity] = useState(String)
    const [state, setState] = useState('Alabama')
    const [zipCode, setZipCode] = useState(String)
    const [department, setDepartment] = useState('Sales')
    const [birthDateValue, setBirthDateValue] = useState(String)
    const [startDateValue, setStartDateValue] = useState(String)

    const handleSubmit = (e) => {
        const form_result = {
            firstName: firstName,
            lastName: lastName,
            birthDate: birthDateValue,
            startDate: startDateValue,
            street: street,
            city: city,
            state: state,
            zipCode: zipCode,
            department: department
        }
        e.preventDefault()
        if (formValidation(form_result)) {
            add_employee(form_result)
            setIsModal(true)
        }
    }

    const formValidation = (form_result) => {
        let is_valid = true
        const regex_zipCode = new RegExp(/^[0-9]{5}(?:-[0-9]{4})?$/)
        if (regex_zipCode.test(form_result["zipCode"]) === false) {
            is_valid = false
            setZipCodeIsValid("notValid")
        } else {
            setZipCodeIsValid("")
        }
        for (let property in form_result) {
            if (form_result[property] === "") {
                is_valid = false
                switch(property) {
                    case "firstName":
                        setFirstNameIsValid("notValid")
                        break
                    case "lastName":
                        setLastNameIsValid("notValid")
                        break
                    case "birthDate":
                        setBirthDateIsValid("notValid")
                        break
                    case "startDate":
                        setStartDateIsValid("notValid")
                        break
                    case "street":
                        setStreetIsValid("notValid")
                        break
                    case "city":
                        setCityIsValid("notValid")
                        break
                    case "zipCOde":
                        setZipCodeIsValid("notValid")
                        break
                    default:
                }
            } else {
                switch(property) {
                    case "firstName":
                        setFirstNameIsValid("")
                        break
                    case "lastName":
                        setLastNameIsValid("")
                        break
                    case "birthDate":
                        setBirthDateIsValid("")
                        break
                    case "startDate":
                        setStartDateIsValid("")
                        break
                    case "street":
                        setStreetIsValid("")
                        break
                    case "city":
                        setCityIsValid("")
                        break
                    case "zipCOde":
                        setZipCodeIsValid("")
                        break
                    default:
                }
            }
        }
        return is_valid
    }

    const closeModal = () => {
        setIsModal(false)
    }

    const parseDateValue = (date, option) => {
        const regex_date = new RegExp(/(^..........)/)
        const date_parsed = date.toISOString().match(regex_date)[0]
        if (option === "birthDate") {
            setBirthDateValue(date_parsed)
            setBirthDate(date)
        } else if (option === "startDate") {
            setStartDateValue(date_parsed)
            setStartDate(date)
        }
    }

    return (
        <>
        {isModal ?
        <div className="blocker" onClick={closeModal}>
            <WhModal isModal={"true"} content={"Employee Created!"} modalStyle={{backgroundColor: "#708622"}}/>
        </div> : ""}
        <div className="create_employee_form">
            <h2>Create Employee</h2>
            <form onSubmit={handleSubmit}>
                <div className="form_element">
                    <label htmlFor="">FirstName</label>
                    <input className={firstNameIsValid} type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                </div>
                <div className="form_element">
                    <label htmlFor="">LastName</label>
                    <input className={lastNameIsValid} type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                </div>
                <div className="form_element">
                    <label htmlFor="">Date of Birth</label>
                    <DatePicker className={birthDateIsValid} selected={birthDate} placeholderText=" jj / mm / aaaa" dateFormat="dd/MM/yyyy" onChange={date => parseDateValue(date, "birthDate")} />
                </div>
                <div className="form_element">
                    <label htmlFor="">Start Date</label>
                    <DatePicker className={startDateIsValid} selected={startDate} placeholderText=" jj / mm / aaaa" dateFormat="dd/MM/yyyy" onChange={date => parseDateValue(date, "startDate")} />
                </div>
                <p>Adress</p>
                <div className="form_element">
                    <label htmlFor="">Street</label>
                    <input className={streetIsValid} type="text" value={street} onChange={(e) => setStreet(e.target.value)}/>
                </div>
                <div className="form_element">
                    <label htmlFor="">City</label>
                    <input className={cityIsValid} type="text" value={city} onChange={(e) => setCity(e.target.value)}/>
                </div>
                <div className="form_element">
                    <label htmlFor="">State</label>
                    <Select defaultValue={state_options[0]} options={state_options} onChange={(e) => setState(e.value)}/>
                </div>
                <div className="form_element">
                    <label htmlFor="">Zip code</label>
                    <input className={zipCodeIsValid} type="text" value={zipCode} onChange={(e) => setZipCode(e.target.value)}/>
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
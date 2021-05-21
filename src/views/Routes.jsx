import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CreateEmployee from './CreateEmployee.jsx'
import CurrentEmployees from './current_employees/CurrentEmployees.jsx'
import Error404 from './Error404.jsx'
import Header from '../components/header/Header.jsx'

function Routes() {
    return (
        <>
        <Router>
            <Header/>
            <Switch>
                <Route path="/" exact component={CreateEmployee}></Route>
                <Route path="/employee-list" exact component={CurrentEmployees}></Route>
                <Route path="/" component={Error404}></Route>
            </Switch>
        </Router>
        </>
    )
}

export default Routes
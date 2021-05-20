import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CreateEmployee from './CreateEmployee.jsx'
import Error404 from './Error404.jsx'
import Header from '../components/header/Header.jsx'

function Routes() {
    return (
        <>
        <Router>
            <Header/>
            <Switch>
                <Route path="/" exact component={CreateEmployee}></Route>
                <Route path="/" component={Error404}></Route>
            </Switch>
            {/* <Footer/> */}
        </Router>
        </>
    )
}

export default Routes
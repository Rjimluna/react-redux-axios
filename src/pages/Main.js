import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'

import AddInformation from './addinformation/AddInformation'
import EditInformation from './editinformation/EditInformation'
import ShowInformation from './showinformation/ShowInformation'

import './Style.css'

export class Main extends Component {
    render() {
        return (
            <div className="mainCss">
                <ul>
                    <li><Link to="/">Show Information</Link></li>
                    <li><Link to="/add">Add Information</Link></li>
                </ul>
                <Route path="/" component={ShowInformation} exact />
                <Route path="/add" component={AddInformation} exact />
                <Route path="/edit/:id" component={EditInformation} exact />
            </div>
        )
    }
}

export default Main

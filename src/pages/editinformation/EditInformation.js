import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateinformation } from '../addinformation/ducks'

export class EditInformation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.location.state.name,
            age: this.props.location.state.age,
            contact: this.props.location.state.contact,
            address: this.props.location.state.address
        }

        this.inputHandler = this.inputHandler.bind(this);
        this.editInformation = this.editInformation.bind(this);
    }

    inputHandler(e) {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    editInformation(e) {
        e.preventDefault();
        this.props.updateinformation(this.props.location.state.id, this.state);
        this.props.history.push('/')
    }

    render() {
        console.log(this.props)
        return (
            <div className="editinfoCss">
                <form onSubmit={this.editInformation}>
                    <label htmlFor="name">Full Name</label>
                    <input id="name" type="text" onChange={this.inputHandler} value={this.state.name} />

                    <label htmlFor="age">Age</label>
                    <input id="age" type="text" onChange={this.inputHandler} value={this.state.age} />

                    <label htmlFor="contact">Contact</label>
                    <input id="contact" type="text" onChange={this.inputHandler} value={this.state.contact} />

                    <label htmlFor="address">Address</label>
                    <input id="address" type="text" onChange={this.inputHandler} value={this.state.address} />

                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
    updateinformation
}

export default connect(mapStateToProps, mapDispatchToProps)(EditInformation)

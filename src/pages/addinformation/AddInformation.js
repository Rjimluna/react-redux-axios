import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addinformation } from './ducks'

export class AddInformation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            contact: '',
            address: ''
        }

        this.inputHandler = this.inputHandler.bind(this);
        this.sumbitInformation = this.sumbitInformation.bind(this);
    }

    inputHandler(e) {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    sumbitInformation(e) {
        e.preventDefault();
        this.props.addinformation(this.state);

        this.setState({
            name: '',
            age: '',
            contact: '',
            address: ''
        })
    }

    render() {
        return (
            <div className="addinfoCss">
                <form onSubmit={this.sumbitInformation}>
                    <label htmlFor="name">Full Name</label>
                    <input id="name" type="text" onChange={this.inputHandler} value={this.state.name} required />

                    <label htmlFor="age">Age</label>
                    <input id="age" type="number" onChange={this.inputHandler} value={this.state.age} required />

                    <label htmlFor="contact">Contact</label>
                    <input id="contact" type="text" onChange={this.inputHandler} value={this.state.contact} required />

                    <label htmlFor="address">Address</label>
                    <input id="address" type="text" onChange={this.inputHandler} value={this.state.address} required />

                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
    addinformation
}

export default connect(mapStateToProps, mapDispatchToProps)(AddInformation)

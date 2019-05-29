import React, { Component } from 'react'
import { connect } from 'react-redux'
import { showinformation, deleteinformation } from '../addinformation/ducks'

export class ShowInformation extends Component {

    componentDidMount() {
        this.props.showinformation();
    }

    editInformation(user) {
        this.props.history.push({
            pathname: '/edit/'+user.id,
            state: {
                id: user.id,
                name: user.name,
                age: user.age,
                contact: user.contact,
                address: user.address
            }
        })
    }

    deleteInfo(user) {
        this.props.deleteinformation(user.id).then(() => this.props.showinformation())
    }

    render() {
        console.log(this.props.fetchInformation)
        return (
            <table>
                <thead>
                    <tr>
                        <th>Full Name</th>
                        <th>Age</th>
                        <th>Contact</th>
                        <th>Address</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.fetchInformation.map((users) => {
                        return (
                            <tr key={users.id}>
                                <td>{users.name}</td>
                                <td>{users.age}</td>
                                <td>{users.contact}</td>
                                <td>{users.address}</td>
                                <td><button onClick={() => this.editInformation(users)}>Edit</button><button onClick={() => this.deleteInfo(users)}>Delete</button></td>
                            </tr>
                        )
                    })
                    }
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = (state) => ({
    fetchInformation: state.fetchinfo.information
})

const mapDispatchToProps = {
    showinformation,
    deleteinformation
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowInformation)

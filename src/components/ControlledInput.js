// Code ControlledInput Component Here
import React from 'react'

class Form extends Component {
    state = {
        firstName: "John",
        lastName: "Henry"
    }

    handleFirstNameChange = event => {
        this.setState({
            firstName: event.target.value
        })
    }

    handleLastNameChange = event => {
        this.setState({
            lastName: event.target.value
        })
    }

    render() {
        return (
            <form>
                <input type="text" name="firstName" onChange={event => this.handleFirstNameChange(event)} value={this.state.fristName} />
                <input type="text" name="lastName" onChange={event => this.handleLastNameChange(event)} value={this.render.state.lastName} />
            </form>
        )
    }
}

export default ControlledInput
import React, { Component } from "react";
// import { nanoid } from 'nanoid';            model.id = nanoid()
// import { FormStyled } from './Form.styled';


class Form extends Component {
    state = {
        name: '',
        id: ''
    }

    handleChange = event => {
        const { name, value } = event.currentTarget;
        this.setState({ [name]: value })
    };

    handleSubmit = event => {
        event.preventDefault();

        this.props.submitProp(this.state);

        this.reset();
    };

    reset = () => {
        this.setState({ name: '', id: '' })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                Name: 
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan" required
                    value={this.state.name}
                    onChange={this.handleChange} />
                </label>

                {/* <label>
                Name: <input type='text' value={this.state.name} onChange={this.handleNameChange} />
                </label> */}

                <button type='sublit'>Add contact</button>
            
            </form>
        )
    };
}

export default Form;
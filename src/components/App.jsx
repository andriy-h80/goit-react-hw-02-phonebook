import React, { Component } from "react";
import { nanoid } from 'nanoid';
import { Container, Form, ContactsList, ContactTitle, ContactName } from './App.styled';
// import Form from './Form/Form';

export class App extends Component {
  state = {
    contacts: [],
    name: ''
  }

  nameInputId = nanoid(10);

  // handleNameChange = event => {
  //   this.setState({ name: event.currentTarget.value })
  // };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value })
  };

  handleSubmit = event => {
    event.preventDefault();

    // this.props.submitProp(this.state);

    const newContact = {
      id: nanoid(10),
      name: this.state.name
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
      name: ''
    }), this.reset);
  };

  reset = () => {
    this.setState({ name: ''})
  }

  // submitForm = data => {
  //   console.log(data);
  // };

  render() {
    return (
      <div
       style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 24,
        }}
      >
        <Container>
          {/* <Form submitProp={this.submitForm} /> */}
          <Form onSubmit={this.handleSubmit}>
            <label htmlFor={this.nameInputId}>
              Name: 
            </label>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan" required
              id={this.nameInputId}
              value={this.state.name}
              onChange={this.handleChange} />

            <button type='submit'>Add contact</button>            
          </Form>

          <ContactsList>
            <ContactTitle>Contacts</ContactTitle>
              {this.state.contacts.map(contact => {
                return (
                <ContactName
                  key={contact.id}>
                  {contact.name}
                </ContactName>
                );
              })}
          </ContactsList>

        </Container>
      </div>
    );
  }
};

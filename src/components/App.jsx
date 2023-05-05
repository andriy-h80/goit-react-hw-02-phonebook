  import React, { Component } from "react";
  import { nanoid } from 'nanoid';
  import { Container, Form, ContactsList, ContactTitle, ContactFilter, ContactName } from './App.styled';
  // import Form from './Form/Form';

  export class App extends Component {
    state = {
      contacts: [
        {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
        {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
        {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
        {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
      ],
      filter: '',
      name: '',
      number: ''
    }

    nameInputId = nanoid(10);

    handleChange = event => {
      const { name, value } = event.currentTarget;
      this.setState({ [name]: value });
    };

    handleSubmit = event => {
      event.preventDefault();

      // this.props.submitProp(this.state);

      const newContact = {
        id: nanoid(10),
        name: this.state.name,
        number: this.state.number,
      };

      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
        name: '',
        number: '',
      }), this.reset);
    };

    reset = () => {
      this.setState({ name: '', number: ''})
    }

    // submitForm = data => {
    //   console.log(data);
    // };


    render() {
      const filteredContacts = this.state.contacts.filter(contact => {
        return contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    });

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
            Phonebook
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

              <label htmlFor={this.number}>
                Number: 
              </label>
              <input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +" required
                id={this.number}
                value={this.state.number}
                onChange={this.handleChange} />  

                <button type='submit'>Add contact</button>          
            </Form>

            <ContactsList>
              <ContactTitle>Contacts</ContactTitle>
              <ContactFilter>
              Find contacts by name 
              <input
                type="text"
                name="filter"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                value={this.state.filter}
                onChange={this.handleChange} />
              </ContactFilter>

                {filteredContacts.map(contact => {
                  return (
                  <ContactName
                    key={contact.id}>
                    {contact.name}: {contact.number}
                  </ContactName>
                  );
                })}
            </ContactsList>

          </Container>
        </div>
      );
    }
  };

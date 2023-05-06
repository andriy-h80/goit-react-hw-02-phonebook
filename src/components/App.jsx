  import React, { Component } from "react";
  import { nanoid } from 'nanoid';
  import { Phonebook, Container, ContactsList, Contacts, ContactName } from './App.styled';
  import ContactForm from './ContactForm/ContactForm';
  import Filter from './Filter/Filter';
  
  export class App extends Component {
    state = {
      contacts: [
        {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
        {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
        {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
        {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
      ],
      filter: '',
    }

    handleChange = event => {
      const { name, value } = event.currentTarget;
      this.setState({ [name]: value });
    };

    handleSubmit = event => {
      event.preventDefault();
      const { name, number } = event.currentTarget;



      const newContact = {
        id: nanoid(10),
        name: name.value,
        number: number.value
      };

      this.setState(prevState => ({
        contacts: [newContact, ...prevState.contacts],
        name: '',
        number: '',
      }), this.reset);
    };

    reset = () => {
      this.setState({ name: '', number: ''})
    }

    deleteContacts = contactId => {
      this.setState(prevState => ({
        contacts: prevState.contacts.filter(contact => contact.id !== contactId),
      }));
    };


    render() {
      const filteredContacts = this.state.contacts.filter(contact => {
        return contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
      });

      return (
        <Phonebook>
          <Container>
            Phonebook
            <ContactForm onSubmit={this.handleSubmit} />    

            <ContactsList>
              <Contacts>Contacts</Contacts>
              <Filter value={this.state.filter} onChange={this.handleChange} />

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
        </Phonebook>
      );
    }
  };

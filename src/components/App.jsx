import { Component } from "react";
import { nanoid } from 'nanoid'
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import ContactForm from "./ContactForm/ContactForm";
import { Container } from "./App.styled";

class App extends Component {
  state = {
    contacts: [],
    filter: ''
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
    this.checkName(e)
  }

  checkName = (e) => {
    const { contacts } = this.state;
    return contacts.some(contact =>
      contact.name.toLowerCase() === e.target.value)
  }


  handleSubmit = e => {
    e.preventDefault()
  if (this.state.contacts.some((contact) => contact.name.toLowerCase() === this.state.name.toLowerCase())) {
    alert(this.state.name + " is already in contact!");
    return;
  }
    let contact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    }

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, contact],
    }))
    e.target.reset()
  }

  contactDelete = (id) => {
    this.setState((prevState) => {
      return { contacts: prevState.contacts.filter(contact => contact.id !== id) }
    })
  }
  
  filteredContacts = () => {
      const { contacts, filter } = this.state;
    return contacts
      .sort((firstContact, secondContact) =>
        firstContact.name.localeCompare(secondContact.name))
      .filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  }

  render() { 
    return (
  <Container>
    <h1>Phonebook</h1>
    <ContactForm handleSubmit={ this.handleSubmit} handleInputChange={this.handleInputChange } />
    <h2>Contacts</h2>
    <Filter handleInputChange={this.handleInputChange } />
    <ContactList contacts={this.filteredContacts()} contactDelete={this.contactDelete} />
</Container>
    );
  }
}
 
export default App;

import { Component } from 'react';
import { nanoid } from 'nanoid'
import './App.css';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';




class App extends Component{
  state = {
    contacts: [],
    filter: ''
  }
  


  onSubmitForm = ({ name, number }) => {
    let newUser = {
      id: nanoid(),
      name,
      number
    }
    let donorExist = this.isDonorExist(name)

    if (!donorExist) {
      this.setState(({contacts}) => {
      return {contacts:[...contacts,newUser]}
       })
    } else {
      alert(`Donor with name ${name} already exist`)
    }

  }

  filterChange = (ev) => {
    const { value } = ev.currentTarget;
    this.setState({filter:value})
  }

  isDonorExist(name) {
    if (this.state.contacts.length !== 0) {
      return this.state.contacts.find((contact) => (contact.name.toLowerCase() === name.toLocaleLowerCase()))
    }
    return false;
  }

  onDeleteContact = (ev) => {

    const { contacts } = this.state;
    const deleteId = ev.currentTarget.id;
    let newContacts = contacts.filter(contact => (contact.id !== deleteId));
    this.setState({contacts:[...newContacts]})
  }

  render() {
    const { contacts,filter } = this.state;
    const visibleContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLocaleLowerCase()));

    return (
      <>
        <h1>Name</h1>
        <ContactForm onSubmit={ this.onSubmitForm } />

        <h1>Contacts</h1>
        {visibleContacts.length === 0 || <ContactList c={visibleContacts} onDelete={this.onDeleteContact} />
        }

        <h2>Find contacts by name</h2>
        <Filter filter={filter } onFilterChange={this.filterChange} />

      </>  
    )

  };
}

export default App;

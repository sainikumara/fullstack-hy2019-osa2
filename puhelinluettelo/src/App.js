import React, { useState } from 'react';
import Contacts from './components/contacts';
import AddContactForm from './components/addcontactform';
import Filter from './components/filter';

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Martti Tienari', number: '040-123456' },
    { name: 'Arto Järvinen', number: '040-123456' },
    { name: 'Lea Kutvonen', number: '040-123456' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ searchContact, setSearchContact ] = useState('')

  const handleContactSearch = (event) => {
    setSearchContact(event.target.value)
  }

  const handleNewName = (event) => {
    setNewName(event.target.value)
  }

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const contactsToShow = searchContact === ''
    ? persons
    : persons.filter(person => person.name.toUpperCase().includes(searchContact.toUpperCase()))

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
    
    if (persons.every(person => person.name !== newName)) {
      setPersons(persons.concat(personObject))
    } else {
      alert(`${newName} on jo luettelossa`);
    }

    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h1>Puhelinluettelo</h1>
      <Filter
        searchContact={searchContact}
        handleContactSearch={handleContactSearch}/>

      
      <h2>Lisää uusi</h2>
      <AddContactForm
        addPerson={addPerson}
        newName={newName}
        handleNewName={handleNewName}
        newNumber={newNumber}
        handleNewNumber={handleNewNumber}
        />

      <h2>Numerot</h2>
      <Contacts persons={contactsToShow} />
    </div>
  )
}

export default App
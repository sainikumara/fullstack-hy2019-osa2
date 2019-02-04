import React, { useState, useEffect } from 'react';
import Contacts from './components/contacts';
import AddContactForm from './components/addcontactform';
import Filter from './components/filter';
import personService from './services/persons';

const App = () => {
  const [ persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ searchContact, setSearchContact ] = useState('')
  const [ successMessage, setSuccessMessage ] = useState(null)

  const hookForGettingContacts = () => {
    personService
    .getAll()
    .then(initialContacts => setPersons(initialContacts))
  }

  useEffect(hookForGettingContacts, [])

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
      personService
      .create(personObject)
      .then(addedContact => {
        setPersons(persons.concat(addedContact))
      })
      setSuccessMessage(
        `Henkilön ${personObject.name} numero lisätty yhteystietoihin`
      )
      setTimeout(() => {
        setSuccessMessage(null)
      }, 5000)
    } else {
      if(window.confirm(`Haluatko varmasti muuttaa kontaktin ${personObject.name} numeroa?`)){
        const person = persons.find(p => p.name === personObject.name)
        personService
          .update(person.id, personObject)
          .then(returnedContact => {
            setPersons(persons.map(p => p.id !== person.id ? p : returnedContact))
          })
        setSuccessMessage(
          `Henkilön ${personObject.name} numero muutettu`
        )
        setTimeout(() => {
          setSuccessMessage(null)
        }, 5000)
      }
    }

    setNewName('')
    setNewNumber('')
  }

  const deleteContact = (id) => {
    let poistettava = persons.find(p => p.id === id)
    if (window.confirm('Haluatko varmasti poistaa numeron')) {
      personService
        .deleteObject(id)
        .then(() => {
          setPersons(persons.filter(person => person.id !== id))
        })
      setSuccessMessage(
        `Henkilön ${poistettava.name} tiedot poistettu`
      )
      setTimeout(() => {
        setSuccessMessage(null)
      }, 5000)
    }
  }

  const Notification = ({ message }) => {
    if (message === null) {
      return null
    }
  
    return (
      <div className='success'>
        {message}
      </div>
    )
  }

  return (
    <div>
      <h1>Puhelinluettelo</h1>

      <Notification message={successMessage} />

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
      <Contacts
        persons={contactsToShow}
        deleteContact={deleteContact}
        />
    </div>
  )
}

export default App
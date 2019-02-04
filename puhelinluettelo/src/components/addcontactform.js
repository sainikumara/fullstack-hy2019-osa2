import React from 'react';

const AddContactForm = (props) => {
  return (
    <div>
      <form onSubmit={props.addPerson}>
        <div>
          nimi: <input 
                    value={props.newName}
                    onChange={props.handleNewName} />
        </div>
        <div>numero: <input
                      value={props.newNumber}
                      onChange={props.handleNewNumber}/>
        </div>
        <div>
          <button type='submit'>Lisää kontakteihin</button>
        </div>
      </form>
    </div>
  )
}

export default AddContactForm;
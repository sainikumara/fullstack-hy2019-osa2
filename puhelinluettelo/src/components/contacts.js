import React from "react";

const Contacts = ( {persons, deleteContact} ) => {
  return (
    <table>
      <tbody>
        {persons.map(person => <Contact key={person.id} person={person} deleteContact={deleteContact} />)}
      </tbody>
    </table>
  );
}
  
const Contact = ( {person, deleteContact} ) => {
  return (
    <tr>
      <td>{person.name}</td>
      <td>{person.number}</td>
      <td><button onClick={() => {deleteContact(person.id)}}>poista</button></td>
    </tr>
  )
}

export default Contacts;
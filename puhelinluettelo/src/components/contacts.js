import React from "react";

const Contacts = ( {persons} ) => {
  return (
    <div>
      {persons.map(person => <Contact key={person.name} person={person} />)}
    </div>
  );
}
  
const Contact = ( {person} ) => {
  return (
    <div>
      {person.name} {person.number}
    </div>
  )
}

export default Contacts;
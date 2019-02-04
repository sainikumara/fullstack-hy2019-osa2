import React from 'react';

const Filter = (props) => {
  return (
    <div>
      Rajaa näytettäviä: <input
      value={props.searchContact}
      onChange={props.handleContactSearch}></input>
    </div>
  )
}

export default Filter;
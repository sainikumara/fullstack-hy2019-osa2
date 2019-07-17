import React from 'react';

const Filter = (props) => {
  return (
    <div>
      Find countries: <input
      value={props.searchCountry}
      onChange={props.handleCountrySearch}></input>
    </div>
  )
}

export default Filter;
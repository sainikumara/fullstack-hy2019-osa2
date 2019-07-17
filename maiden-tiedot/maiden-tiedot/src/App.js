import React, { useState, useEffect } from 'react';
import Filter from './components/filter';
import CountryList from './components/countryList';
import countryService from './services/countries';

const App = () => {
  const [ countries, setCountries ] = useState([])
  const [ searchCountry, setSearchCountry ] = useState('')

  const hookForGettingCountries = () => {
    countryService
    .getAll()
    .then(countryData => setCountries(countryData))
  }

  useEffect(hookForGettingCountries, [])

  const handleCountrySearch = (event) => {
    setSearchCountry(event.target.value)
  }

  const countriesToShow = searchCountry === ''
    ? countries
    : countries.filter(country => country.name.toUpperCase().includes(searchCountry.toUpperCase()))

  return (
    <div>
      <Filter
        searchCountry={searchCountry}
        handleCountrySearch={handleCountrySearch}/>

      <CountryList
        countries={countriesToShow}
        />
    </div>
  )
}

export default App
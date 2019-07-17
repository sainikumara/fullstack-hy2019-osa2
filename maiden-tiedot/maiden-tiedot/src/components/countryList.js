import React from "react";

const CountryList = ( {countries} ) => {
  if (countries.length === 1) {
    return (
      <div>
        {<CountryDetails country={countries[0]} />}
      </div>
    )
  }

  if (countries.length === 0 || countries.length >= 10) {
    return (
      <div>
        <p>Too many matches, specify another filter</p>
      </div>
    )
  }

  return (
    <table>
      <tbody>
        {countries.map(country => <CountryToList country={country} />)}
      </tbody>
    </table>
  );
}

const CountryDetails = ( {country} ) => {
  return (
    <div>
      <h1>{country.name}</h1>
      <p>capital: {country.capital}</p>
      <p>population: {country.population}</p>
      <h2>Languages</h2>
      <Languages languages = {country.languages}/>
      <img src={country.flag} alt='Flag' width='200'></img>
    </div>
  )
}

const Languages = ( {languages} ) => {
  return (
    <div>
      <ul>
        {languages.map(language => <Language language={language.name} />)}
      </ul>
    </div>
  )
}

const Language = ( {language} ) => {
  return (
    <li>{language}</li>
  )
}
  
const CountryToList = ( {country} ) => {
  return (
    <tr>
      <td>{country.name}</td>
    </tr>
  )
}

export default CountryList;
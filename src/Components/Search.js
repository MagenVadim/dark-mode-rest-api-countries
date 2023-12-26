import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

function Search({darkMode, countriesInputRef, regionRef, setCountries, fetchData, selectRegion}) {

  const searchCountries = ()=>{
    const searchValue = countriesInputRef.current.value;
    if (searchValue.trim()){
      const fetchSearch = async ()=>{
        const response = await fetch(`https://restcountries.com/v2/name/${searchValue}`)
        const data = await response.json()
        setCountries(data)        
      }
      try{
        fetchSearch()
      } catch (error){
        console.log(error)
      }
    } else {
      fetchData()
    }
  }

  return (
    <div className="inputs">

      <div className={`search_input ${darkMode ? 'darkMode' :  ''}`}>
        <SearchIcon/>
        <input type="text" placeholder='Search for a country...' ref={countriesInputRef} onChange={searchCountries}/>
      </div>
      
      <div className={`select_region ${darkMode ? 'darkMode' :  ''}`}>
        <select ref={regionRef} onChange={selectRegion}>
            <option>Filter by Region</option>
            <option>Africa</option>
            <option>Americas</option>
            <option>Asia</option>
            <option>Europe</option>
            <option>Oceania</option>
        </select>
      </div>

    </div>
  )
}

export default Search

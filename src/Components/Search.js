import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

function Search({darkMode}) {
  return (
    <div className="inputs">

      <div className={`search_input ${darkMode ? 'darkMode' :  ''}`}>
        <SearchIcon/>
        <input type="text" placeholder='Search for a country...'/>
      </div>
      
      <div className={`select_region ${darkMode ? 'darkMode' :  ''}`}>
        <select>
            <option>Filter by Region</option>
            <option>Africa</option>
            <option>America</option>
            <option>Asia</option>
            <option>Europe</option>
            <option>Oceania</option>
        </select>
      </div>

    </div>
  )
}

export default Search

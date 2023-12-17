import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

function Search() {
  return (
    <div className="inputs">

      <div className="search_input">
        <SearchIcon/>
        <input type="text" placeholder='Search for a country...'/>
      </div>

      <div className="select_region">
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

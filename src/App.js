import './App.css';
import Header from './Components/Header'
import Search from './Components/Search'
import Country from './Components/Country'
import CountryDetails from './Components/CountryDetails'

import {Routes, Route} from 'react-router-dom';

import {useState, useEffect, useRef} from "react"



function App() {

  const[darkMode, setDarkMode] = useState(false);
  const[countries, setCountries] = useState([]);
  const countriesInputRef = useRef();
  const regionRef = useRef();



  const switchMode = ()=>{
    setDarkMode(prevState => !prevState)
  }
  
  useEffect(()=>{
    try{
      fetchData()
    } catch(error){
      console.log(error)
    }    
  })
  
  const fetchData = async()=>{
    const response = await fetch("https://restcountries.com/v2/all");
    const data = await response.json();
    setCountries(data);    
  }



  return (
    <div className={`app ${darkMode ? 'darkMode' :  ''}`}>

      <Header onClick={switchMode} darkMode={darkMode}/>
      
      <Routes>
        <Route path='/' element={
          <>
            <div className="app_body">
              <Search darkMode={darkMode} countriesInputRef={countriesInputRef} regionRef={regionRef}/>
            </div>
      
            <div className="countries">
              {
              countries.map(country => (
                <Country darkMode={darkMode}
                 key={country.alpha3Code}
                 code={country.alpha3Code}
                 name={country.name}
                 capital={country.capital}
                 population={country.population}
                 region={country.region}
                 flag={country.flag}
                 />
              ))
              }
            </div>
          </>
        }/>
        <Route path='country-details' element={<CountryDetails darkMode={darkMode}/>}/>        
      </Routes>
      
    </div>

  );
}

export default App;

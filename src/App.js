import './App.css';
import Header from './Components/Header'
import Search from './Components/Search'
import Country from './Components/Country'
import CountryDetails from './Components/CountryDetails'
import { useNavigate } from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';

import {useState, useEffect, useRef} from "react"



function App() {

  const[darkMode, setDarkMode] = useState(false);
  const[countries, setCountries] = useState([]);
  const countriesInputRef = useRef();
  const regionRef = useRef();
  const navigate = useNavigate();

  const noCountries = countries.status || countries.message;


  const switchMode = ()=>{
    setDarkMode(prevState => !prevState)
  }
  
  useEffect(()=>{
    try{
      fetchData()
    } catch(error){
      console.log(error)
    }    
  }, [])
  
  const fetchData = async()=>{
    const response = await fetch("https://restcountries.com/v2/all");
    const data = await response.json();
    if (data.status === 404){
      setCountries([]);
      return;
    }
    setCountries(data);    
  }

  const selectRegion = () =>{
    const selectValue = regionRef.current.value;
    if(selectValue.trim()){
      const fetchSelect = async () =>{
        const response = await fetch (`https://restcountries.com/v2/region/${selectValue}`)
        const data = await response.json();
        if (selectValue==="Filter by Region"){
          try{
            fetchData()
          } catch (error){
            console.log(error)
          }
          return;
        }
        setCountries(data)
        
      }
      try{
        fetchSelect();
      } catch(error){
        console.log(error)
      }
    }
  }

const showDetails = (code)=>{
  navigate(`/${code}`);
}

  return (
    <div className={`app ${darkMode ? 'darkMode' :  ''}`}>

      <Header onClick={switchMode} darkMode={darkMode}/>
      
      <Routes>
        <Route path='/' element={
          <>
            <div className="app_body">
              <Search darkMode={darkMode} countriesInputRef={countriesInputRef} regionRef={regionRef}
               setCountries={setCountries} fetchData={fetchData} selectRegion={selectRegion}/>
            </div>
      
            <div className="countries">
              { !noCountries ? (
                  countries.map(country => (
                    <Country darkMode={darkMode}
                    key={country.alpha3Code}
                    code={country.alpha3Code}
                    name={country.name}
                    capital={country.capital}
                    population={country.population}
                    region={country.region}
                    flag={country.flag}
                    showDetails={showDetails}
                    />
                  ))
              ) : (
                <p>No Countries found...</p>
              )
              
              }
            </div>
          </>
        }/>
        <Route path='/:countryCode' element={<CountryDetails darkMode={darkMode} countries={countries}/>}/>        
      </Routes>
      
    </div>

  );
}

export default App;

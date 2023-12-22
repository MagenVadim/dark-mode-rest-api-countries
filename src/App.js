import './App.css';
import Header from './Components/Header'
import Search from './Components/Search'
import Country from './Components/Country'
import CountryDetails from './Components/CountryDetails'
import {Routes, Route} from 'react-router-dom';

import {useState, useEffect} from "react"



function App() {

  const[darkMode, setDarkMode] = useState(false)
  const switchMode = ()=>{
    setDarkMode(prevState => !prevState)
  }
  

  return (
    <div className={`app ${darkMode ? 'darkMode' :  ''}`}>

      <Header onClick={switchMode} darkMode={darkMode}/>
      
      <Routes>
        <Route path='' element={
          <>
            <div className="app_body">
              <Search darkMode={darkMode}/>
            </div>
      
            <div className="countries">
              <Country darkMode={darkMode}/>
            </div>
          </>
        }/>
      </Routes>

      <Routes>
        <Route path='country-details' element={<CountryDetails darkMode={darkMode}/>}/>
      </Routes>
      
    </div>

  );
}

export default App;

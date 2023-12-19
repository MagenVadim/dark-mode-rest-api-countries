import './App.css';
import Header from './Components/Header'
import Search from './Components/Search'
import Country from './Components/Country'
import CountryDetails from './Components/CountryDetails'
import {Routes, Route} from 'react-router-dom';

function App() {
  return (

    <div className="app">

      <Header/>
      
      <Routes>
        <Route path='' element={
          <>
            <div className="app_body">
              <Search/>
            </div>
      
            <div className="countries">
              <Country/>
            </div>
          </>
        }/>
      </Routes>

      <Routes>
        <Route path='country-details' element={<CountryDetails/>}/>
      </Routes>
      
    </div>

  );
}

export default App;

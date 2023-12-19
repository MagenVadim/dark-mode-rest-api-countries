import './App.css';
import Header from './Components/Header'
import Search from './Components/Search'
import Country from './Components/Country'

function App() {
  return (

    <div className="app">

      <Header/>

      <div className="app_body">
        <Search/>
      </div>

      <Country/>
      
    </div>

  );
}

export default App;

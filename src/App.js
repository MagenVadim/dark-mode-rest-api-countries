import './App.css';
import Header from './Components/Header'
import Search from './Components/Search'


function App() {
  return (
    <div className="App">
      <Header/>
      <div className="app_body">
        <Search/>
      </div>
      
    </div>
  );
}

export default App;

import { useState } from 'react';
import SearchLocation from './components/SearchLocation';
import LocationContainer from './components/LocationContainer';
import { getNumberRandom } from './helpers/getNumberRandom';


import './App.css';

const App =() => {

  const [location, setLocation] = useState(getNumberRandom());

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <SearchLocation setLocation={setLocation}/>

        <LocationContainer location={location} />
      </header>
    </div>
  );
}

export default App;

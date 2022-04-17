import { useState } from 'react';
import SearchLocation from './components/SearchLocation';
import LocationContainer from './components/LocationContainer';
import { getNumberRandom } from './helpers/getNumberRandom';
import './styles/styles.css'
import fondo from './img/rickandmorty.jpg'

const App = () => {

  const [location, setLocation] = useState(getNumberRandom());

  return (
    <div className='app'>
      <header className='head'>

        <img className='img' alt='imgfondo' src={fondo}></img>
        <div className='search'>
          <SearchLocation setLocation={setLocation} />
        </div>
      </header>
      <div>
        <LocationContainer location={location} setLocation={setLocation} />
      </div>
    </div>
  );
}

export default App;

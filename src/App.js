import React, { useState } from 'react';
import './App.css';

import Home from './components/Home.jsx';
import AvengersList from './components/AvengersList.jsx';
import AvengerPage from './components/AvengerPage.jsx';

import { Route, Link} from 'react-router-dom'

import avengers from './Data';



function App() {
  const [avengers, setAvengers] = useState([])

  return (
    <div className='App'>
      <ul className='navbar'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/avengers'>Avengers</Link>
        </li>
      </ul>
      <Route exact path='/' component={Home} />
      <Route exact path='/avengers' component={AvengersList}  />
      {/* Add dynamic route https://youtu.be/hoaxvh0Azic?t=600 */}
      <Route path='/avengers/:id' component={AvengerPage} />
    </div>
  );
}

export default App;

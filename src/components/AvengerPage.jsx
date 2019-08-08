import React from 'react';
// import avengers from '../Data.js';
import { Route, Link } from 'react-router-dom';



const AvengerPage = (props) => {
    console.log(props)
    const id = props.match.params.id; // to match url
    const avenger = props.avengers.find(avenger => `${avenger.id}` === id);
  
  return (
      <div>
      <img className='character-image' src={avenger.img} alt={avenger.name} /> 
      <div className='character-info-wrapper'>
        <h1>{avenger.name}</h1>
        <h4>({avenger.nickname})</h4>
        {/* <p>{avenger.description}</p> */}
      </div> 

      <Link to={`/avengers/${props.match.params.id}/details`}>Avenger Details</Link>
      <Link to={`/avengers/${props.match.params.id}/movies`}>Movies</Link>

      {/* Nested Routes */}
      <Route path="/avengers/:id/details" render={props => <p>{avenger.description}</p>}/>
      <Route path="/avengers/:id/movies" render={props => <div>Movies List</div>} />

    </div>
  );
}

export default AvengerPage;
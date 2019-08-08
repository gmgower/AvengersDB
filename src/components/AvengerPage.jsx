import React from 'react';
import avengers from '../Data.js';



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
        <p>{avenger.description}</p>
      </div> 
    </div>
  );
}

export default AvengerPage;
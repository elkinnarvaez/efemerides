import React, { useState } from 'react';
import { searchPlanets } from '../../api';

function Homepage() {
  const [planetName, setPlanetName] = useState('');
  const onClickGetPlanet = async () => {
    const name = 'venus';
    const planet = await searchPlanets({ name });
    setPlanetName(planet.planetName);
  };
  return (
    <div>
      <p>Test homepage!</p>
      <p>Data retreived from API call:</p>
      <input
        type="submit"
        onClick={onClickGetPlanet}
        value="Get planet"
      ></input>
      <p>{planetName}</p>
    </div>
  );
}

export default Homepage;

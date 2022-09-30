import React, { useState } from 'react';
import { searchPlanets } from '../../api';

function Homepage() {
  const [planetName, setPlanetName] = useState('');
  const onClickGetPlanet = async () => {
    const name = 'venus';
    const planet = await searchPlanets({ name });
    setPlanetName(planet.planetName);
  };
  return <div class="">Efemérides Astrónomicas</div>;
}

export default Homepage;

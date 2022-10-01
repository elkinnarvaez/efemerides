import React, { useState } from 'react';
import { fetchAllOrbitalElements } from '../../api';

function OrbitalElements() {
  const [orbitalElementsList, setOrbitalElementsList] = useState([]);

  const onLoadPage = async () => {
    const json = await fetchAllOrbitalElements();
    setOrbitalElementsList(json.orbitalElements);
    console.log(orbitalElementsList);
  };
  onLoadPage();

  return (
    <div className="orbital-elements">
      <h1 className="main-header">Parámetros Orbitales</h1>
      {orbitalElementsList.forEach((orbitalElement) => {
        <div>
          <p>orbitalElement.planetName</p>
          <p>orbitalElement.altidud</p>
        </div>;
      })}
    </div>
  );
}

export default OrbitalElements;

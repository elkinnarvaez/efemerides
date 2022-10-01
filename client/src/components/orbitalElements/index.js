import React, { useState } from 'react';
import { fetchAllOrbitalElements } from '../../api';

function OrbitalElements() {
  const [orbitalElementsList, setOrbitalElementsList] = useState([]);

  const onGetAllOrbitalElements = async () => {
    const json = await fetchAllOrbitalElements();
    setOrbitalElementsList(json.orbitalElements);
  };

  onGetAllOrbitalElements();

  return (
    <div className="orbital-elements">
      <h1 className="main-header">Parámetros Orbitales</h1>
      {orbitalElementsList.map((orbitalElement) => {
        const { planetName, altitud } = orbitalElement;
        return (
          <div>
            <p>{planetName}</p>
            <p>{altitud}</p>
          </div>
        );
      })}
    </div>
  );
}

export default OrbitalElements;

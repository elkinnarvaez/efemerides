import React, { useState } from 'react';
import { fetchAllOrbitalElements } from '../../api';

function OrbitalElements() {
  const [orbitalElementsList, setOrbitalElementsList] = useState([]);

  const onPageRenderAsync = async () => {
    try {
      setOrbitalElementsList(await fetchAllOrbitalElements());
    } catch (err) {
      console.log(err);
    }
  };

  onPageRenderAsync();

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

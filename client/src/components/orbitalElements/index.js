import React, { useState } from 'react';
import { fetchAllOrbitalElements } from '../../api';

function OrbitalElements() {
  const [orbitalElementsList, setOrbitalElementsList] = useState([]);
  const [firstPageLoad, setFirstPageLoad] = useState(true);

  const onPageLoadAsync = async () => {
    try {
      if (firstPageLoad) {
        setOrbitalElementsList(await fetchAllOrbitalElements());
        setFirstPageLoad(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  onPageLoadAsync();

  return (
    <div className="orbital-elements">
      <h1 className="main-header">Parámetros Orbitales</h1>
      {orbitalElementsList.map((orbitalElement) => {
        const {
          planetname,
          meandistancetosun,
          eccentricity,
          inclination,
          ascendingnodelongitude,
          perihelionargument,
          perihelionpassingrime,
        } = orbitalElement;
        return (
          <div key={planetname}>
            <p>{planetname}</p>
            <p>{meandistancetosun}</p>
            <p>{eccentricity}</p>
            <p>{inclination}</p>
            <p>{ascendingnodelongitude}</p>
            <p>{perihelionargument}</p>
            <p>{perihelionpassingrime}</p>
          </div>
        );
      })}
    </div>
  );
}

export default OrbitalElements;

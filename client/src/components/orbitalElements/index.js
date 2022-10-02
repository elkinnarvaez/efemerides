import React, { useState } from 'react';
import OrbitalElementsTable from '../orbitalElementsTable';
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
      <OrbitalElementsTable orbitalElementsList={orbitalElementsList} />
    </div>
  );
}

export default OrbitalElements;

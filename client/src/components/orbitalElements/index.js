import React, { useState } from 'react';
import Button from '@mui/material/Button';
import OrbitalElementsTable from '../orbitalElementsTable';
import AddRecordModal from '../addRecordModal';
import { fetchAllOrbitalElements } from '../../api';

function OrbitalElements() {
  const [orbitalElementsList, setOrbitalElementsList] = useState([]);
  const [loadPage, setLoadPage] = useState(true);
  const [loadPageTrialCount, setLoadPageTrialCount] = useState(0);
  const [showAddRecordModal, setShowAddRecordModal] = useState(false);

  const pageLoadAsync = async () => {
    try {
      if (loadPage) {
        setOrbitalElementsList(await fetchAllOrbitalElements());
        setLoadPage(false);
        setLoadPageTrialCount(0);
      }
    } catch (err) {
      if (loadPageTrialCount > 7) {
        setLoadPage(false);
        setLoadPageTrialCount(0);
      }
      setLoadPageTrialCount(loadPageTrialCount + 1);
      console.log(err);
    }
  };

  const onClickAddRecordModal = async () => {
    setShowAddRecordModal(true);
  };

  pageLoadAsync();

  return (
    <div className="orbital-elements">
      <h1 className="main-header">Parámetros Orbitales</h1>

      <OrbitalElementsTable orbitalElementsList={orbitalElementsList} />

      <div className="add-record-modal-button">
        <Button variant="contained" onClick={onClickAddRecordModal}>
          Agregar registro
        </Button>
      </div>

      <AddRecordModal
        showAddRecordModal={showAddRecordModal}
        setShowAddRecordModal={setShowAddRecordModal}
        setLoadPage={setLoadPage}
      />
    </div>
  );
}

export default OrbitalElements;

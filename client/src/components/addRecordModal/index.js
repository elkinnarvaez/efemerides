import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { createNewRecord } from '../../api';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function AddRecordModal({
  showAddRecordModal,
  setShowAddRecordModal,
  setLoadPage,
}) {
  const [snackbar, setSnackbar] = React.useState(null);

  const handleCloseSnackbar = () => setSnackbar(null);

  const [planetName, setPlanetName] = useState('');
  const [meanDistanceToSun, setMeanDistanceToSun] = useState(null);
  const [eccentricity, setEccentricity] = useState(null);
  const [inclination, setInclination] = useState(null);
  const [ascendingNodeLongitude, setAscendingNodeLongitude] = useState(null);
  const [perihelionArgument, setPerihelionArgument] = useState(null);
  const [perihelionPassingTime, setPerihelionPassingTime] = useState(null);

  const onPlanetNameChange = (event) => setPlanetName(event.target.value);
  const onMeanDistanceToSunChange = (event) =>
    setMeanDistanceToSun(event.target.value);
  const onEccentricityChange = (event) => setEccentricity(event.target.value);
  const onInclinationChange = (event) => setInclination(event.target.value);
  const onAscendingNodeLongitudeChange = (event) =>
    setAscendingNodeLongitude(event.target.value);
  const onPerihelionArgumentChange = (event) =>
    setPerihelionArgument(event.target.value);
  const onPerihelionPassingTimeChange = (event) =>
    setPerihelionPassingTime(event.target.value);

  const onClickAddRecord = async () => {
    try {
      if (planetName?.trim() === '') {
        throw new Error('El campo de planeta no puede estar vacío');
      }
      await createNewRecord({
        planetName,
        meanDistanceToSun,
        eccentricity,
        inclination,
        ascendingNodeLongitude,
        perihelionArgument,
        perihelionPassingTime,
      });
      setSnackbar({
        children: 'Registro creado satisfactoriamente',
        severity: 'success',
      });
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setShowAddRecordModal(false);
      setLoadPage(true);
    } catch (err) {
      setSnackbar({ children: err.message, severity: 'error' });
    }
  };

  const handleClose = () => setShowAddRecordModal(false);

  return (
    <div>
      <Modal
        open={showAddRecordModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Agregar nuevo registro
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className="add-record-form">
              <FormControl>
                <InputLabel htmlFor="planet-input" variant="standard">
                  Planeta
                </InputLabel>
                <Input
                  id="planet-input"
                  type="text"
                  onChange={onPlanetNameChange}
                />
              </FormControl>
              <FormControl>
                <InputLabel
                  htmlFor="mean-distance-to-sun-input"
                  variant="standard"
                >
                  Distancia media al sol
                </InputLabel>
                <Input
                  id="mean-distance-to-sun-input"
                  type="number"
                  onChange={onMeanDistanceToSunChange}
                />
              </FormControl>
              <FormControl>
                <InputLabel htmlFor="eccentricity-input" variant="standard">
                  Excentricidad
                </InputLabel>
                <Input
                  id="eccentricity-input"
                  type="number"
                  onChange={onEccentricityChange}
                />
              </FormControl>
              <FormControl>
                <InputLabel htmlFor="inclination-input" variant="standard">
                  Inclinación
                </InputLabel>
                <Input
                  id="inclination-input"
                  type="number"
                  onChange={onInclinationChange}
                />
              </FormControl>
              <FormControl>
                <InputLabel
                  htmlFor="ascending-node-longitude-input"
                  variant="standard"
                >
                  Longitud del nodo ascendente
                </InputLabel>
                <Input
                  id="ascending-node-longitude-input"
                  type="number"
                  onChange={onAscendingNodeLongitudeChange}
                />
              </FormControl>
              <FormControl>
                <InputLabel
                  htmlFor="perihelion-argument-input"
                  variant="standard"
                >
                  Argumento del perihelio
                </InputLabel>
                <Input
                  id="perihelion-argument-input"
                  type="number"
                  onChange={onPerihelionArgumentChange}
                />
              </FormControl>
              <FormControl>
                <InputLabel
                  htmlFor="perihelion-passing-time-input"
                  variant="standard"
                >
                  Tiempo de paso por el perihelio
                </InputLabel>
                <Input
                  id="perihelion-passing-time-input"
                  type="number"
                  onChange={onPerihelionPassingTimeChange}
                />
              </FormControl>
            </div>
            <div className="add-record-button">
              <FormControl>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={onClickAddRecord}
                >
                  Agregar
                </Button>
              </FormControl>
            </div>
          </Typography>
        </Box>
      </Modal>
      {!!snackbar && (
        <Snackbar
          open
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          onClose={handleCloseSnackbar}
          autoHideDuration={6000}
        >
          <Alert {...snackbar} onClose={handleCloseSnackbar} />
        </Snackbar>
      )}
    </div>
  );
}

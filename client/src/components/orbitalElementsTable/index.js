import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { updateOrbitalElement } from '../../api';

const formatOrbitalElementValue = (params) => {
  if (params.value == null) {
    return '';
  } else {
    return params.value.toFixed(3);
  }
};

const useUpdateValidation = () => {
  return React.useCallback((row) => {
    return new Promise((resolve, reject) =>
      setTimeout(() => {
        if (row.planetName?.trim() === '') {
          return reject(new Error('El campo de planeta no puede estar vacío'));
        } else {
          return resolve(true);
        }
      }, 200)
    );
  }, []);
};

const columns = [
  {
    field: 'planetName',
    headerName: 'Planeta',
    width: 125,
    align: 'left',
    headerAlign: 'left',
    editable: true,
  },
  {
    field: 'meanDistanceToSun',
    headerName: 'Distancia media al sol',
    type: 'number',
    width: 160,
    align: 'left',
    headerAlign: 'left',
    editable: true,
    valueFormatter: formatOrbitalElementValue,
  },
  {
    field: 'eccentricity',
    headerName: 'Excentricidad',
    type: 'number',
    width: 130,
    editable: true,
    align: 'left',
    headerAlign: 'left',
    valueFormatter: formatOrbitalElementValue,
  },
  {
    field: 'inclination',
    headerName: 'Inclinación',
    type: 'number',
    width: 120,
    editable: true,
    align: 'left',
    headerAlign: 'left',
    valueFormatter: formatOrbitalElementValue,
  },
  {
    field: 'ascendingNodeLongitude',
    headerName: 'Longitud del nodo ascendente',
    type: 'number',
    width: 180,
    editable: true,
    align: 'left',
    headerAlign: 'left',
    valueFormatter: formatOrbitalElementValue,
  },
  {
    field: 'perihelionArgument',
    headerName: 'Argumento del perihelio',
    type: 'number',
    width: 160,
    editable: true,
    align: 'left',
    headerAlign: 'left',
    valueFormatter: formatOrbitalElementValue,
  },
  {
    field: 'perihelionPassingTime',
    headerName: 'Tiempo de paso por el perihelio',
    type: 'number',
    width: 220,
    editable: true,
    align: 'left',
    headerAlign: 'left',
    valueFormatter: formatOrbitalElementValue,
  },
];

export default function OrbitalElementsTable({ orbitalElementsList }) {
  const validateRowUpdate = useUpdateValidation();

  const [snackbar, setSnackbar] = React.useState(null);

  const handleCloseSnackbar = () => setSnackbar(null);

  const processRowUpdate = React.useCallback(
    async (newRow, oldRow) => {
      await validateRowUpdate(newRow);
      await updateOrbitalElement({
        row: newRow,
        oldPlanetName: oldRow.planetName,
      });
      setSnackbar({
        children: 'Campo actualizado satisfactoriamente',
        severity: 'success',
      });
      return newRow;
    },
    [validateRowUpdate]
  );

  const handleProcessRowUpdateError = React.useCallback((error) => {
    setSnackbar({ children: error.message, severity: 'error' });
  }, []);

  return (
    <div style={{ height: 300, width: '90%', margin: 'auto' }}>
      <DataGrid
        experimentalFeatures={{ newEditingApi: true }}
        rows={orbitalElementsList}
        columns={columns}
        processRowUpdate={processRowUpdate}
        onProcessRowUpdateError={handleProcessRowUpdateError}
      />
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

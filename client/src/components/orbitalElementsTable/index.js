import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const columns = [
  {
    field: 'planetname',
    headerName: 'Planeta',
    width: 80,
    align: 'left',
    headerAlign: 'left',
    editable: true,
  },
  {
    field: 'meandistancetosun',
    headerName: 'Distancia media al sol',
    type: 'number',
    width: 160,
    align: 'left',
    headerAlign: 'left',
    editable: true,
  },
  {
    field: 'eccentricity',
    headerName: 'Excentricidad',
    type: 'number',
    width: 160,
    editable: true,
    align: 'left',
    headerAlign: 'left',
  },
  {
    field: 'inclination',
    headerName: 'Inclinación',
    type: 'number',
    width: 160,
    editable: true,
    align: 'left',
    headerAlign: 'left',
  },
  {
    field: 'ascendingnodelongitude',
    headerName: 'Longitud del nodo ascendente',
    type: 'number',
    width: 160,
    editable: true,
    align: 'left',
    headerAlign: 'left',
  },
  {
    field: 'perihelionargument',
    headerName: 'Argumento del perihelio',
    type: 'number',
    width: 160,
    editable: true,
    align: 'left',
    headerAlign: 'left',
  },
  {
    field: 'perihelionpassingtime',
    headerName: 'Tiempo de paso por el perihelio',
    type: 'number',
    width: 190,
    editable: true,
    align: 'left',
    headerAlign: 'left',
  },
];

export default function OrbitalElementsTable({ orbitalElementsList }) {
  const [snackbar, setSnackbar] = React.useState(null);

  const handleCloseSnackbar = () => setSnackbar(null);

  const processRowUpdate = async (newRow) => {
    console.log(newRow);
    return newRow;
  };

  const handleProcessRowUpdateError = React.useCallback((error) => {
    setSnackbar({ children: error.message, severity: 'error' });
  }, []);

  return (
    <div style={{ height: 300, width: '85%', margin: 'auto' }}>
      <DataGrid
        experimentalFeatures={{ newEditingApi: true }}
        getRowId={(row) => row.planetname}
        rows={orbitalElementsList}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
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

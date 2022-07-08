import React from 'react';
import logo from './logo.svg';
import './App.css';
import { DataGridPro, GridRowsProp, GridColDef } from '@mui/x-data-grid-pro';

const rows: GridRowsProp = [
  { id: 1, col1: 'Hello', col2: 'World' },
  { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
  { id: 3, col1: 'MUI', col2: 'is Amazing' },
];

const columns: GridColDef[] = [
  { field: 'col1', headerName: 'Column 1', width: 150 },
  { field: 'col2', headerName: 'Column 2', width: 150 },
];

function App() {
  return (
    <div style={{ height: 300, width: '100%' }}>
      <DataGridPro rows={rows} columns={columns} />
    </div>
  );
}

export default App;

// npm install @mui/x-data-grid
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { useState } from 'react';

const rows: GridRowsProp = [
  { id: '91shoux24tNKPc8J0g1g-8t232demZ9U33oxI5aQykI', make: 'Honda', model: 'Civic', year: '2020', color: 'Blue' },
  { id: 2, make: 'DataGridPro', model: 'is Awesome' },
  { id: 3, make: 'MUI', model: 'is Amazing' },
];

// Comparable to rows, columns are objects defined with a set of attributes of the GridColDef interface. They are mapped to the rows through their field property.
const columns: GridColDef[] = [
  { field: "id", width: 30, hide: true },
  { field: 'make', headerName: 'Make', width: 150 },
  { field: 'model', headerName: 'Model', width: 150 },
  { field: 'year', headerName: 'Year', width: 100 },
  { field: 'color', headerName: 'Color', width: 50 },
]


export default function DataTable() {


  return (

    <div style={{ height: 400, width: '100%' }}
    // className={open ? "hidden" : "containerflex flex-col"} 
    >
      <DataGrid 
      rows={rows} 
      columns={columns} 
      checkboxSelection={true}
      />
    </div>

  );
}
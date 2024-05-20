import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const rows = [
  { id: 1, col1: 'Some data', col2: 'More data' },
  { id: 2, col1: 'Whatever', col2: 'XYZ' },
  { id: 3, col1: 'MUI', col2: 'another column' },
];

const columns = [
  { field: 'col1', headerName: 'Column 1', width: 250 },
  { field: 'col2', headerName: 'Column 2', width: 250 },
];

export default function Grid() {
  return (
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}

import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';


export default function MUITable({rows,columns}) {
  return (
    <div style={{ height: 500, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 7,
            },
          },
        }}
        pageSizeOptions={[5,10,20]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </div>
  );
}

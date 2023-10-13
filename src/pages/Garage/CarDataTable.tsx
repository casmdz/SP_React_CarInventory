import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useState } from 'react';

// import CarModal from './CarModal';
// import GaragePage from './garagepage';
// import { server_calls } from '../../data/api/server';

import { useGetData } from '../../hooks/FetchData';
import CarModal from './CarModal';



const columns: GridColDef[] = [
  { field: 'make', headerName: 'Make', width: 150 },
  { field: 'model', headerName: 'Model', width: 200 },
  { field: 'year', headerName: 'Year', width: 150 },
  { field: 'color', headerName: 'Color', width: 150 },
  { field: 'id', headerName: 'ID', width: 600 },
]

// const columns: GridColDef[] = [
//   { field: 'id', headerName: 'ID', flex:.5 },
//   { field: 'make', headerName: 'Make', flex: 1 },
//   { field: 'model', headerName: 'Model', flex: 2},
//   { field: 'year', headerName: 'Year', flex:1  },
//   { field: 'color', headerName: 'Color', flex: 1 },
// ]



// interface CarDataTableProps {
//   setSelectedCarId: (carId: string | null) => void; // callback to set the selected car's ID
// }


export default function CarDataTable() {

  let [open, setOpen] = useState(false);
  // const handleOpen = () => {
  //   setOpen(true)
  // }
  const handleClose = () => {
    setOpen(false)
  }
  // https://mui.com/x/react-data-grid/row-selection/#controlled-row-selection


  const { carData, getData } = useGetData(); // hook 
  // TODO  write useGetData hook and selection model state change 
  // click the checkmark and get the ID 
  // DataGrid MUI Selection 
  const [ selectionModel, setSelectionModel ] = useState<string[]>([]) // store 
  // onclick handle open for Update button, but update function HAS ID held in this func 


  return (
    <>
    <CarModal id={selectionModel} open={open} onClose={handleClose} />
      <div>
        <div className="container bg-slate-300 flex flex-col">
          <h2 className="p-3 my-2 rounded">My cars</h2>
        </div>

        <div style={{ height: 400, width: "100%" }}>
          <DataGrid 
            rows={carData} 
            columns={columns} 
            checkboxSelection={true} 
            // onRowSelectionModelChange={ (item: any) => {
            //   setSelectionModel(item)
            // }}
            // id={selectionModel}

            onRowSelectionModelChange={(item: any) => {
              setSelectionModel(item); // Update the selected car IDs
            }}
            />

        </div>

      </div>
    </>
  );
}
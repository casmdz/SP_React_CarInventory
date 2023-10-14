import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useState } from 'react';
// import CarModal from './CarModal';
// import GaragePage from './garagepage';
// import { server_calls } from '../../data/api/server';
import { useGetData } from '../../hooks/FetchData';
import CarModal from './CarModal';
// import { setSelectedCar } from '../../redux/selectedCarSlice';
// import { useDispatch, useSelector } from 'react-redux';

const columns: GridColDef[] = [
  { field: 'make', headerName: 'Make', width: 150 },
  { field: 'model', headerName: 'Model', width: 200 },
  { field: 'year', headerName: 'Year', width: 150 },
  { field: 'color', headerName: 'Color', width: 150 },
  { field: 'id', headerName: 'ID', width: 600 },
]

interface CarDataTableProps {
  setRowSelectionModel?: (selectedItem: string[]) => void;
}


export default function CarDataTable( props: CarDataTableProps ) {

  let [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false)
  }
  const { carData, getData } = useGetData(); // hook 
  // TODO  write useGetData hook and selection model state change 

  const [ rowSelectionModel, setRowSelectionModel ] = useState<string[]>() // store 
  // onclick handle open for Update button, but update function HAS ID held in this func 

  // const dispatch = useDispatch();
  // const selectedCar = useSelector((state) => state.selectedCar);
  // const handleCarSelection = ( selectedCarId, selectedCarData ) => {
  //   dispatch(setSelectedCar({ id: selectedCarId, data: selectedCarData }));
  // }

  return (
    <>
    <CarModal id={rowSelectionModel} open={open} onClose={handleClose} />
      <div>
        <div className="container bg-sky-900 flex flex-col">
          <h2 className="p-3 my-2 rounded">My cars</h2>
        </div>

        <div style={{ height: 400, width: "100%" }}>
          <DataGrid 
            rows={carData} 
            columns={columns} 
            checkboxSelection={true} 
            
            rowSelectionModel={rowSelectionModel}  // passing the model
            onRowSelectionModelChange={(item: any) => {
              console.log('New rowSelectionModel ID grabbed:', item);
              setRowSelectionModel(item);
              console.log('CarDataTable re-rendered with rowSelectionModel:', rowSelectionModel);
              if (props.setRowSelectionModel) {
                props.setRowSelectionModel(item)
              }
            }}
            />

        </div>

      </div>
    </>
  );
}

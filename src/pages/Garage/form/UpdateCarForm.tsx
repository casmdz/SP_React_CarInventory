//official one okay
import { Box, Button, TextField } from "@mui/material"
import { useForm, Controller, SubmitHandler } from "react-hook-form"

import { server_calls } from "../../../data/api/server"
// import { useSelector } from "react-redux";
// import { useDispatch, useStore } from "react-redux"
// import { chooseMake, chooseModel, chooseColor, chooseYear } from "../../../redux/carSlice"


interface CarInputType {
make: string;
model: string;
carColor: string;
year: number; 
}

interface UpdateCarFormProps {
id?: string[];  // Help, i don't know 
// selectedCarId?: string; //TODO check those 
data?: {}; 
styles?: any;
onClose: () => void;
}


const UpdateCarForm = ( props: UpdateCarFormProps ) => {
  const { inputFields, buttons, input } = props.styles;

  // const dispatch = useDispatch();
  // const store = useStore();
  
  // const selectedCar = useSelector((state) => state.selectedCar);
  const { control, handleSubmit } = useForm<CarInputType>({
    // defaultValues: {
    //   make: data.make,
    //   model: data.model,
    //   year: data.year,
    //   carColor: data.color, 
    // }
    // defaultValues:{
    //   make: selectedCar.carData?.make ,
    //   model: selectedCar.carData?.model,
    //   carColor: selectedCar.carData?.color || '',
    //   year: selectedCar.carData?.year 
    // }
  });

  const onSubmitHandler: SubmitHandler<CarInputType> = (data: any, event: any) => {
    console.log(`ID has been tickled: ${props.id}`);
    if (props.id && props.id.length === 1) {
      const selectedCarId = props.id[0];
      
      server_calls.update(selectedCarId, data);
      console.log(`Updated car with ID: ${selectedCarId} ${data}`);
      event.target.reset();
      props.onClose(); 
      // props.setRowSelectionModel([])
    } else {
      console.log('Error encountered in updatecarform')
      alert('Encountered an error');
    }
  }
  
  
  
  // TODO - add Handle Function with state management

  return (
<div>

<form
  onSubmit={() => {
    handleSubmit(onSubmitHandler);
    console.log('submitted');
  }}>

  <div style={inputFields}>

    <Controller
      name="make"
      control={control}
      defaultValue={""}      
      render={({ field }) => (
        <TextField {...field} label="Make" />
      )}
    />

    <Controller
      name="model"
      control={control}
      defaultValue={""}
      render={({ field }) => (
        <TextField {...field} label="Model" />
      )}
    />


    <Controller
      name="year"
      control={control}
      defaultValue={2023}
      render={({ field }) => (
        <TextField {...field}
          label="Year"
          type="number"
        />
      )}
    />

    <Controller
      name="carColor"
      control={control}
      defaultValue={''}
      render={({ field }) => (
        <TextField {...field} label="Color" />
      )}
    />

  </div>
  <br />

  <Box style={buttons}>
    <input style={input} type="submit" value="SUBMIT" />
    <Button variant="outlined" color="error" disableElevation onClick={() => props.onClose() }>Cancel</Button>
  </Box>

</form>
</div>

)
}

export default UpdateCarForm

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
color: string;
year: string; 
}

interface UpdateCarFormProps {
id?: string[]; 
data?: {}; 
styles?: any;
onClose: () => void;
}


const UpdateCarForm = ( props: UpdateCarFormProps ) => {
  const { inputFields, buttons, input } = props.styles;

  const { control, handleSubmit } = useForm<CarInputType>({});

  const onSubmitHandler: SubmitHandler<CarInputType> = (data: any, event: any) => {
    console.log(`ID has been tickled: ${props.id}`);
    if (props.id && props.id.length === 1) {
      const selectedCarId = props.id[0];
      
      server_calls.update(selectedCarId, data);
      console.log(`Updated car with ID: ${selectedCarId} ${data}`);
      event.target.reset();
      props.onClose();
      setTimeout( () => { window.location.reload() }, 2000 )
      // props.setRowSelectionModel([])
    } else {
      console.log('Error encountered in updatecarform')
      alert('Encountered an error');
    }
  }
  

  return (
<div>

<form onSubmit={handleSubmit(onSubmitHandler)}>

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
      defaultValue="2023"
      render={({ field }) => (
        <TextField {...field}
          label="Year"
          // type="number"
        />
      )}
    />

    <Controller
      name="color"
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

//official one okay

import { Box, Button, TextField } from "@mui/material"
// import { forwardRef } from 'react'
// import { styles } from "../../../components/ui/BasicModal";
import { useForm, Controller, SubmitHandler } from "react-hook-form"

import { server_calls } from "../../../data/api/server"
import { useDispatch, useStore } from "react-redux"
import { chooseMake, chooseModel, chooseColor, chooseYear } from "../../../redux/carSlice"


interface CarInputType {
make: string;
model: string;
carColor: string;
year: number; 
}

interface UpdateCarFormProps {
id?: string;  
data?: {}; 
styles?: any;
onClose: () => void;
}


const UpdateCarForm = ( props: UpdateCarFormProps ) => {
  const { inputFields, buttons, input } = props.styles;

  const dispatch = useDispatch();
  const store = useStore();

  const { control, handleSubmit, formState: { errors } } = useForm<CarInputType>();


  const onSubmitHandler: SubmitHandler<CarInputType> = (data: any, event: any) => {
    console.log(`ID has been tickled: ${props.id}`);
    if (props.id) {
      server_calls.update(props.id, data)
      console.log(`updated stuff: ${data} ${props.id} `)
    } else {
      // use dispatch to update our state in our store 
      // coming from inside the form
      dispatch(chooseMake(data.make));
      dispatch(chooseModel(data.model)); 
      dispatch(chooseYear(data.year)); 
      dispatch(chooseColor(data.carColor)); 

// TODO check if this is right 
      // server_calls.create(store.getState())
      // goes to the store and updates the store 
      server_calls.update(store.getState())
      setTimeout( () => { window.location.reload() }, 2000 );
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
      // defaultValue={"Honda"}
      render={({ field }) => (
        <TextField {...field} label="Make" />
      )}
    />

    <Controller
      name="model"
      control={control}
      render={({ field }) => (
        <TextField {...field} label="Model" />
      )}
    />


    <Controller
      name="year"
      control={control}
      defaultValue={1999}
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

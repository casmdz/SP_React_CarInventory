//official one okay
import { Box, Button, TextField } from "@mui/material"
// import { forwardRef } from 'react'
import { useForm, Controller, SubmitHandler } from "react-hook-form"

import { server_calls } from "../../../data/api/server"
import { useDispatch, useStore } from "react-redux"
// import carSlice from "../../../redux/carSlice"
import { chooseMake, chooseModel, chooseColor, chooseYear } from "../../../redux/carSlice"


interface CarInputType {
  make: string;
  model: string;
  carColor: string;
  year: number;
}


interface AddCarFormProps {
  id?: string[]; // added array 
  data?: {};
  styles?: any;
  onClose: () => void;
}


const AddCarForm = ( props: AddCarFormProps) => {

  const { inputFields, buttons, input } = props.styles;

  const dispatch = useDispatch(); // redux 
  const store = useStore();

  const { control, handleSubmit } = useForm<CarInputType>();


  const onSubmitHandler: SubmitHandler<CarInputType> = (data) => {
    console.log(`form data is opened`)
    if ( props.id && props.id.length > 0 ){
      props.onClose();
      alert('You have something checked. Click update button instead');
    } else {
      dispatch(chooseMake(data.make));
      dispatch(chooseModel(data.model));
      dispatch(chooseColor(data.carColor));
      dispatch(chooseYear(data.year));
      server_calls.create(store.getState());
      setTimeout( () => { window.location.reload() }, 3000 );
    }
  }

  // TODO - add Handle Function 
//  an async function
// handleSubmit(async (data) => await fetchAPI(data))

  return (
    <div>

      <form
        onSubmit={() => {
          handleSubmit(onSubmitHandler);
          console.log('onSubmit button and func hit');
        }}>

        <div style={inputFields}>

          <Controller
            name="make"
            control={control}
            defaultValue=""
            // defaultValue={"Honda"}
            render={({ field }) => (

              // render={({ field }) => {
              //   // return <input {...field} {...register('test')} />; ❌ double up the registration
              //   return <input {...field} /> // ✅
              
              <TextField {...field} label="Make" />
            )}
          />

          <Controller
            name="model"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField {...field} label="Model" />
            )}
          />


          <Controller
            name="year"
            control={control} 
            defaultValue={2049}
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
            defaultValue=""
            render={({ field }) => (
              <TextField {...field} label="Color" />
            )}
          />

        </div>
        <br />

        <Box style={buttons}>
          <input style={input} type="submit" value="SUBMIT" />
          <Button variant="outlined" color="error" disableElevation onClick={props.onClose}>Cancel</Button>
        </Box>

      </form>
    </div>

  )
}

export default AddCarForm

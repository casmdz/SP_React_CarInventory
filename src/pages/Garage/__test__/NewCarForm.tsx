import { Box, TextField } from "@mui/material"
import { forwardRef } from 'react'

import { useForm, Controller, SubmitHandler } from "react-hook-form"

import './rawr.css'
import { style } from "../../../components/ui/BasicModal";

// =========================================================
interface CarInputType {
  make: string;
  model: string;
  carColor: string;
  year: number; 
}
// export const Input = () => {
export const Inputs = forwardRef((props: CarInputType & { label: string }, ref) => {
  return (
    
    <TextField
      variant="outlined"
      margin="normal"
      inputRef={ref}
      type="text"
      // label={props.label} 
      {...props} 
    >
    </TextField>
  )
});
// =========================================================



interface NewCarFormProps {
  id?: string, 
  data?: {}, 
}


// const NewCarForm = (props: NewCarFormProps) => {
const NewCarForm = () => {
  // const { register, handleSubmit } = useForm({}) // from Phonebook 
  
  // =========================================================
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CarInputType>();

  const onSubmitHandler: SubmitHandler<CarInputType> = (data) => {
    console.log('form data is.. ', data)
  }
  console.log('watching: ', watch("model"))
  // =========================================================

  // TODO - add Handle Function 

  return (
    <div className=" border-red-600 border">

      <form 
       onSubmit={() => {
        handleSubmit(onSubmitHandler);
        console.log('submitted'); 
      }}>

        
        <Controller 
          name="year"
          control={control} 
          defaultValue={1999}
          render={({ field }) => (
            <TextField {...field} 
            label="Year" 
            variant="filled" 
            type="number"
            />
          )}
        />

        

        <Controller 
          name="carColor"
          control={control}
          defaultValue={"Legend"}
          render={ ({ field }) => (
            <TextField {...field} label="Color" variant="outlined" fullWidth />
          )}
        />


        <br />

        <Box sx={style.buttons}>
            <input type="submit" />
            {/* <Button onClick={onClose}>Cancel</Button> */}
          </Box>

      </form>
    </div>

  )
}

export default NewCarForm

//official one okay

import { Box, Button, TextField } from "@mui/material"
// import { forwardRef } from 'react'
// import { styles } from "../../../components/ui/BasicModal";
import { useForm, Controller, SubmitHandler } from "react-hook-form"



interface CarInputType {
make: string;
model: string;
carColor: string;
year: number; 
}

// TODO deleted Inputs, add back if needed


interface AddCarFormProps {
id?: string;  
data?: {}; 
styles: any;
onClose: () => void;
}


const AddCarForm = ({ styles, onClose }: AddCarFormProps) => {
const { inputFields, buttons, input } = styles;

const {
register,
control,
handleSubmit,
// watch,
formState: { errors },
} = useForm<CarInputType>();

const onSubmitHandler: SubmitHandler<CarInputType> = (data) => {
console.log('form data is.. ', data)
}
// console.log('watching: ', watch("model"))

// TODO - add Handle Function 

return (
<div className=" border-red-600 border">

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
    <input style={input} type="submit" />
    <Button variant="outlined" color="error" disableElevation onClick={onClose}>Cancel</Button>
  </Box>

</form>
</div>

)
}

export default AddCarForm

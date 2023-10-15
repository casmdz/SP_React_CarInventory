import { Box, Button, TextField } from "@mui/material"
import { useForm, Controller, SubmitHandler } from "react-hook-form"
import { server_calls } from "../../../data/api/server"
// import { useDispatch, useStore } from "react-redux"
// import { chooseMake, chooseModel, chooseColor, chooseYear } from "../../../redux/carSlice"


interface CarInputType {
  make: string;
  model: string;
  color: string;
  year: string;
}


interface AddCarFormProps {
  id?: string[];
  // data?: {};
  styles?: any;
  onClose: () => void;
}


const AddCarForm = ( props: AddCarFormProps) => {

  const { inputFields, buttons, input } = props.styles;
  // const dispatch = useDispatch(); // redux 
  // const store = useStore();

  // const { control, handleSubmit } = useForm({});
  const { control, handleSubmit } = useForm<CarInputType>();


  // const onSubmitHandler: SubmitHandler<CarInputType> = (data: any, event: any) => {
  const onSubmit = (data: CarInputType ) => {
    console.log('Data object:', data);
    server_calls.create(data)
    .then((response) => {
      console.log('API response:', response);
    })
    .catch((error) => {
      console.error('Error creating data:', error);
    });
    console.log('just created ', data);
    alert(JSON.stringify(data));
    props.onClose();
    setTimeout( () => { window.location.reload() }, 800 )
  }
  //   console.log('Data object:', data);
  //   dispatch(chooseMake(data.make));
  //   dispatch(chooseModel(data.model));
  //   dispatch(chooseColor(data.color));
  //   dispatch(chooseYear(data.year));
  //   server_calls.create(store.getState()).then((response) => {
  //     console.log('API response:', response);
  //   });
  //   console.log(`just created: ${data}`);
  //   alert(JSON.stringify(data))
  // }

  // STORING IT TO REDUX WAS CAUSING THE "POST" ERROR !!!!!!!!


return (
  <div>

    <form onSubmit={handleSubmit(onSubmit)}>
      <div style={inputFields}>

        <Controller
          name="make"
          control={control}
          defaultValue=""
          render={({ field }) => (
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
          defaultValue="2000"
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

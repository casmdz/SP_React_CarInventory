// // this is older, i'm still working out the Controller here, but in the newer copy im deleting the old inputs and justr trying to get react hook forms to work 


// import { Button, TextField } from "@mui/material"
// import { forwardRef } from 'react'

// import { useForm, Controller, SubmitHandler } from "react-hook-form"

// // =========================================================
// interface InputType {
//   name: string,
//   placeholder: string,
//   label:string | null | undefined,
// }
// // export const Input = () => {
// export const Inputs = forwardRef((props: InputType, ref) => {
//   return (
//     <TextField
//       // variant="outlined"
//       variant="filled" 
//       margin="normal"
//       inputRef={ref} // a ref access the DOM directly, can see what user is typing
//       type="text"
//       // label=""
//       {...props} // spread operator spread the elements of an iterable or the properties of an object into another array or object... tbh its just copy paste 
//     >
//     </TextField>
//   )
// });
// // =========================================================



// const NewCarForm = () => {
//   // =========================================================

//   const {
//     register,
//     control,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm<InputType>()
//   // const { register, handleSubmit } = useForm({}) // from Phonebook 
//   const onSubmit: SubmitHandler<InputType> = (data) => console.log(data)

//   console.log('watching: ', watch("model"))
//   // =========================================================

//   // TODO - add Handle Function 

//   return (
//     <div>
//       <form onSubmit={(e) => {
//         e.preventDefault(); 
//         handleSubmit(onSubmit)(e);
//         console.log('submitted'); 
//       }}>
        
//         <div>
//           <label htmlFor="make">Car Make</label>
//           <Inputs name="make" placeholder="Make" />
//         </div>
//         <br />

//         <div className=" border-blue-600 border">
//           <input defaultValue="toyota" {...register("make")} />
//         </div>
//         <div className=" border-green-600 border">
//           <input defaultValue="camry" {...register("model", { required: true })} />
//         </div>

//         <br />

//         <Controller 
//           name="name"
//           control={control} 
//           defaultValue=""
//           render={({ field }) => (
//             <TextField {...field} 
//             variant="outlined" label="testing-label" />
//           )}
//         />

        
        
//         <div>
//           <label htmlFor="model">Car Model</label>
//           <Inputs name="model" placeholder="Model" />
//         </div>

//         <Controller 
//           name="name"
//           control={control}
//           defaultValue={"Legend"}
//           render={ ({ field }) => (
//             <Inputs {...field} name="brrr" placeholder="vrrr" label="model" />
//           )}
//         />



//         <div>
//           <label htmlFor="color">Car Color</label>
//           <Inputs name="color" placeholder="Color" />
//         </div>

//         <div>
//           <label htmlFor="year">Car Year</label>
//           <Inputs name="year" placeholder="Year" />
//         </div>

//         <div className="flex p-1">
//           <Button className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white">Submit</Button>
//         </div>

//       </form>
//     </div>

//   )
// }

// export default NewCarForm
























// import { Box, Button, TextField } from "@mui/material"
// import { forwardRef } from 'react'

// import { useForm, Controller, SubmitHandler } from "react-hook-form"

// import './rawr.css'
// import { style } from "../../../components/ui/BasicModal";

// // =========================================================
// interface CarInputType {
//   make: string;
//   model: string;
//   carColor: string;
//   year: number; 
// }
// // export const Input = () => {
// export const Inputs = forwardRef((props: CarInputType & { label: string }, ref) => {
//   return (
    
//     <TextField
//       variant="outlined"
//       margin="normal"
//       inputRef={ref}
//       type="text"
//       // label={props.label} 
//       {...props} 
//     >
//     </TextField>
//   )
// });
// // =========================================================



// interface NewCarFormProps {
//   id?: string, 
//   data?: {}, 
// }


// // const NewCarForm = (props: NewCarFormProps) => {
// const NewCarForm = () => {
//   // const { register, handleSubmit } = useForm({}) // from Phonebook 
  
//   // =========================================================
//   const {
//     register,
//     control,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm<CarInputType>();

//   const onSubmitHandler: SubmitHandler<CarInputType> = (data) => {
//     console.log('form data is.. ', data)
//   }
//   console.log('watching: ', watch("model"))
//   // =========================================================

//   // TODO - add Handle Function 

//   return (
//     <div className=" border-red-600 border">

//       <form onSubmit={() => {
//         handleSubmit(onSubmitHandler);
//         console.log('submitted'); 
//       }}>

//         <Inputs
//           {...register('make')} 
//           label="Make"
//         />
        
//         <Inputs
//           {...register('model')} 
//           label="Model"
//         />


//         <br />

//         <br />
//         <Controller 
//           name="year"
//           control={control} 
//           defaultValue={1999}
//           render={({ field }) => (
//             <TextField {...field} 
//             label="Year" 
//             variant="filled" 
//             type="number"
//             />
//           )}
//         />

        

//         <Controller 
//           name="carColor"
//           control={control}
//           defaultValue={"Legend"}
//           render={ ({ field }) => (
//             <TextField {...field} label="Color" variant="outlined" fullWidth />
//           )}
//         />


//         <br />
//         {/* <input type="submit" /> */}

//         <Box sx={style.buttons}>
//             <input type="submit" />
//             {/* <Button onClick={onClose}>Cancel</Button> */}
//           </Box>

//       </form>
//     </div>

//   )
// }

// export default NewCarForm

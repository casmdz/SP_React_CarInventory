import { Box, TextField } from "@mui/material"
import { style } from "../../../components/ui/BasicModal"
import BasicModal from "../../../components/ui/BasicModal"


const NewCarModal = ({ open, onClose }) => {


    // need helper text prop 
    // install hook form resolvers
    const getContent = () => (
        <Box sx={style.inputFields}>
        {/* <Input placeholder="Name"/> */}
        <TextField required
            id="outlined-required" 
            variant="outlined" 
            label="Make" 
            name="_make"
            error={false}
        />
        <TextField required
            id="model-required"  
            variant="outlined" 
            label="Model" 
            name="_model"
            error={false}
        />
        <TextField 
            id="color" 
            variant="outlined" 
            label="Color" 
            name="_color"
            error={false}
        />
        <TextField required 
            id="Year" 
            variant="outlined" 
            label="Year" 
            name="_year"
            error={false}
        />
      </Box> 
    );


  return (
    <BasicModal
        open={open}
        onClose={onClose} 
        title="New Car!"
        description={'Add information about your car to add to our database'}
        content={getContent()}
        validate={() => {}}
    />
  )
}

export default NewCarModal

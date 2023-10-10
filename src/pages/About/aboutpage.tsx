import { useState } from "react";
import { Box, Button, Container, Grid, Stack } from '@mui/material';

import NewCarModal from "../Garage/__test__/NewCarModal";


export function AboutPage() {
  const [open, setOpen] = useState(false); //close as default

  // const handleOpen = () => {
  //   setOpen(true);
  // }
  const handleClose = () => {
    setOpen(false);
  }

  const addUser = () => {
    setOpen(true);
    console.log('click add user'); 
  }


  // const getHeader = () => {
  //   const handleChange = (value) => {
  //     console.log(value);
  //   };
  //   const addUser = () => {
  //     setOpen(true);
  //     console.log('click add user');
  //   }
  // }

  return (
    <Box sx={{ display: 'flex' }}>
      <Container maxWidth="lg">
        
        <Grid container spacing={3}>

          <Grid item xs={12}>
            <h1 className="text-3xl font-bold text-purple-500 underline decoration-wavy">about page
            </h1>

          </Grid>

          <Grid item xs={12}>
            <Stack direction="row" spacing={2}>
              <Button variant="contained"
                color="info"
                onClick={addUser}
              >Add New Car
              </Button>

              <Button variant="contained" color="info"
                onClick={() => { alert('clicked'); }}
              >Click Update
              </Button>
            </Stack>
          </Grid>

        </Grid>

        <NewCarModal open={open} onClose={() => handleClose()} />


      </Container>
    </Box>
  )
}

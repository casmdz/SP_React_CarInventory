// import { useState } from "react"

import { Box, Button, Container, Grid, Paper, Stack } from '@mui/material';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import UpdateRoundedIcon from '@mui/icons-material/UpdateRounded';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';

import Deposits from './Deposits'
import Orders from './Orders';

import { server_calls } from '../../data/api/server';
import DataTable from './__test__/CarTable';
import CarModal from './CarModal';


export default function GaragePage() {


const getData = async () => {
    const result = await server_calls.get();
    console.log(result);
}

return (
    <Box sx={{ display: 'flex' }}>


        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <CarModal 
        // open={open} 
        />
            <Grid container spacing={3}>

                <Grid item xs={12}>
                    <button className='bg-teal-300 p-2' 
                    onClick={getData}>get data</button>
                </Grid>

                <Grid item xs={12}>
                    <Stack direction="row" spacing={2}>

                        <Button variant="contained" 
                        endIcon={<AddRoundedIcon />} 
                        color="info"
                        >Add New Car
                        </Button>

                        <Button variant="contained" color="info"
                        endIcon={<UpdateRoundedIcon />}
                        onClick={() => {alert('clicked');}}
                        >Click Update
                        </Button>

                        <Button variant="contained" color="info" 
                        endIcon={<DeleteForeverRoundedIcon />} 
                        href="#contained-buttons">
                            Delete
                        </Button>
                    </Stack>
                </Grid>

                {/* Recent Deposits */}
                <Grid item xs={12} md={4} lg={3}>
                    <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%',
                        }}
                    >
                        <Deposits />
                    </Paper>
                </Grid>

                <Grid item xs={12} md={8} lg={9}>
                    <Paper sx={{ p:2, display: 'flex', flexDirection:'row'}}>
                        <DataTable />
                    </Paper>
                </Grid>

                {/* Recent Orders */}
                <Grid item xs={12}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                        <Orders />
                    </Paper>
                </Grid>


            </Grid>
        </Container>

    </Box>
);
}

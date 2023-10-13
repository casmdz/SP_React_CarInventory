import { useState } from "react"

import { Box, Button, Card, CardActionArea, CardMedia, Container, Grid, Paper, Stack } from '@mui/material';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import UpdateRoundedIcon from '@mui/icons-material/UpdateRounded';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';

import { server_calls } from '../../data/api/server';
import { useGetData } from "../../hooks/FetchData";
import CarModal from './CarModal';
import CarDataTable from "./CarDataTable";



export default function GaragePage() {

    const [selectedCarId, setSelectedCarId] = useState<string | null>(null); 
    const [selectionModel, setSelectionModel] = useState<string[]>([]); // Store selected car IDs // todo check 

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formType, setFormType] = useState<"add" | "update" | "delete" | null>(null);
    const openModal = (type: "add" | "update" | "delete") => {
        setIsModalOpen(true);
        setFormType(type);
    }
    //     if ( type === "update" && !selectedCarId ) {
    //         alert('Please select a car to update.')
    //     } else {
    //         setIsModalOpen(true);
    //         setFormType(type);
    //     }
    // }
    const closeModal = () => {
        setIsModalOpen(false);
        setFormType(null);
    }


    const { carData, getData } = useGetData(); 


    const deleteData = () => {
        server_calls.delete(selectionModel[0])
        getData();
        console.log(`Selection model: ${selectionModel}`)
        // TODO finish and test this 
    }

    // const getData = async () => {
    //     const result = await server_calls.get();
    //     console.log(result);
    // }

    return (
        <Box sx={{ display: 'flex' }}>

            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                {formType === "update" && !selectedCarId && (
                    <div className="error-message">Please select a car to update.</div>
                )}
                <Grid container spacing={3}>

                    <Grid item xs={12}>
                        <Stack direction="row" spacing={2}>

                            <Button variant="contained"
                                endIcon={<AddRoundedIcon />}
                                color="info"
                                onClick={() => openModal("add")}
                            >Add New Car
                            </Button>

                            <Button variant="contained" color="info"
                                endIcon={<UpdateRoundedIcon />}
                                onClick={() => {
                                    openModal("update");
                                    setSelectedCarId(selectedCarId); // TODO check this 
                                }}
                            >Click Update
                            </Button>
                            {/* no update function here because we need to access the data inside the modal itself 
                                but right now it just opens the modal 
                            */}

                            <Button variant="contained" color="info"
                                endIcon={<DeleteForeverRoundedIcon />}
                                onClick={deleteData}
                                >
                                Delete
                            </Button>
                            {/* TODO add delete function  */}
                        </Stack>
                    </Grid>

                    <Grid item xs={12} md={3} lg={3} sx={{alignSelf: 'center'}}>
                        
                        <Card
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                // height: '433px',
                            }}>
                            <CardActionArea sx={{ margin: 0 }}>
                            <CardMedia 
                                component="img" 
                                alt="car"
                                image="/imgs/dark--dmitry-novikov--unsplash.jpg"
                                sx={{ 
                                    objectFit: 'cover', 
                                    objectPosition: 'right center',
                                    height:'100%',
                                }}
                                />
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={8} lg={9}>
                        <Paper>
                            {/* <CarDataTable setSelectedCarId={setSelectedCarId} /> */}
                            <CarDataTable setSelectedCarId={setSelectionModel} />
                        </Paper>
                    </Grid>


                </Grid>

                <CarModal open={isModalOpen} onClose={closeModal} formType={formType} id={selectionModel} />
                {/* <CarModal open={isModalOpen} onClose={closeModal} formType={formType} selectedCarId={selectedCarId} setSelectedCarId={setSelectedCarId} /> */}
                {/*  TODO check this  */}

            </Container>
        </Box>
    );
}

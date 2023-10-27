import { useState } from "react"

import { Box, Button, Card, CardActionArea, CardMedia, Container, Grid, Paper, Stack } from '@mui/material';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import UpdateRoundedIcon from '@mui/icons-material/UpdateRounded';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import { Alert, AlertTitle } from "@mui/material";

import { server_calls } from '../../data/api/server';
import { useGetData } from "../../hooks/FetchData";
import CarModal from './CarModal';
import CarDataTable from "./CarDataTable";



export default function GaragePage() {

// CHANGES BY MUI https://mui.com/x/migration/migration-data-grid-v5/#%E2%9C%85-renamed-props selectionModel 	rowSelectionModel
  // const { contactData, getData } = useGetData();
  const { getData } = useGetData(); 

  const [rowSelectionModel, setRowSelectionModel] = useState<string[]>([]); // Store selected car IDs 

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formType, setFormType] = useState<"add" | "update" | "delete" | null>(null);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [alertType, setAlertType] = useState<"info" | "error" | "success" | "warning" >();

  const openModal = (type: "add" | "update" | "delete") => {
      console.log('Opening modal with type:', type);
      if (type === "update") {
        if (rowSelectionModel.length === 1) {
          setIsModalOpen(true);
          setFormType(type);
          console.log('Current rowSelectionModel if length === 1:', rowSelectionModel.length);
          } else if (rowSelectionModel.length === 0) {
              console.log('Current rowSelectionModel if length === 0:', rowSelectionModel.length);
              setIsAlertOpen(true);
              // alert("Please select a car to update");
              setAlertType("info");
              setTimeout(() => setIsAlertOpen(false), 5000)
          } else {                
            console.log('too many cars', rowSelectionModel.length);
            // alert("Only select one car to update.");
            setIsAlertOpen(true);
            setAlertType("error");
            setTimeout(() => setIsAlertOpen(false), 5000)
          }
      } else if (type === "add" ) {
        if (rowSelectionModel.length > 0){
          setIsAlertOpen(true);
          setAlertType("warning")
          setTimeout(() => setIsAlertOpen(false), 7000)
        } else {
          setIsModalOpen(true);
          setFormType(type)
        }
      } else {
          setIsModalOpen(true);
          setFormType(type);
      }
  }

  const closeModal = () => {
      setIsModalOpen(false);
      setFormType(null);
  }




  const deleteData = () => {
      server_calls.delete(rowSelectionModel[0])
      getData();
      console.log(`Selection model: ${rowSelectionModel}`)
      alert("You deleted car ID: \n" + JSON.stringify(rowSelectionModel, null, 2))
      setTimeout( () => { window.location.reload() }, 600 );

  }

return (
  <Box sx={{ display: "flex" }}>
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>

      {isAlertOpen && (
        <Alert severity={alertType} onClose={() => setIsAlertOpen(false)}>
          <AlertTitle>Watch out!</AlertTitle>
          {alertType === "error" && "Please only select 1 car to update."}
          {alertType === "warning" && "Please unselect cars before adding a new car. Click UPDATE if you want to edit a car that you have checked."}
          {alertType === "info" && "Please select a car to update."}
        </Alert>
      )}

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              endIcon={<AddRoundedIcon />}
              color="info"
              onClick={() => openModal("add")}
            >
              Add New Car
            </Button>

            <Button
              variant="contained"
              color="info"
              endIcon={<UpdateRoundedIcon />}
              onClick={() => {
                openModal("update");
              }}
            >
              Click Update
            </Button>

            <Button
              variant="contained"
              color="info"
              endIcon={<DeleteForeverRoundedIcon />}
              onClick={deleteData}
            >
              Delete
            </Button>
          </Stack>
        </Grid>

        <Grid item xs={12} md={3} lg={3} sx={{ alignSelf: "center" }}>
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              // height: '433px',
            }}
          >
            <CardActionArea sx={{ margin: 0 }}>
              <CardMedia
                component="img"
                alt="car"
                image="/imgs/dark--dmitry-novikov--unsplash.jpg"
                sx={{
                  objectFit: "cover",
                  objectPosition: "right center",
                  height: "100%",
                }}
              />
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={12} md={8} lg={9}>
          <Paper>
            <CarDataTable setRowSelectionModel={setRowSelectionModel} />
          </Paper>
        </Grid>
      </Grid>

      <CarModal
        open={isModalOpen}
        onClose={closeModal}
        formType={formType}
        id={rowSelectionModel}
      />

    </Container>
  </Box>
);
}

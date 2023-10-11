import { Box, Button, Container, Grid, Stack } from '@mui/material';

export function AboutPage() {


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
              >Add New Car
              </Button>

              <Button variant="contained" color="info"
                onClick={() => { alert('clicked'); }}
              >Test New Car Form
              </Button>
            </Stack>
          </Grid>

        </Grid>

        {/* <UpdatedCarModal open={open} onClose={() => handleClose()} styles={styles}/> */}

      </Container>
    </Box>
  )
}

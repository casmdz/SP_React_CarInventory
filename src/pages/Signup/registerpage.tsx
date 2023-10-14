import * as React from 'react';
import TextField from '@mui/material/TextField';

import { Typography, Container, Box, Grid, Button } from '@mui/material/';

// import FormControl, { useFormControl } from '@mui/material/FormControl';




export function RegisterPage() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <Container component="main" maxWidth="xs" sx={{ marginBottom: '20%' }}>
      <Typography variant="h4" sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }} className='text-red-300 underline decoration-wavy font-bold'>Sign up</Typography>
      <Box
        sx={{
          marginTop: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          '& > :not(style)': { m: 1 },
        }}
      >
        {/* autoComplete="off"  */}
        <form noValidate onSubmit={handleSubmit} className=' mt-4'>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                name='first_name'
                id='first_name'
                label='First Name'
                autoFocus
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="last_name"
                label="Last Name"
                name="last_name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="username"
                label="Unique username"
                type="username"
                id="username"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
              />
            </Grid>
            {/* <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirm_password"
                  label="Confirm your password"
                  type="confirm_password"
                  id="confirm_password"
                />
              </Grid> */}

          </Grid>
          <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
        </form>

      </Box>

    </Container>

  );
}
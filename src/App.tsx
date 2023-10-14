import './index.css';
import { HomePage } from './pages/Home/homepage';
import { LoginPage } from './pages/Login/loginpage'
import { RegisterPage } from './pages/Signup/registerpage';
// import { AboutPage } from './pages/__test__/aboutpage';

import { Routes, Route } from 'react-router-dom'
import { Container } from '@mui/material';
import Navbar from './components/Navbar';
import StickyFooter from './components/Footer';

import NotFound from './pages/NotFound';
import GaragePage from './pages/Garage/garagepage';


import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


export default function App() {
  return (
    <>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
    <Navbar />
    <Container>

      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={ <LoginPage /> } />
        <Route path="/signup" element={ <RegisterPage /> } />
        {/* <Route path="/about" element={ <AboutPage /> } /> */}

        <Route path="/garage" element={ <GaragePage /> } />


        <Route path="*" element={ <NotFound />} />
      </Routes>
    </Container>
    <StickyFooter />
    </ThemeProvider>
    </>
  )
};

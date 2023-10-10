import './index.css';
import { HomePage } from './pages/Home/homepage';
import { LoginPage } from './pages/Login/loginpage'
import { RegisterPage } from './pages/Signup/registerpage';
import { AboutPage } from './pages/About/aboutpage';

import { Routes, Route } from 'react-router-dom'
import { Container } from '@mui/material';
import Navbar from './components/Navbar';
import StickyFooter from './components/Footer';

// import ComponentWithoutProps from './components/__test__/ComponentWithoutProps';
// import ComponentWithProps from './components/__test__/ComponentWithProps';
// import ConditionalComponent from './components/__test__/ConditionalComponent';
import NotFound from './pages/NotFound';
import GaragePage from './pages/Garage/garagepage';


export default function App() {
  return (
    <>
    <Navbar />
    <Container>

      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={ <LoginPage /> } />
        <Route path="/signup" element={ <RegisterPage /> } />
        <Route path="/about" element={ <AboutPage /> } />

        <Route path="/garage" element={ <GaragePage /> } />


        <Route path="*" element={ <NotFound />} />
      </Routes>
      {/* <br />
      <ComponentWithoutProps />
      <br />
      <ComponentWithProps message="Hello from parent component!" />
      <br />
      <ConditionalComponent showContent={true} /> */}
    </Container>
    <StickyFooter />
    </>
  )
};

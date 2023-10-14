// import carsportrait from '../../../public/imgs/cars-portrait--jannis-lucas--unsplash.jpg'
import '../../index.css'
import { Container, Typography } from "@mui/material";


export function HomePage() {
  return (
    <><div
      className="hero homepage-container-hd bg-cover text-center relative"
      style={{
        backgroundImage: "url(./imgs/cars-portrait--jannis-lucas--unsplash.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "70vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // // minWidth: '1800px',
        // minWidth: '100vw',
        // // translate: '-180px',
        // margin: '0px',
        // padding: '0px',
      }}
    >
      <Container style={{ margin: 0, padding: 0 }}>
        <div className="row">
          <div className=" col flex items-center justify-center">
            <Typography variant='h3' sx={{
              backgroundColor: 'rgba(43, 35, 35, 0.5)',
              padding: '20px',
              borderRadius: '10px',
              color: 'white',
            }}>
              Cas car inventory
            </Typography>
          </div>
        </div>
      </Container>
    </div>
    <Container className=' py-5'>
        <div className=' p-5 mb-40 text-center'>
          <Typography variant='h4' gutterBottom>At our website, we offer a convenient way for car enthusiasts like you to take control of your car collection.
          </Typography>
          <Typography variant='body1' gutterBottom>
          Sign up and create your secure account with ease with security measures like token-based authentication. Add, update, and keep track of your car collection.
          </Typography>
        </div>
      </Container>
    </>
  );
}

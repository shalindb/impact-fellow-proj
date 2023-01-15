import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component, useState } from 'react';
import {Button, Alert} from 'react-bootstrap';
import {Container, Row, Form, FormControl} from 'react-bootstrap';
import Grid from '@mui/material/Button';
import { MDBInputGroup, MDBInput, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';
import * as Icon from 'react-bootstrap-icons';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import NavbarComp from './Components/NavbarComp';
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: '60px',
}));

const darkTheme = createTheme({ palette: { mode: 'dark' } });
const lightTheme = createTheme({ palette: { mode: 'light' } });

function App() {
  
  async function handleSubmit(e){
    console.log('What the fuck');
    // e.preventDefault(); 
    // const nameValue = document.getElementById("searchform").value;
    // console.log("value", nameValue); 
    
    // await axios.post('http://localhost:8000/api/getaddress', {
    //     address: nameValue
    // }).then((data) => {
    //   console.log("send successfully",data.data._id);
    //   history.push(`apartment?id=${data.data._id}`);
    // })
    // // ?id=${data.data._id}

  }

  return (
    <div className="App">
       <Button
          title="Button Text"
          onPress={() => { /* Function to be called when button is pressed */ }}
          backgroundColor="#841584"
          fontSize={20}
        />
      <NavbarComp/>
      <div>

      <div className = "d-grid gap-3" >
      <Grid container spacing={2}>
      <Grid item xs={8}>
        <Icon.Envelope color ='green' size={100} onClick = {TransitionsModal()} >
        </Icon.Envelope>
      </Grid>
      <Grid item xs={8}>
        <Icon.ArrowRight color ='green' size={50}>
        </Icon.ArrowRight>
        </Grid>
        <Grid item xs={8}>
        <Icon.Shop color ='green' size={100}>
        </Icon.Shop>
        </Grid>
        <Grid item xs={8}>
        <Icon.ArrowRight color ='green' size={50}>
        </Icon.ArrowRight>
        </Grid>
        <Grid item xs={8}>
        <Icon.Ear color ='green' size={100}>
        </Icon.Ear>
        </Grid>
      </Grid>
      </div>
      </div>
      <Container>
      </Container>
    </div>
  );
}

export default App;

function TransitionsModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default function Elevation() {
  return (
    <Grid container spacing={2}>
      {[lightTheme, darkTheme].map((theme, index) => (
        <Grid item xs={6} key={index}>
          <ThemeProvider theme={theme}>
            <Box
              sx={{
                p: 2,
                bgcolor: 'background.default',
                display: 'grid',
                gridTemplateColumns: { md: '1fr 1fr' },
                gap: 2,
              }}
            >
              {[0, 1, 2, 3, 4, 6, 8, 12, 16, 24].map((elevation) => (
                <Item key={elevation} elevation={elevation}>
                  {`elevation=${elevation}`}
                </Item>
              ))}
            </Box>
          </ThemeProvider>
        </Grid>
      ))}
    </Grid>
  );
}

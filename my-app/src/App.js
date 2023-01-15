import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component, useState, useRef } from 'react';
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
import axios from 'axios'; 

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

function App() {
  const [listInfo, setListInfo] = useState(null);
  const stateRef = useRef();
  stateRef.current = listInfo;
  
  function handleSubmit(e){
    e.preventDefault(); 
    console.log('test');
    axios.get('http://localhost:9820/data').then((resp) => {
      
      console.log(resp.data);
      setListInfo(JSON.stringify(resp.data));
      
    })
    
  }
  console.log('test');
  console.log(listInfo);

  
  





  return (
    <div className="App">
      <div>
        <div>{listInfo}</div>
      </div>
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
      <Form inline>
           <FormControl id="searchform" type="text" placeholder="Type in a location!" className="mr-sm-2" />
           <Button onClick={handleSubmit}>Search</Button>
         </Form>
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

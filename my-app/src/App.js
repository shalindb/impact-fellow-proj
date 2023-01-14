import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component, useState } from 'react';
import {Button, Alert} from 'react-bootstrap';
import {Container, Row, Form, FormControl} from 'react-bootstrap';
import Grid from '@mui/material/Button';
import { MDBInputGroup, MDBInput, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';
import * as Icon from 'react-bootstrap-icons';

import NavbarComp from './Components/NavbarComp';

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
      <NavbarComp/>
      <div>

      <div className = "d-grid gap-3" >
      <Grid container spacing={2}>
      <Grid item xs={8}>
        <Icon.Envelope color ='red' size={100}>
        </Icon.Envelope>
      </Grid>
      <Grid item xs={8}>
        <Icon.ArrowRight color ='red' size={50}>
        </Icon.ArrowRight>
        </Grid>
        <Grid item xs={8}>
        <Icon.Shop color ='red' size={50}>
        </Icon.Shop>
        </Grid>
      </Grid>
      </div>
      </div>
      <Container>
      <Form inline>
           <FormControl id="searchform" type="text" placeholder="Address" className="mr-sm-2" />
           <Button onClick={handleSubmit} variant="outline-light">Search</Button>
         </Form>
      </Container>
    </div>
  );
}

export default App;
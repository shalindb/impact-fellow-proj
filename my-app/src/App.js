import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component, useState } from 'react';
import {Button, Alert} from 'react-bootstrap';
import {Container, Row} from 'react-bootstrap';
import Grid from '@mui/material/Button';
import { MDBInputGroup, MDBInput, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';
import * as Icon from 'react-bootstrap-icons';

import NavbarComp from './Components/NavbarComp';

function App() {
  const [showSearchAlert, setShowSearchAlert] = useState(false);
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
        <>
          <MDBInputGroup>
            <MDBInput label='Search' />
            <MDBBtn onClick={() => setShowSearchAlert(true)} rippleColor='dark'>
              <MDBIcon icon='search' />
            </MDBBtn>
          </MDBInputGroup>
        </>
      </Container>
    </div>
  );
}

export default App;
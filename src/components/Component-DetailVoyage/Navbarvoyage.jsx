import React, {Component} from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Button, Container } from 'reactstrap';
  import './Navbarvoyage.css';

class Navbarvoyage extends Component {
   
  render() {
    return (
      <Container className="pad">
        <Navbar light expand="md nav" >
          <NavbarBrand className="brand">Venise</NavbarBrand>
         
         
            <Nav className="ml-auto" navbar>
              <NavItem className="center date">
                  Du 12 au 16 février 2019
              </NavItem>
              <NavItem className="center price">
                549€
              </NavItem>
              <Button>Réserver</Button>
            </Nav>
      
        </Navbar>
      </Container>
    );
  }
}

export default Navbarvoyage;


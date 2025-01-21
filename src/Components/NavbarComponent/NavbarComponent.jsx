import React, {useState} from "react";
import logo from '../../assets/logo.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';

export default function NavbarComponent() {
  const [numberOfItems, setNumberOfItems] = useState(0);
  function addItem () {
    setNumberOfItems(numberOfItems + 1);
  }
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className=" py-2">
        <Navbar.Brand href="#home">
        <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top mx-3"
              alt="React Bootstrap logo"
            />Finder</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/slider">Assignment1</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">About</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown.Item href="#action/3.1">
            </NavDropdown.Item>

            <Nav.Item className="position-relative">
            <FontAwesomeIcon icon={faShoppingCart} size="2x"/>
            {numberOfItems >= 0 ? 
              (
                <span className="position-absolute badge top-0 start-md-100 strat-0 translate-middle bg-success rounded-circle py-1 px-2">{numberOfItems}</span>

              )  :
              ""
            }
            </Nav.Item>
            <Nav.Item>
              <Button variant="danger" className="mx-md-3 my-md-0 my-3 px-2" onClick={()=>addItem()}>+Add</Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

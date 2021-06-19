import React from 'react'
import { Nav, Navbar, Form, FormControl, Button,NavDropdown } from 'react-bootstrap';
import  IconCart from '../CartWidget/CartWidget.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Navbar.css'
function NavBar() {
    return (
        <div>
           <Navbar  bg="dark" variant="dark" expand="lg">
  <Navbar.Brand href="#"><img src="./TECNO-HOGAR.png" width="250px"/></Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      <Nav.Link className="color-textnav" href="#action1">Inicio</Nav.Link>
      <Nav.Link className="color-textnav" href="#action2">Todo IoT</Nav.Link>
      <NavDropdown title="Accesorios para el Hogar" id="navbarScrollingDropdown" className="color-textnav" >
        <NavDropdown.Item  href="#action3">Accsesorios 1</NavDropdown.Item>
        <NavDropdown.Item  href="#action4">Accsesorios 2</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item  href="#action5">Lo más Vendido</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link className="color-textnav" href="#" disabled>
       Pronto...
      </Nav.Link>
    </Nav>
    <Form className="d-flex">

      <FormControl
        type="search"
        placeholder="Ingresa Tu Busqueda"
        className="mr-2"
        aria-label="Search"
      />
      <Button variant="outline-success">Buscar</Button>
   
        <IconCart></IconCart>

    </Form>
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}

export default NavBar

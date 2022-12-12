import CartWidget from "../CartWidget/CartWidget";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from "react-router-dom";
import { NavbarBrand } from "react-bootstrap";
import './NavBar.css'

function NavBar() {
  return (
    <div className='row'>
<Navbar collapseOnSelect expand="md" bg="light" variant="light">
      <Container>
        <NavLink to='/' className="marca">
          <NavbarBrand id="logo">
        KHAYIM
        </NavbarBrand>
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <NavLink className={({ isActive })=>isActive ? 'btn btn-success' : 'btn btn-primary'  } to="/categoria/macetas">Macetas</NavLink>
            <NavLink className={({ isActive })=>isActive ? 'btn btn-success' : 'btn btn-primary'  } to="/categoria/llaveros">Llaveros</NavLink>
            <NavLink className={({ isActive })=>isActive ? 'btn btn-success' : 'btn btn-primary'  } to="/categoria/madera">Artículos de madera</NavLink>
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Container>
    </Navbar>
    </div>
  );
}

export default NavBar;

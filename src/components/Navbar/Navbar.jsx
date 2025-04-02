import Logo from '../../assets/Logo.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";  // Correct import for FaCircleUser
import './Navbar.css';
import { useState } from 'react';
import { X, List } from "lucide-react";
import { Link } from 'react-router-dom';

function NavbarSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [menu , setMenu] = useState("home")

  return (
    <>
      {/* Main Navbar */}
      <Navbar expand="lg" className="bg-body-tertiary  navbar-section" data-bs-theme="">
        <Container>
          <Navbar.Brand className='nav-logo' href="#home">
            <img className="logo-img" src={Logo} alt="Logo" />
          </Navbar.Brand>

          {/* Hamburger Menu Button for Small Screens */}
          <button className="btn d-lg-none" onClick={() => setIsOpen(true)}>
            <List size={28} />
          </button>

          {/* Normal Navbar for Large Screens */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto nav-links">
              <Nav.Link  onClick={()=> {setMenu("home")}} ><Link className='nav-link' to= '/'>Home</Link>   {menu === "home" ? <hr/> : <> </>}</Nav.Link>
              <Nav.Link  onClick={()=> {setMenu("shop")}} ><Link className='nav-link' to= '/shop'>Shop</Link> {menu === "shop" ? <hr/> : <> </>}</Nav.Link>
              <Nav.Link   onClick={()=> {setMenu("about")}} ><Link className='nav-link' to= '/about'>About</Link> {menu === "about" ? <hr/> : <> </>}</Nav.Link>
              <Nav.Link  onClick={()=> {setMenu("contact")}} ><Link className='nav-link' to= '/contact'>Contact</Link> {menu === "contact" ? <hr/> : <> </>}</Nav.Link>
            </Nav>
            <Nav className="nav-icons">
              <Nav.Link ><FaSearch /></Nav.Link>
              <Nav.Link><FaCircleUser /></Nav.Link>
              <Nav.Link><FaShoppingCart /></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Full-Screen Overlay Navbar (Only for Small Screens) */}
      {isOpen && (
        <div className="fullscreen-overlay">
          <button className="close-btn" onClick={() => setIsOpen(false)}>
            <X size={32} />
          </button>
          <Nav className="overlay-nav-links">
            <Nav.Link onClick={() => setIsOpen(false)}><Link className='nav-link' to= '/'/>Home</Nav.Link>
            <Nav.Link onClick={() => setIsOpen(false)}><Link className='nav-link' to= '/shop'/>Shop</Nav.Link>
            <Nav.Link onClick={() => setIsOpen(false)}><Link className='nav-link' to= '/about'/>About</Nav.Link>
            <Nav.Link onClick={() => setIsOpen(false)}><Link className='nav-link' to= '/contact'/>Contact</Nav.Link>
          </Nav>
          <Nav className="overlay-nav-icons">
            <Nav.Link href="#home"><FaSearch /></Nav.Link>
            <Nav.Link href="#link"><FaCircleUser /></Nav.Link>
            <Nav.Link href="#home"><FaShoppingCart /></Nav.Link>
          </Nav>
        </div>
      )}
    </>
  );
}

export default NavbarSection;

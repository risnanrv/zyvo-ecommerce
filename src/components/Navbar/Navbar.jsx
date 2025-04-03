import Logo from '../../assets/Logo.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import './Navbar.css';
import { useContext, useState } from 'react';
import { X, List } from "lucide-react";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

function NavbarSection() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
   const location = useLocation();
   const {getTotalCartItems} = useContext(ShopContext)
 
  
  return (
    <>
      {/* Main Navbar */}
      <Navbar expand="lg" className="bg-body-tertiary navbar-section d-flex align-items-center" data-bs-theme="">
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
              <Nav.Link>
                <Link className="nav-link" to="/">Home</Link>
                {location.pathname === "/" && <hr />}
              </Nav.Link>
              <Nav.Link>
                <Link className="nav-link" to="/shop">Shop</Link>
                {location.pathname === "/shop" && <hr />}
              </Nav.Link>
              <Nav.Link>
                <Link className="nav-link" to="/about">About</Link>
                {location.pathname === "/about" && <hr />}
              </Nav.Link>
              <Nav.Link>
                <Link className="nav-link" to="/contact">Contact</Link>
                {location.pathname === "/contact" && <hr />}
              </Nav.Link>
            </Nav>
            <Nav className="nav-icons">
              <Nav.Link>
                <button onClick={() => navigate('/login')} className='login-nav'><FaCircleUser /> Login</button>
              </Nav.Link>
              <Nav.Link>
                <button onClick={() => navigate('/cart')} className="cart-nav"><FaShoppingCart /></button>
                <div className="cart-quantity"> {getTotalCartItems()}</div>

              </Nav.Link>
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
            <Nav.Link href='/' onClick={() => { setIsOpen(false); navigate('/'); }  }><Link className='nav-link' to= '/'/>Home</Nav.Link>
            <Nav.Link href='/shop'  onClick={() => { setIsOpen(false); navigate('/shop'); }}><Link className='nav-link' to= '/shop'/>Shop</Nav.Link>
            <Nav.Link href='/about'  onClick={() => { setIsOpen(false); navigate('/about'); }}><Link className='nav-link' to= '/about'/>About</Nav.Link>
            <Nav.Link href='/contact'  onClick={() => { setIsOpen(false); navigate('/contact'); }}><Link className='nav-link' to= '/contact'/>Contact</Nav.Link>
          </Nav>
          <Nav className="overlay-nav-icons">
          <Nav.Link>
                <button onClick={() => navigate('/login')} className='login-nav'><FaCircleUser /> Login</button>
              </Nav.Link>
              <Nav.Link>
                <button  onClick={() => navigate('/cart')} className="cart-nav"><FaShoppingCart /></button>
                <div className="cart-quantity-overlay"> {getTotalCartItems()}</div>
                
              </Nav.Link>
          </Nav>
        </div>
      )}
    </>
  );
}

export default NavbarSection;



import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import BONVOYAGELOGO from "../assets/Pet pals_prev_ui.png/";
import { FaBars } from "react-icons/fa";

import "../CSS/Navbar.css";
import { Menu, MenuButton, MenuDivider, MenuGroup, MenuItem, MenuList, Button } from "@chakra-ui/react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const activeSection = location.pathname;

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Example of a function to handle logout, adjust as needed
  // const handleLogout = () => {
  //   console.log('Logout function called');
  // };

  return (
    <div className="navbar">
      <div className="navbar-container">
        <Link to="/">
          {" "}
          <div className="navbar-logo">
            <img src={BONVOYAGELOGO} alt="" />
          </div>
        </Link>
        <div className="navbar-links">
          <Link
            to="/"
            className={`nav-link ${activeSection === "/" ? "active" : ""}`}
          >
            Home
          </Link>
          <Link
            to="/adopt"
            className={`nav-link ${activeSection === "/adopt" ? "active" : ""}`}
          >
            Adopt
          </Link>
          <Link to="/login" className="nav-link">
            Login
          </Link> 
          
          <Link to="/signup" className="nav-link">
            Signup
          </Link>
        </div> 
        <Menu>
  <MenuButton as={Button} colorScheme='#1D2B53' color= 'black' borderColor='black'>
    Profile
  </MenuButton>
  <MenuList>
    <MenuGroup title='Profile'>
      <Link to="/Application">
      <MenuItem>Application</MenuItem>
      </Link>
      
    </MenuGroup>
    <MenuDivider />
    <MenuGroup title='Help'>
      <MenuItem>FAQ</MenuItem>
      <MenuItem>Logout</MenuItem>
    </MenuGroup>
  </MenuList>
</Menu>
        <div className="mobile-menu-icon" onClick={handleToggleMenu}>
          <FaBars />

          <div className={`menu-drawer ${isMenuOpen ? "open" : ""}`}>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link to="/adopt" onClick={() => setIsMenuOpen(false)}>
              Adopt
            </Link>
            <Link to="/login" onClick={() => setIsMenuOpen(false)}>
              Login
            </Link>
            <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
              Signup
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

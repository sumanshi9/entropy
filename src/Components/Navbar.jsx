// src/components/NavBar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 
import logo from '../Images/Logo.png';
import menuIcon from '../Images/fork-and-knife.svg';
import rightArrow from '../Images/arrow-right.svg';


const Navbar = () => {


    
    const [navWidth, setNavWidth] = useState('0');
      
    const openNav = () => {
      setNavWidth('250px');
    };
  
    const closeNav = () => {
      setNavWidth('0');
    }       

  return (
   
    <nav>
        

        <div className='main'>
            
            <div className="nav-logo">
                <img src={logo} alt="Logo" />
            </div>

        
            <ul className="nav-list">
                <li className="nav-item">
                <Link to="/"><h6 className='NavHeading'>Home</h6></Link>
                </li>
                <li className="nav-item">
                <Link to="/about"><h6 className='NavHeading'>About</h6></Link>
                </li>
                <li className="nav-item">
                <Link to="/contact"><h6 className='NavHeading'>Contact</h6></Link>
                </li>
            </ul>

            <div class="menu-nav">
                <button class="foodmenunav">
                    <a href=""> 
                        <img src={menuIcon} alt="menu icon" className='menu-icon'></img>
                        <p class="explore-menu">Explore the menu!</p>
                        <img src={rightArrow} alt="go ahead" className='right-arrow'></img>
                    </a>
                </button>

                <div id="mySidenav" class="sidenav">
                    <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">Clients</a>
                    <a href="#">Contact</a>
                </div>

                <div class="nav-menu-icon" onclick="openNav()">
                    <div class="bar1"></div>
                    <div class="bar2"></div>
                    <div class="bar3"></div>                
                </div>                

            </div>

        
        </div>

        
    </nav>
  );
};

export default Navbar;

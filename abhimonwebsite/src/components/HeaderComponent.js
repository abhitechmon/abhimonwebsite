import React, { Component } from 'react';
import {Nav,
        Navbar,
        NavbarBrand,
        NavbarToggler,
        Collapse,
        NavItem,
        Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }

  render() {
    return(
    <React.Fragment>
        <Navbar dark color="secondary" expand="md">
            <div className="container">
                <NavbarBrand href="/">ABHIMON <img src='assets/images/abhimonlogo.png' height="30" width="41" alt='logo' /></NavbarBrand>
                <NavbarToggler onClick={this.toggleNav} />
                <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar className="ml-auto">
                            <NavItem>
                                <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/instagram'><span className="fa fa-instagram fa-lg"></span> Instagram</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/resume'><span className="fa fa-file fa-lg"></span> Resume</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/contact'><span className="fa fa-address-card fa-lg"></span> Contact</NavLink>
                            </NavItem>
                            </Nav>
                </Collapse>
            </div>
        </Navbar>
      <Jumbotron fluid className="header">
           <div className="container">
               <div className="row row-header">
                   <div className="col-12 col-sm-6">
                       <h1 className="homeTitle">ABHISHEK <span className="redColor">MONDAL</span></h1>
                       <p>I take inspiration from the World's best resources, and create a unique fusion experience. My lipsmacking creations will tickle your designing senses!</p>
                   </div>
               </div>
           </div>
       </Jumbotron>
    </React.Fragment>
    );
  }
}

export default Header;
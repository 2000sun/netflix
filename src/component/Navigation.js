import React from 'react'
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (<Navbar className='container' variant="dark" expand="lg">
        <Container  fluid>
            <Navbar.Brand href="#"> <img width={100} className='img-back'
                                     src='https://netflix-hyerin.netlify.app/static/media/netflix-lg-logo.e615b40377e7d85b660c.png'/>
                                       </Navbar.Brand>
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                        <Link to='/' className='nav-item'>HOME</Link>
                   
                </Nav>
               
        </Container>
    </Navbar>)
              
      }
  
     
export default Navigation;
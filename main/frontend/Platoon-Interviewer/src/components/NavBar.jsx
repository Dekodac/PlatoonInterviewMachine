
import { Link, useNavigate } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavLink from 'react-bootstrap/NavLink';



export const NavBar = () => {

    const navigate = useNavigate();
    
    return (
        <Navbar style={{paddingBottom: "2%", padding: "2%", marginTop: '0.5vh'}} expand="lg" id='navbar-comp'>
            <Container>          
                <Navbar.Brand>
                    <h2>Platoon Interviewer</h2>
                </Navbar.Brand>
              
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" variant='green'>
                    <Nav style={{ display: 'flex', justifyContent: 'center', width: '100%' }} className="me-auto">
                        <NavLink as={Link} to="/" className="mx-2">Home</NavLink>
                        
                       
                            <>
                                
                                <NavLink as={Link} to="/interview/" className="mx-2">Interview Now</NavLink>
                                <NavLink as={Link} to="/about/" className="mx-2">About</NavLink>
                    

                            </>
                    
                      
                    </Nav>

                </Navbar.Collapse>
        
          </Container>
     

        </Navbar>
    );
}
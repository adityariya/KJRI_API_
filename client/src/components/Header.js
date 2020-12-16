import React from 'react'
import { Navbar, Nav, Container} from 'react-bootstrap'

const Header = () => {
    return (
        <>
         <Navbar bg="dark" expand="lg">
         <Container>
            <Navbar.Brand href="#home">KJRI API</Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">LogIn</Nav.Link>
                </Nav>
            </Navbar.Collapse> 
            </Container>
        </Navbar>
       
        </>
    )
}

export default Header

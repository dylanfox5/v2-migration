import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import './MyNavbar.css';

function MyNavbar() {
    return (
        <Navbar sticky="top" variant="dark" expand="lg" className="shadow animate__animated animate__fadeInDown animate__delay-1s">
            <Container>
                <Navbar.Brand href="/">dfox</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav navbarScroll>
                        <Nav.Link id="home" href="#home" className="active">home</Nav.Link>
                        <Nav.Link href="#about">about</Nav.Link>
                        <Nav.Link href="#experience">experience</Nav.Link>
                        <Nav.Link href="#projects">projects</Nav.Link>
                        <Nav.Link href="#contact">contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNavbar;

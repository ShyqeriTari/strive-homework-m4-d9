import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MyNavbar = () => (
    
    <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
            <Navbar.Brand href="#home">Strive Books</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Link to={'/'}>
                <div className='nav-link'>Home</div>
                </Link>
                <Nav.Link href="">About</Nav.Link>
                <Nav.Link href="">Browse</Nav.Link>
                <Link to={'/register'}>
                <div className='nav-link'>Register</div>
                </Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
)
    


export default MyNavbar
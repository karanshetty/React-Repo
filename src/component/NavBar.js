import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { InputGroup } from 'react-bootstrap';

function NavHeader() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="#" >VEIRDO</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#">NEW ARRAIVAL</Nav.Link>
                        <Nav.Link href="#">NEW ARRAIVAL</Nav.Link>
                        <Nav.Link href="#">MAN</Nav.Link>
                        <Nav.Link href="#">WINTER COLLECTION</Nav.Link>
                        <Nav.Link href="#">SHOP BY MARCH</Nav.Link>
                        <Nav.Link href="#">UNISEX</Nav.Link>

                    </Nav>
                    <Form className="d-flex">
                        <InputGroup className="shadow mb-2 bg-info rounded">
                            <Form.Control
                                placeholder='type searching "t-shirt"'
                                aria-label="search"
                                aria-describedby="search"
                            />
                            <InputGroup.Text id="search"><i class="bi bi-search"></i></InputGroup.Text>
                        </InputGroup>
                    </Form>
                    <Form className="d-flex mb-2 mx-3">
                        <i class="bi bi-person p-2"></i>
                        <i class="bi bi-heart p-2"></i>
                        <i class="bi bi-cart p-2"></i>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavHeader;
import { Container, Row, Col, Form, InputGroup, Accordion, Button } from "react-bootstrap";

const media = ['INSTAGRAM', 'WHATSAPP', 'LINKEDIN', 'TWITTER']
const Footer = () => {
    return (
        <>
            <Container fluid className='bg-success p-5'>
                <Row>
                    <Col sm={12} md={6} className='text-light'>
                        <p className='fs-2 fw-bolder'>JOIN OUR VEIRDO FAM</p>
                        <p className='fw-light'>Here is the space for marketing bro's to use some combination of alphabets to convience people to give their email.</p>
                    </Col>
                    <Col sm={12} md={6} className='my-5'>
                        <InputGroup className="shadow bg-info rounded">
                            <Form.Control
                                placeholder='veirdo@yahoo.com'
                                aria-label="search"
                                aria-describedby="search"
                            />
                            <InputGroup.Text id="search" className='text-light bg-danger'>SUBSCRIBE</InputGroup.Text>
                        </InputGroup>
                    </Col>
                </Row>
                <p className='fs-5 fw-bolder'>SPOT US ON</p>
                <Row>
                    {
                        media.map((item, key) =>
                            <Col sm={6} md={3} className='border border-dark' key={key}>
                                <p className='text-center pt-3 fw-bolder'>{item}</p>
                            </Col>
                        )
                    }
                </Row>
                <div className='d-none d-sm-none d-md-block py-4'>
                    <Row>
                        <Col md={6}>
                            <p className='fs-5 fw-bolder'>CATEGORIES</p>
                            <Row>
                                <Col md={6}>NEW ARRIVALS</Col>
                                <Col md={6}>SWEATSHIRTS</Col>
                                <Col md={6}>BESTSELLERS</Col>
                                <Col md={6}>TSHIRTS</Col>
                                <Col md={6}>WINTER-WEAR</Col>
                                <Col md={6}>VESTS</Col>
                                <Col md={6}>T-SHIRTS</Col>
                                <Col md={6}>OVERSIZED T-SHIRTS</Col>
                                <Col md={6}>SHORTS</Col>
                                <Col md={6}>UNISEX</Col>
                            </Row>
                        </Col>
                        <Col md={3}>
                            <p className='fs-5 fw-bolder'>COMPANY</p>
                            <Row>
                                <Col md={12}>ABOUT US</Col>
                                <Col md={12}>BLOG</Col>
                                <Col md={12}>PRIVACY POLICY</Col>
                                <Col md={12}>TERMS & CONDITIONS</Col>
                                <Col md={12}>WORK WITH US</Col>
                            </Row>
                        </Col>
                        <Col md={3}>
                            <p className='fs-5 fw-bolder'>FOR CUTOMERS</p>
                            <Row>
                                <Col md={12}>CONTACT US</Col>
                                <Col md={12}>FAQ'S</Col>
                                <Col md={12}>TRACK ORDER</Col>
                                <Col md={12}>RETURN POLICY</Col>
                                <Col md={12}>SHIPPING POLICY</Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
                <div className='d-sm-block d-md-none py-4 changeColor'>
                    <Accordion flush>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header className='bg-success'>CATEGORIES</Accordion.Header>
                            <Accordion.Body className='bg-success'>
                                <ul>
                                    <li>NEW ARRIVALS</li>
                                    <li>SWEATSHIRTS</li>
                                    <li>BESTSELLERS</li>
                                    <li>TSHIRTS</li>
                                    <li>WINTER-WEAR</li>
                                    <li>VESTS</li>
                                    <li>T-SHIRTS</li>
                                    <li>OVERSIZED T-SHIRTS</li>
                                    <li>SHORTS</li>
                                    <li>UNISEX</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>NEED HELP</Accordion.Header>
                            <Accordion.Body className='bg-success'>
                                <ul>
                                    <li>CONTACT US</li>
                                    <li>FAQ'S</li>
                                    <li>TRACK ORDER</li>
                                    <li>RETURN POLICY</li>
                                    <li>SHIPPING POLICY</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>ABOUT US</Accordion.Header>
                            <Accordion.Body className='bg-success'>
                                <ul>
                                    <li>ABOUT US</li>
                                    <li>BLOG</li>
                                    <li>PRIVACY POLICY</li>
                                    <li>TERMS & CONDITIONS</li>
                                    <li>WORK WITH US</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
                <div>
                    <p className='fw-lighter fs-6'>© 2024 VEIRDO. All Rights Reserved by Pratyaya E-commerce Pvt. Ltd.</p>
                </div>
            </Container>
            <div className='d-md-none d-sm-block bg-light my-3'>
                <Button variant="success" className='shadow mb-2 rounded' style={{ width: '100%' }}>ADD TO CART</Button>
            </div>
        </>
    )
}
export default Footer;
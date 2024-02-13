import { Container, Row, Col, Card, Button, Carousel } from "react-bootstrap";

const RecentProduct = ({ product }) => {
    return (
        <Container>
            <hr />
            <p className='fs-5 fw-bolder'>RECENTLY VIEWED PRODUCT</p>
            <div className='d-none d-md-block'>
                <Row>
                    {
                        product.map((item, key) =>
                            <Col md={6} lg={3} className='my-2' key={key}>
                                <Card className="mx-2" style={{ width: 'auto' }}>
                                    <Card.Img variant="top" src={item.image} />
                                    <Card.Body>
                                        <div className='flex-grow-1'>
                                            <div className='d-flex flex-row'>
                                                <p className='fs-5 fw-bolder pe-2'>₹{item.price}</p>
                                                <p className='fs-5 text-decoration-line-through align-baseline pe-2'>₹{item.orgPrice}</p>
                                                <p className='fs-5 text-success fw-bolder'>{item.offer}</p>
                                            </div>
                                            <div>
                                                <p className='fw-medium'>{item.name}</p>
                                                <div className='d-flex flex-row'>
                                                    <i class="bi bi-star-fill text-warning pt-1 pe-2"></i>
                                                    <p className='fs-5 fw-bolder'>{item.rating} </p>
                                                    <p className='fs-5 fw-medium'>| 2K</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                    <div className='d-flex justify-content-between'>
                                        <Button variant="light">Add To Cart</Button>
                                        <Button variant="light" className=''><i class="bi bi-heart p-2"></i></Button>
                                    </div>
                                </Card>
                            </Col>
                        )
                    }
                </Row>
            </div>
            <Carousel className='d-sm-block d-md-none'>
                {
                    product.map((item, key) =>
                        <Carousel.Item className='my-2' key={key}>
                            <Card className="mx-2" style={{ width: 'auto' }}>
                                <Card.Img variant="top" src={item.image} />
                                <Card.Body>
                                    <div className='flex-grow-1'>
                                        <div className='d-flex flex-row'>
                                            <p className='fs-5 fw-bolder pe-2'>₹{item.price}</p>
                                            <p className='fs-5 text-decoration-line-through align-baseline pe-2'>₹{item.orgPrice}</p>
                                            <p className='fs-5 text-success fw-bolder'>{item.offer}</p>
                                        </div>
                                        <div>
                                            <p className='fw-medium'>{item.name}</p>
                                            <div className='d-flex flex-row'>
                                                <i class="bi bi-star-fill text-warning pt-1 pe-2"></i>
                                                <p className='fs-5 fw-bolder'>{item.rating} </p>
                                                <p className='fs-5 fw-medium'>| 2K</p>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                                <div className='d-flex justify-content-between'>
                                    <Button variant="light">Add To Cart</Button>
                                    <Button variant="light" className=''><i class="bi bi-heart p-2"></i></Button>
                                </div>
                            </Card>
                        </Carousel.Item>
                    )
                }
            </Carousel>
        </Container>
    )
}
export default RecentProduct;
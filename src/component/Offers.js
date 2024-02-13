import { Container, Card, ListGroup, Row, Col } from 'react-bootstrap';

const ProductPageOffers = () => {
  return (
    <Container className="d-flex ">
      <Row>
        <Col lg={6} md={12}>
          <Card className="m-2">
            <ListGroup variant="flush">
              <ListGroup.Item className="d-flex align-items-center">
                <i class="bi bi-percent pe-2"></i>
                Avail Free Shipping on Prepaid Orders
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        <Col lg={6} md={12}>
          <Card className="m-2">
            <ListGroup variant="flush">
              <ListGroup.Item className="d-flex align-items-center">
                <i class="bi bi-percent pe-2"></i>
                Get Rs. 100 Off On Orders above Rs. 1200
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductPageOffers;

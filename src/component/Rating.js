import { Container, Row, Col, ProgressBar } from "react-bootstrap";

const customerRating = [
    {
        rating: 5,
        progress: 45,
        review: 15
    },
    {
        rating: 4,
        progress: 90,
        review: 34
    },
    {
        rating: 3,
        progress: 65,
        review: 26
    },
    {
        rating: 2,
        progress: 15,
        review: 5
    },
    {
        rating: 1,
        progress: 10,
        review: 4
    },
]
const Rating = () => {
    return (
        <Container>
            <Row>
                <Col md={12} lg={6}>
                    <div>
                        <p className='fs-4 fw-bolder text-center'>4.0</p>
                        <p className='text-center'>84 reviews</p>
                        <div className='d-flex justify-content-center'>
                            <i class="bi bi-star-fill text-warning"></i>
                            <i class="bi bi-star-fill text-warning"></i>
                            <i class="bi bi-star-fill text-warning"></i>
                            <i class="bi bi-star-fill text-warning"></i>
                            <i class="bi bi-star"></i>
                        </div>
                    </div>
                </Col>
                <Col md={12} lg={6}>
                    {customerRating.map((item, key) => {
                        return (
                            <div className='d-flex ' key={key}>
                                <p className='px-2'>{item.rating}</p>
                                <ProgressBar now={item.progress} style={{ width: '100%' }} variant="success" />
                                <p className='px-2'>({item.review})</p>
                            </div>
                        )
                    })}
                </Col>
            </Row>
        </Container>
    )
}
export default Rating;
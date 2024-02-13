import Carousel from 'react-bootstrap/Carousel';
import product1 from '../Images/product1.webp';
import product2 from '../Images/product2.webp';
import { Container, Row, Col } from 'react-bootstrap';

const images = [
    {
        id: 1,
        image: product1
    },
    {
        id: 2,
        image: product2
    }
]
function ProductView() {
    return (
        <Container className='mt-5'>
            <Carousel slide={false}>
                {images.map(item => {
                    return (
                        <Carousel.Item key={item.id}>
                            <img
                                className="img-fluid"
                                src={item.image}
                                alt="T-shirts"
                            />
                        </Carousel.Item>
                    )
                })}
            </Carousel>
        </Container>
    );
}

export default ProductView;
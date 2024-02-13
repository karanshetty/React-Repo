import ProductPageOffers from './Offers'
import ColorBeige from './ColorBeige';
import SizeSelector from './SizeSelector';
import DeliveryDetails from './DeliveryDetails';
import Rating from './Rating';
import ProductInfo from './ProductInfo';
import ProductPrice from './ProductPrice';
import { Button, Row, Col } from 'react-bootstrap';

const ProductDetails = () => {
    return (
        <div className='mt-5'>
            <ProductPrice />
            <hr />
            <div>
                <p className='fs-5 fw-bolder'>OFFERS</p>
                <ProductPageOffers />
            </div>
            <hr />
            <div>
                <p className='fs-5 fw-bolder'>COLOR BEIGE</p>
                <ColorBeige />
            </div>
            <hr />
            <div>
                <div className='d-flex flex-row'>
                    <p className='fs-5 fw-bolder flex-grow-1'>SELECT SIZE</p>
                    <p className='fs-5 fw-bolder justify-content-end text-danger'>SIZE GUIDE</p>
                </div>
                <SizeSelector />
            </div>
            <div className='d-md-block d-sm-none'>
                <hr />
                <Button variant="outline-success" className='shadow mb-2 rounded' style={{ width: '100%' }}>ADD TO CART</Button>
            </div>
            <hr />
            <div>
                <p className='fs-5 fw-bolder'>CHECK FOR DELIVERY DETAILS</p>
                <DeliveryDetails />
            </div>
            <hr />
            <Row>
                <Col md={12} xs={{ order: 'last' }} sm={{ order: 'last' }} md={{ order: 'first' }}>
                    <p className='fs-5 fw-bolder'>PRODUCT INFORMATION</p>
                    <ProductInfo />
                </Col>
                <hr />
                <Col md={12} xs={{ order: 'first' }} sm={{ order: 'first' }} md={{ order: 'last' }}>
                    <p className='fs-5 fw-bolder'>CUSTOMER RATING</p>
                    <Rating />
                </Col>
            </Row>
        </div>
    )
}
export default ProductDetails;
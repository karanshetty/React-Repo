
import './App.css';
import NavHeader from './component/NavBar';
import ProductView from './component/ProductView';
import ProductDetails from './component/ProductDetails';
import { Container, Col, Row } from 'react-bootstrap';
import SimilarProduct from './component/SimilarProduct';
import RecentProduct from './component/RecentProduct';
import Img1 from './Images/img1.webp';
import Img2 from './Images/img2.webp';
import Img3 from './Images/img3.webp';
import Img4 from './Images/img4.webp';
import Footer from './component/Footer';

const product = [
  {
    image: Img1,
    price: 1999,
    orgPrice: 2999,
    offer: '20% OFF',
    name: 'Flower Printed oversized Fit',
    rating: 4.5
  },
  {
    image: Img2,
    price: 1999,
    orgPrice: 2999,
    offer: '20% OFF',
    name: 'Flower Printed oversized Fit',
    rating: 4.5
  },
  {
    image: Img3,
    price: 1999,
    orgPrice: 2999,
    offer: '20% OFF',
    name: 'Flower Printed oversized Fit',
    rating: 4.5
  },
  {
    image: Img4,
    price: 1999,
    orgPrice: 2999,
    offer: '20% OFF',
    name: 'Flower Printed oversized Fit',
    rating: 4.5
  },
]

function App() {
  return (
    <div>
      <NavHeader />
      <Container className='mb-5'>
        <Row>
          <Col sm={12} md={6}>
            <ProductView />
          </Col>
          <Col sm={12} md={6}>
            <ProductDetails />
          </Col>
        </Row>
        <SimilarProduct product={product} />
        <RecentProduct product={product} />
      </Container>
      <Footer />
    </div>
  );
}

export default App;

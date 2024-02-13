import { Container, Card } from 'react-bootstrap';
import Img1 from '../Images/img1.webp';
import Img2 from '../Images/img2.webp';
import Img3 from '../Images/img3.webp';
import Img4 from '../Images/img4.webp';
import Img5 from '../Images/img5.webp';

const ColorBeige = () => {
  return (
    <Container className="overflow-auto">
      <div className="d-flex">
        <Card className="mx-2" style={{ width: 'auto' }}>
          <Card.Img variant="top" src={Img1} />
        </Card>
        <Card className="mx-2" style={{ width: 'auto' }}>
          <Card.Img variant="top" src={Img2} />
        </Card>
        <Card className="mx-2 shadow bg-danger rounded" style={{ width: 'auto' }}>
          <Card.Img variant="top" src={Img3} />
        </Card>
        <Card className="mx-2" style={{ width: 'auto' }}>
          <Card.Img variant="top" src={Img4} />
        </Card>
        <Card className="mx-2" style={{ width: 'auto' }}>
          <Card.Img variant="top" src={Img5} />
        </Card>
        
      </div>
    </Container>
  );
};

export default ColorBeige;
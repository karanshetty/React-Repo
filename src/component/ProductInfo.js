import Accordion from 'react-bootstrap/Accordion';

const ProductInfo = () => {
    return (
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Product Description</Accordion.Header>
                <Accordion.Body>
                    Manufacture, Care and Fit <br />
                    <ul>
                        <li><b>Style:</b> Casual</li>
                        <li><b>Code:</b> SHT_99</li>
                        <li><b>Pattern Type:</b> Solid</li>
                        <li><b>Clothing's Length:</b> Regular</li>
                        <li><b>Material:</b> 100% Cotton</li>
                    </ul>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Free Shipping</Accordion.Header>
                <Accordion.Body>
                    <ul>
                        <li>Product will be delivered in 5 business days.</li>
                        <li>We offer free shipping across India.</li>
                    </ul>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>14 Days Returns & Exchange</Accordion.Header>
                <Accordion.Body>
                    <ul>
                        <li>Cash on Delivery</li>
                        <li>Free Shipping</li>
                        <li>Easy Returns</li>
                    </ul>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}
export default ProductInfo;
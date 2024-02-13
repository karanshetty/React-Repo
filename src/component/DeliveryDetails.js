import { InputGroup, Form } from 'react-bootstrap';

const DeliveryDetails = () => {
    return (
        <Form className="d-flex">
            <InputGroup className="shadow mb-2 bg-info rounded">
                <Form.Control
                    placeholder='ENTER PINCODE'
                    aria-label="search"
                    aria-describedby="search"
                />
                <InputGroup.Text id="search" className='text-primary'>CHECK</InputGroup.Text>
            </InputGroup>
        </Form>
    )
}
export default DeliveryDetails;
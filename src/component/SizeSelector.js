import React from 'react';
import { Container, ButtonGroup, Button } from 'react-bootstrap';

const sizes = [28, 30, 32, 34, 36, 38, 40, 42];
const SizeSelector = () => {
    return (
        <Container>
            <ButtonGroup aria-label="Size Selector">
                {sizes.map((size, index) => (
                    <Button
                        key={index}
                        variant={size === 32 ? "primary" : "light"}
                        disabled={[38, 40].includes(size) ? true : false}
                    >{size}</Button>
                ))}
            </ButtonGroup>
        </Container>
    );
};

export default SizeSelector;
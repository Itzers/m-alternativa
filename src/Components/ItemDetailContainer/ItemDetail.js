import React from "react";
import ItemCount from "../../ItemCount";
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


const ItemDetail = ({ product }) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={product.img} />
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                    {product.description}
                </Card.Text>
                {/* <Button variant="primary">Detalles del Producto</Button> */}
                <ItemCount stock={product.stock} initial={1} />
            </Card.Body>
        </Card>
    );
};

export default ItemDetail;
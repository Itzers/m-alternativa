import React from "react";
import ItemCount from "../../ItemCount";
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


const ItemDetail = ({ productosHerbolarios }) => {
    return (
            <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={productosHerbolarios.img} />
        <Card.Body>
            <Card.Title>{productosHerbolarios.name}</Card.Title>
            <Card.Text>
                {productosHerbolarios.description}
            </Card.Text>
            <Button variant="primary">Detalles del Producto</Button>
            <ItemCount stock={productosHerbolarios.stock} initial={1} />
        </Card.Body>
    </Card>
    );
};

export default ItemDetail;
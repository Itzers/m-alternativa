import React from "react";
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
//import {link} from 'react-router-dom';

const Item = ({productosHerbolarios}) => {
    const {img, name, description}= productosHerbolarios
    return (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
                {description}
            </Card.Text>
            <Button variant="primary">Detalles del Producto</Button>
        </Card.Body>
        <link to={`/detail/${productosHerbolarios.id}`}>Detalle</link>
    </Card>
    )
}

export default Item
import React from "react";
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import {Link, useNavigate} from 'react-router-dom';

const Item = ({productosHerbolarios}) => {

    const navegar = useNavigate ()
    const {img, name, description, id} = productosHerbolarios
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Button variant="primary" onClick={()=> navegar(`/detail/${id}`)}>Detalles del Producto</Button>
            
            </Card.Body>
        </Card>
    );
};

export default Item
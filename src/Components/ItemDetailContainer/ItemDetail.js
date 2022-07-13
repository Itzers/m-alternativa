import React, {useState} from "react";
import ItemCount from "../../ItemCount";
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";


const ItemDetail = ({ product }) => {
    const [contador, setContador] = useState(0)
    const [compra, setCompra]= useState (false)
    const navegar = useNavigate()
    const onAdd = () => {
        setCompra (true)
    }

    const {img, name, description, stock} = product
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                {/* <Button variant="primary">Detalles del Producto</Button> */}
                <p>Stock disponible: {stock}</p>
                {compra ? <div>
                    <Button onClick={()=>{navegar('/')}}>Seguir Comprando</Button>
                    <Button onClick={()=>{navegar('/cart')}}>Ir Al Carrito</Button> </div>
                :<ItemCount stock={stock} contador={contador} setContador= {setContador} onAdd={onAdd}/>
                }
            </Card.Body>
        </Card>
    );
};

export default ItemDetail;
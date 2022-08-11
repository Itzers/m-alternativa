import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "./Context/CartContext";

const Item = ({ productosHerbolarios }) => {
  const { productos } = useContext(CartContext);
  const { img, name, description, price, id } = productosHerbolarios;
  const isInCart = productos.some((producto) => producto.id === id);
  const navegar = useNavigate();

  return (
    <Card style={{ width: "16rem", marginTop: "1rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>${price}</Card.Text>
        <Button variant="primary" onClick={() => navegar(`/detail/${id}`)}>
          Detalles del Producto
        </Button>
        {isInCart && <h2>En el carrito</h2>}
      </Card.Body>
    </Card>
  );
};

export default Item;

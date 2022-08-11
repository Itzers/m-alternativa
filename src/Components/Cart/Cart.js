import React from "react";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const Cart = () => {
    const { productos, deleteProductos } = useContext(CartContext);
    //console.log(productos);
    return (
        <div> 
            <div>
                {productos.map((producto)=> (
                    <div key={producto.id}>
                        <div>
                        <img src={producto.img} />
                    </div>
                    <h2>Producto: {producto.name}</h2>
                    <h2>$ {producto.price}</h2>
                    <h2>Cantidad: {producto.quantity}</h2>
                    <button onClick={()=>deleteProductos(producto.id)}>Eliminar Producto</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cart;
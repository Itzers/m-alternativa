import React, {createContext, useState } from "react";

export const  CartContext = createContext(); 
const { Provider } = CartContext;

    const CartCustomProvider = ({children}) => {
    
    const [productos, setProductos] = useState ([]);

    const addProductos = (producto) => {
        if(isInCart(producto.id)){
            const carritoActualizado = productos.map((item)=>{
                if(item.id === producto.id){
                    return {...item, quantity: item.quantity + producto.quantity}
                }else{
                    return item
                }
            })
            setProductos(carritoActualizado)
        }else{
            setProductos([...productos, producto])
        }
    };

    const deleteProductos = (id) => {
        setProductos(productos.filter(producto => producto.id !== id ));
    };

    const isInCart = (id) => {
        return productos.some(productos => productos.id === id);
    };

    const getQtyProductos = () => {
        return productos.reduce((acc, item) => acc + item.quantity, 0)
    };

    const getTotalPrice = () => {
        return productos.reduce((acc, item) => acc += item.quantity*item.price, 0)
    }
    const clear = () => {
        setProductos([]);
    }

        
    return (
        <Provider value={{productos,addProductos,deleteProductos,getQtyProductos,clear}}>
            {children}
        </Provider>
        
    )
}

export default CartCustomProvider
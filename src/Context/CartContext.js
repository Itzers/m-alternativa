import React, {createContext, useState, useSyncExternalStore } from "react";

export const  CartContext = createContext(); 
const { Provider } = CartContext;

    const CartCustomProvider = ({children}) => {
    
    const [productos, setProductos] = useState ([{name:'Jose'},{name:'maria'},{name:'brian'}]);

    const addProductos = (producto) => {
        console.log("agregar Producto");
    };

    const deleteProductos = (id) => {
        setProductos(productos.filter(producto => producto.id !== id ));
    };

    const isInCart = (id) => {
        return productos.some(productos => productos.id === id);
    };

    const getQtyProductos = () => {
        const qty = 0;
        productos.forEach(producto => qty += producto.qty);
        return qty;
    };

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
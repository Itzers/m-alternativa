import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { getCardContentUtilityClass } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CartWidget = () =>{
    const navegar = useNavigate()
    return (
        <button style={styles.carrito} onClick={()=> navegar('/cart')}> <ShoppingCartIcon color="success" sx={{ fontSize: 50 }} />  </button>
    )
}

const styles = {
    carrito:{
        background: 'none',
        color: 'inherit',
        border: 'none',
        cursor: 'pointer',
        outline: 'inherit',
},
}

export default CartWidget


import React from "react";
import logo from "../../assets/logo2m-alter.webp"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { getCardContentUtilityClass } from "@mui/material";
//import "./Header.css"

const Header = () =>{
    return (
    <header style = {styles.container}>
        <img style = {styles.imagen} src={logo} alt="" />
        <h1>NATURALEZA PARA TU CUERPO</h1>
        <nav>
            <a style={styles.anchors} href="">Home</a>
            <a style={styles.anchors} href="">Extractos</a>
            <a style={styles.anchors} href="">Aceites</a>
            <a style={styles.anchors} href="">Contacto</a>
        </nav>
        <ShoppingCartIcon color="success" sx={{ fontSize: 50 }} />  
    </header>
    )
}

const styles = {
    container:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#a9a9a9',
    },
    imagen: {
        width: '10%',
    },
    anchors: {
        color: `#006400`,
        padding: 10
        
    },
}

export default Header
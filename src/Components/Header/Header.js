import React from "react";
import logo from "../../assets/logo2m-alter.webp"
import { getCardContentUtilityClass } from "@mui/material";
import CartWidget from "./CartWidget";

//import "./Header.css"

const categories =[
    {id:1, path:'/', name: 'Home',},
    {id:2, path:'category/Extractos', name: 'Extractos',},
    {id:3, path:'category/Aceites', name: 'Aceites',},
    {id:4, path:'category/Contacto', name: 'Contacto',},
];

const Header = () =>{
    return (
    <header style = {styles.container}>
        <img style = {styles.imagen} src={logo} alt="" />
        <h1>NATURALEZA PARA TU CUERPO</h1>
        <ul>
            {categories.map((category) => (
                <link to={category.path} key={category.id}>{category.name}</link>
            ))}
        {/* <nav>
            <a style={styles.anchors} href="">Home</a>
            <a style={styles.anchors} href="">Extractos</a>
            <a style={styles.anchors} href="">Aceites</a>
            <a style={styles.anchors} href="">Contacto</a>
        </nav> */}
        </ul>
        <CartWidget />
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
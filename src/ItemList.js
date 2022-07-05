import React from "react"
import Item from "./Item"

const ItemList = ({productList}) => {
    return (
        <div>
            <h3>Lista de productos</h3>
            <div style={styles.productosHerbolarios}>
            {productList.map((productosHerbolarios)=><Item key={productosHerbolarios.id} productosHerbolarios={productosHerbolarios}/>)}
            </div>
        </div>
    )
}

const styles = {
    productosHerbolarios:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
    }
}

export default ItemList
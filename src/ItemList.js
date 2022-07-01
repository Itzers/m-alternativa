import React from "react"
import Item from "./Item"

const ItemList = ({productList}) => {
    return (
        <div>
            <h3>Lista de productos</h3>
            {productList.map((product)=><Item/>)}
        </div>
    )
}

export default ItemList
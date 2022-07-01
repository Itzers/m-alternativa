import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';

const ItemListContainer = ({ greeting }) => {
    const [productList, setProductList]=useState([])
const productosHerbolarios = [
    {id:'01', description: "Alga Espirulina", name: 'espirulina', price:100, img: 'https://picsum.photos/id/237/200/300', stock: 20},
    {id:'02', description: "petiveria alliacea", name: 'petiveria', price:50, img: 'https://picsum.photos/id/237/200/300', stock:10},
    {id:'03', description: "Eryngium heterophyllum", name: 'pc300', price:150, img: 'https://picsum.photos/id/237/200/300', stock:70},
    {id:'04', description: "Hongo Melena de Leon", name: 'melenaLeon', price: 200, img: 'https://picsum.photos/id/237/200/300', stock:60},
];

    const getData = new Promise ((resolve, reject) =>{
        let condition = true
        setTimeout(()=>{
            if(condition){
                resolve(productosHerbolarios)
            }else{
                reject(console.log('salio mal'))
        }
        },2000)
    })

        useEffect(()=>{
            getData
            .then((result)=> setProductList(result))
        },[])

    console.log(productList);
    return (
        <div style= {styles.landing}>
            <span>{greeting}</span>
            <ItemList productList={productList} />
        </div>
    );
}


const styles = {
    landing:{
        width:'100%',
        height: 'calc (100vh-60px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
}

export default ItemListContainer
import React, { useState } from "react";
import {useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetailContainer/ItemDetail';
import { useEffect } from "react";
import { getData } from "../../mocks/fakeApi";


const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading]=useState(true)

    const {id} = useParams();

    // useEffect(() =>{
    //     setLoading (true);
        
    //     const URL = `https://fakestoreapi.com/products/${id}`;
    //     fetch (URL)
    //         .then(res=>res.json())
    //         .then(json=> setProductList(json))
    //         .finally(() => {
    //             setLoading (false);
    //         });
        
    // }, [id]);

    const getProductoHerbolario = async () => {
        try{
            const respuesta = await getData
            setProduct(respuesta.find((item) => item.id === id))
        }catch(error){
            console.log(error)
        }finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        getProductoHerbolario()
    },[])

    return (
        <div>
            {loading ? (<p>Cargando...</p>) : (
            <>
            <ItemDetail product={product} /> 
            </>
            )}
        </div>
    );
};

export default ItemDetailContainer

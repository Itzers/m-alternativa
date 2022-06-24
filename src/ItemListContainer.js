import React from 'react';

const ItemListContainer = ({ greeting }) => {
    return (
        <div style= {styles.landing}>
            <span>{greeting}</span>
        </div>
    );
};

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
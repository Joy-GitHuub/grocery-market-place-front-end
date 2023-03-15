import React from 'react';
import { useParams } from 'react-router-dom';

const Hello = () => {
    // const { productId } = useParams();
    const {productID} = useParams()
    console.log(productID);
    return (
        <div>
            
        </div>
    );
};

export default Hello;
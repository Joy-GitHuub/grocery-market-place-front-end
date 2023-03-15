import { useState } from 'react';

import useAuth from './../Context/useAuth';



const useHandleToCart = () => {
    const [isSuccess, setIsSuccess] = useState(false);


    const { carts } = useAuth();
    const [cart, setCart] = carts;





    const handleAddToCart = (product) => {
        product.orderStatus = 'pending';
        if (!product.quantity) {
            let newCart = [];
            const exists = cart.find((food) => food._id === product._id);
            product.quantity = 1;
            if (!exists) {
                newCart = [...cart, product];
            } else {
                const rest = cart.filter((food) => food._id !== product._id);
                newCart = [...rest, product];
            }
            setCart(newCart);
            setIsSuccess(true);
        }

    }
    return { isSuccess, handleAddToCart, setIsSuccess }
};

export default useHandleToCart;
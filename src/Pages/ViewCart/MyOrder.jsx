import React from 'react';
import './Style/MyOrder.css';

const MyOrder = ({product, cart, setCart, setUpdate}) => {
    const {_id,imageURL, name, price, quantity, discountPrice} = product
    const discount = ((price /100 ) * discountPrice)
    const productPrice = ((price- discount).toFixed(2));

    const [productQuantity, setProductQuantity] = React.useState(quantity);


    const handleIncreaseQuantity = (id) => {
        setProductQuantity(parseInt(productQuantity) + 1);
        const product = cart.find((pro) => pro._id === id);
        product.quantity = productQuantity + 1;
        const newCart = [...cart];
        setCart(newCart);
    }

    const handleDecreaseQuantity = (id) => {
        if (productQuantity > 1) {
        setProductQuantity(parseInt(productQuantity) - 1)
        const product = cart.find((pro) => pro._id === id);
        product.quantity = productQuantity - 1;
        const newCart = [...cart];
        setCart(newCart);
        }
    };

    const handleRemoveCart = (id) => {
        const restCart = cart.filter((product) => product._id !== id);
         setCart(restCart);
     };

    const totalPrice = (productPrice * productQuantity).toFixed(2);

    return (
        <div className='single_product_cart_wrap'>
            <div className="checkOut_image_wrap">
                <img src={imageURL[0]} alt="" />
            </div>
            <div className="checkOut_name_price_wrap">
                <h3>{name}</h3>
                <p>$ {productPrice} * {quantity}</p>
            </div>
            <div className="checkOut_quantity_update_wrap">
                <div
                onClick={() => handleDecreaseQuantity(_id)}
                className="checkOut_quantity_decrease">-</div>
                <input type="text" value={productQuantity} />
                <div
                onClick={() => handleIncreaseQuantity(_id)}
                className="checkOut_quantity_increase">+</div>
            </div>

            <div className="checkOut_singleProduct_price_wrap">
                <p>$ {totalPrice} </p>
            </div>

            <div
            onClick={()=> handleRemoveCart(_id)}
            className="checkOut_singleProduct_delete_wrap">
            <i className="fa fa-trash" aria-hidden="true"></i>
            </div>

        </div>
    );
};

export default MyOrder;
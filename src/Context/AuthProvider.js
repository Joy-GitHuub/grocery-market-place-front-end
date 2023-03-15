import React, { createContext } from 'react';
import useHandleToWish from '../Hooks/useHandleToWish';
import useOrderProduct from '../Hooks/useOrderProduct';
import useCart from './../Hooks/useCart';
import useFirebase from './../Hooks/useFirebase';
import useBillingDetails from './../Hooks/useBillingDetails';
import useShippingDetails from './../Hooks/useShippingDetails';
import useViewOrder from './../Hooks/useViewOrder';



export const context = createContext();

const AuthProvider = ({ children }) => {
    const [cart, setCart] = useCart();

    const { wishList, setWishList, handleWishList } = useHandleToWish();

    const { orderProduct, setOrderProduct } = useOrderProduct();

    const { user, authError, isLoading, handleCreateUser, handleLoginUser, logOut, handleResetPassword } = useFirebase();

    const { billingDetails, setBillingDetails } = useBillingDetails();

    const { shippingDetails, setShippingDetails } = useShippingDetails();

    const { viewOrderId, setViewOrderId } = useViewOrder();


    return (
        <context.Provider value={{ carts: [cart, setCart], wish: [wishList, handleWishList, setWishList], order: { orderProduct, setOrderProduct }, firebase: { user, authError, isLoading, handleCreateUser, handleLoginUser, logOut, handleResetPassword }, billDetail: { billingDetails, setBillingDetails }, shippingDetail: { shippingDetails, setShippingDetails }, viewOrder: { viewOrderId, setViewOrderId } }}>
            {children}
        </context.Provider>
    )

};

export default AuthProvider;
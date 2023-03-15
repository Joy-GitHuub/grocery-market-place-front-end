import React from 'react';
import useAuth from './../../../Context/useAuth';
import './ViewOrder.css'
import { Link } from 'react-router-dom';
import ReactToPrint from 'react-to-print';
import { border } from '@mui/system';

const ViewOrder = () => {
    const {viewOrder} = useAuth();
    const {viewOrderId} = viewOrder
    const [order, setOrder] = React.useState({});
    React.useEffect(() => {
        const url = `https://market-place-server-site.vercel.app/api/v1/order/viewOrder/${viewOrderId}`
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            setOrder(data.data)
        })
    } , [viewOrderId]);
    const {orderID, date, status, orderProduct, totalPrice, paymentMethods} = order;

    let subTotal = 0;
    if (orderProduct) {
        for (const product of orderProduct) {
            const discount = ((product.price /100 ) * product.discountPrice)
            const productPrice = ((product.price- discount).toFixed(2) * product.quantity);
           subTotal = subTotal + productPrice;
        };
    };


    const ref = React.useRef();

    return (
      <section ref={ref}>
      {orderProduct && paymentMethods &&  <section className='order_details_section'>
            <div  className="order_details_container_header">
                <h4>Order <span>#{orderID}</span> was placed on <span>{date} </span> and is currently <span>{status}</span>.</h4>
            </div>

            <h3 className='order_details_header'>Order Details</h3>


            <div className="order_section_container_wrap">
            <table className='table_wrap'>
                    <tr>
                      <th>Product</th>
                      <th>Total</th>
                    </tr>
                   {
                    orderProduct?.map((product, index) => 
                        <>
                             <tr className='single_row'>
                            <td className='product_name_row product-name-hover'>{product.name}  × {product.quantity}</td>
                            <td className='total_side-col'>
                                ${(((product?.price) - ((product.price / 100) * product.discountPrice)).toFixed(2) * (product.quantity)).toFixed(2)}
                            </td>
                            </tr>
                        </>
                    )
                   }

                   <tr className='subTotal_row'>
                    <td className='col'>Sub-Total:</td>
                    <td className='total_side-col'>${subTotal.toFixed(2)}</td>
                   </tr>
                   <tr className='subTotal_row'>
                    <td className='col'>Shipping-Cost:</td>
                    <td className='total_side-col'>${(totalPrice-subTotal).toFixed(2)}</td>
                   </tr>

                   <tr className='subTotal_row'>
                    <td className='col'>Total-Cost:</td>
                    <td className='total_side-col'>${(totalPrice).toFixed(2)}</td>
                   </tr>
                   <tr className='subTotal_row'>
                    <td className='col'>Payment-Methods</td>
                    <td className='total_side-col'>
                    {paymentMethods.cashOnDelivery === true ? "Cash On Delivery" : paymentMethods.checkPayment === true ? "Check Payment" : "Direct Bank Transfer"}
                    </td>
                   </tr>
            </table>
                <Link to='/' className='back-to-home'>{`Back To Home > `}</Link>
               <ReactToPrint trigger={()=>  <button style={{outline: '0', border: '1px solid gray', padding: '10px 20px', borderRadius: '30px', cursor: 'pointer'}}>Download Your Order PDF</button>} content={() => ref.current } ></ReactToPrint>
            </div>

        </section>}
      </section>
    );
};

export default ViewOrder;
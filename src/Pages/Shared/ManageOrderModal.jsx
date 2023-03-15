import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Link } from 'react-router-dom';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    border: '0px solid #000',
    boxShadow: 24,
    p: 4,
    maxHeight: '450px',
    overflow: 'scroll',
    overflowX: "hidden",
  };



const ManageOrderModal = ({handleClose, open, viewOrderID}) => {
    const [order, setOrder] = React.useState({});

    React.useEffect(() => {
        const url = `https://market-place-server-site.vercel.app/api/v1/order/viewOrder/${viewOrderID}`
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            setOrder(data.data)
        })
    } , [viewOrderID]);
    const {orderID, date,  orderProduct, totalPrice, paymentMethods, userInfo} = order;

    let subTotal = 0;
    if (orderProduct) {
        for (const product of orderProduct) {
            const discount = ((product.price /100 ) * product.discountPrice)
            const productPrice = ((product.price- discount).toFixed(2) * product.quantity);
           subTotal = subTotal + productPrice;
        };
    };


    const handleOrderStatus = (e) => {
      const updateData = {status: e.target.value};
      const url = `https://market-place-server-site.vercel.app/api/v1/order/updateOrderStatus/${viewOrderID}`
      fetch(url, {
        method:'PATCH',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(updateData),
      }).then((res) => res.json())
      .then((data) => {
      })
    }


    return (
  <div>
    
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
<Box sx={style}>
        {orderProduct && paymentMethods &&<div className="order_section_container_wrap">

            <h3>Order Details</h3>
            <table className='table_wrap'>
                    <tr>
                      <th>Product</th>
                      <th>Total</th>
                    </tr>
                    <tr className='subTotal_row'>
                    <td className='product_name_row'>Order-ID</td>
                    <td className='total_side-col'>{orderID}</td>
                   </tr>
                    <tr className='subTotal_row'>
                    <td className='product_name_row'>User-Name</td>
                    <td className='total_side-col'>{userInfo[0].userName}</td>
                   </tr>
                    <tr className='subTotal_row'>
                    <td className='product_name_row'>User-Email</td>
                    <td className='total_side-col'>{userInfo[0].userEmail}</td>
                   </tr>
                   {
                    orderProduct?.map((product, index) => 
                             <tr className='single_row'
                             key={index}
                             >
                            <td className='product_name_row product-name-hover'>{product.name}  × {product.quantity}</td>
                            <td className='total_side-col'>
                                ${(((product?.price) - ((product.price / 100) * product.discountPrice)).toFixed(2) * (product.quantity)).toFixed(2)}
                            </td>
                            </tr>
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
                    <td className='col'>Order-Date:</td>
                    <td className='total_side-col'>{date}</td>
                   </tr>
                   <tr className='subTotal_row'>
                    <td className='col'>Payment-Methods</td>
                    <td className='total_side-col'>
                    {paymentMethods.cashOnDelivery === true ? "Cash On Delivery" : paymentMethods.checkPayment === true ? "Check Payment" : "Direct Bank Transfer"}
                    </td>
                   </tr> 
                   <tr className='subTotal_row'>
                    <td className='col'>Status</td>
                    <td className='total_side-col'>
                    <select style={{cursor: 'pointer'}} onChange={handleOrderStatus}>
                                    <option>Select Status---</option>
                                    <option value="Pending">Pending</option>
                                    <option value="Shipping">Shipping</option>
                                    <option value="Delivery">Delivery</option>
                                    <option value="Canceled">Canceled</option>
                                    <option value="Failed">Failed</option>
                                    <option value="On-Hold">On-Hold</option>
                                    <option value="Pending Payment">Pending Payment</option>
                                    <option value="Processing">Processing</option>
                                    <option value="Refunded">Refunded</option>
                                    <option value="Out-Of-Stock">Out-Of-Stock</option>

                                    </select>
                    </td>
                   </tr> 
            </table>
                <Link to='/' className='back-to-home'>{`Back To Home > `}</Link>
        </div>}
        </Box>
      </Modal>
    </div>
    );
};

export default ManageOrderModal;
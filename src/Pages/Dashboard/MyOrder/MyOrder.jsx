import React from 'react';
import './MyOrder.css'
import useAuth from './../../../Context/useAuth';
import { useNavigate } from 'react-router-dom';


const MyOrder = () => {

  const [order, setOrder] = React.useState([])

  const {firebase, viewOrder} = useAuth();

  const {user} = firebase;
  React.useEffect(()=> {
      const url = `https://market-place-server-site.vercel.app/api/v1/order/${user?.email}`
  fetch(url, {
   headers: {'authorization': `Bearer ${sessionStorage.getItem('ID_TOKEN')}`} 
  })
  .then(res => res.json())
  .then((data) => {
      setOrder(data.data);
  });
  } ,[user?.email])


  const navigate = useNavigate();
  const {setViewOrderId} = viewOrder;
  const handleViewOrder = (id) => {
    setViewOrderId(id);
    navigate(`/dashboard/viewOrder`);
  };
  // console.log(order);

    return (
       <>
        {order &&<section className='my_order_page_section_container'>
            <div className="my_order_page_header">
                <h3>My-Order History</h3>
            </div>


        <div className="my_order_page_order_table">
        <table className="customers">
  <tr>
    <th>Order</th>
    <th>Date</th>
    <th>Status</th>
    <th>Total</th>
    <th>Actions</th>
    </tr>
        {
          order?.map((order, index) => <tr
          key={index}
          >
             <td>{`#${order.orderID}`}</td>
             <td>{order.date}</td>
                {order.status === 'Pending' &&<td className='pending'>{order.status}</td>}
                {order.status === 'Delivery' &&<td className='delivery'>{order.status}</td>}
                {order.status === 'Shipping' &&<td className='shipping'>{order.status}</td>}
                {order.status === 'Canceled' &&<td>{order.status}</td>}
                {order.status === 'Failed' &&<td>{order.status}</td>}
                {order.status === 'On-Hold' &&<td>{order.status}</td>}
                {order.status === 'Pending Payment' &&<td>{order.status}</td>}
                {order.status === 'Processing' &&<td>{order.status}</td>}
            <td>${`${order.totalPrice} for ${order.orderProduct.length} items`}</td>
              <td><button className='action-btn' onClick={() => handleViewOrder(order._id)}>View</button></td> 
          </tr>)
        }
</table>
        </div>

        </section>}
       </>
    );
};

export default MyOrder;
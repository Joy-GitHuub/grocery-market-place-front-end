import React from 'react';
import ManageOrderModal from '../../Shared/ManageOrderModal';
import './ManageOrder.css';


const ManageOrder = () => {

    const [orders, setOrders] = React.useState([]);
    const [allOrders, setAllOrders] = React.useState([]);
    const toDay = new Date().toDateString();
    const [selectOrderStatus, setSelectOrderStatus] = React.useState('');
    const [refresh, setRefresh] = React.useState(1);


    // const twoDay = new Date(new Date().getTime() - 1 * 24 * 60 * 60 * 1000).toDateString();
    // console.log(twoDay);
    // const [weekMonth, setWeekMonth] = React.useState('');

    const handleOrderStatus = (e) => {
        setSelectOrderStatus(e.target.value);
    };


    React.useEffect(() => {
        console.log(`Call`);
        const url = `https://market-place-server-site.vercel.app/api/v1/order?${selectOrderStatus}`
        // const url = `https://market-place-server-site.vercel.app/api/v1/order?${selectOrderStatus}&weekMonth[gte]=${weekMonth}`
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            if (data.statusbar) {
                setOrders(data.data);
            }
        });
    }, [selectOrderStatus, refresh]);
    React.useEffect(() => {
        console.log(`Call`);
        const url = `https://market-place-server-site.vercel.app/api/v1/order`
        // const url = `https://market-place-server-site.vercel.app/api/v1/order?${selectOrderStatus}&weekMonth[gte]=${weekMonth}`
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            if (data.statusbar) {
                setAllOrders(data.data);
            }
        });
    }, [selectOrderStatus, refresh]);


    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [viewOrderID, setOrderID] = React.useState('');

    const handleOrderId = (id) => {
        setOrderID(id);
    };


    const handleRefresh = () => {
        setRefresh(refresh + 1)
    };

    const pendingOrder = allOrders?.filter((product) =>(product.status === 'Pending'))
    const todayOrder = allOrders?.filter((product) => product.date === toDay);
    const deliverOrder = allOrders?.filter((product) => product.status === 'Delivery');



    return (
<>
{orders.length && <section className='manage_order_section'>
            <div className="manage_order_date_wrap">
                    <h4> <i className="fa fa-calendar" aria-hidden="true"></i> {toDay}</h4>
            </div>

            <div className="manage_order_header">
                <h3>Manage-Orders</h3>
            </div>


            <div className="totalOrder_pendingOrder_deliveryOrder_wrap">
                <div className="totalOrder_number_wrap">
                    <h4>Total Order {orders.length}</h4>
                </div>
                <div className="pendingOrder_number_wrap">
                    <h4>Pending Order {pendingOrder.length}</h4>
                </div>
                <div className="toDayOrder_number_wrap">
                    <h4>Today Order {todayOrder.length}</h4>
                </div>
                <div className="deliveryOrder_number_wrap">
                    <h4>Delivery Order {deliverOrder.length}</h4>
                </div>
            </div>


            <div className="manage_order_selector_wrap">
                <button onClick={handleRefresh} className='refresh-btn'>Refresh <i className="fa fa-refresh" aria-hidden="true"></i></button>
                <div className="select_order_different">
                <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                    <select onChange={handleOrderStatus}>
                        <option value="">All Order</option>
                        <option value="status=Pending">Pending Order</option>
                        <option value="status=Delivery">Delivery Order</option>
                        <option value={`date=${toDay}`}>Today Order</option>
                    </select>
                </div>

                <div className="select_weekly_different">
                <i className="fa fa-calendar" aria-hidden="true"></i>
                    <select>
                        <option value="weekly">Weekly</option>
                        <option value="monthly">Monthly</option>
                    </select>
                </div>
            </div>

            
            <section className='manage_order_table_section_wrap'>
                <table className='manage_order_table'>
                                <tr>
                                    <th><i className="fas fa-id-card"></i> Order-ID</th>
                                    <th><i className="fa fa-calendar" aria-hidden="true"></i> Ordered Date</th>
                                    {/* <th><i className="fas fa-box"></i> Product Name</th> */}
                                     <th><i className="fas fa-tag"></i> Product Price</th>
                                    <th><i className=""></i>Status</th>
                                    <th><i className="fa-regular fa-signal-bars"></i><i className="fas fa-tasks"></i> Action</th>
                                </tr>
                                {
                            orders?.map((order, index) => <tr
                            key={index}>
                                  <td>{order?._id}</td>
                                  <td>{order?.date}</td>
                                  <td>{order?.totalPrice}</td>
                                  <td>{order?.status}</td>
                                  <td onClick={() => handleOrderId(order?._id)}> <button onClick={handleOpen} className='view_btn'>View</button></td>
                            </tr>
                            )} 
                        </table>
            </section>
            

            
</section>}

        <ManageOrderModal
        open={open}
        handleClose={handleClose}
        viewOrderID={viewOrderID}
        ></ManageOrderModal>
</>
    );
};

export default ManageOrder;
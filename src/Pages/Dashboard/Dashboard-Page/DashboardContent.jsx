import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import useAuth from '../../../Context/useAuth';
import '../Style/DashboardContent.css';
import useAdmin from './../../../Hooks/useAdmin';

const DashboardContent = () => {

    const {admin} =useAdmin();

    const {firebase} = useAuth();
    const {logOut} = firebase;

    return (
        <>
        {
            <section className='dashboard-sidebar-and-content-section'>
            <section className="dashboard-sidebar-section">
                    <div>   
                        <nav>
                            <ul>


                            {admin.role === 'buyer'&&
                            
                                <>
                                <li><Link to={'/dashboard/myOrder'}>
                                <i className="fa fa-cart-plus cart-fa"></i>
                                    <span className='nav-item'>Order</span>
                            </Link></li>
                            <li><Link to={'/dashboard/paymentMethod'}>
                            <i className="fas fa-wallet"></i>
                            <span className='nav-item'>Payment</span>
                            </Link></li>
                            <li><Link to={'/dashboard/customerReview'}>
                            <i className="fas fa-comments"></i>
                            <span className='nav-item'>Review</span>
                            </Link></li>


     
                                </>
                                
                            }


                                {/* <li><Link to={'/dashboard/myProfile'}>
                                <i className="fas fa-user"></i>
                                    <span className='nav-item'>Profile</span>
                                    </Link></li> */}

                


                              {   admin.role === 'admin' &&  <>


                              <li><Link to={'/dashboard/manageProfile'}>
                                <i className="fas fa-user"></i>
                                    <span className='nav-item'>Manage User</span>
                                    </Link></li>

                                    <li><Link to={'/dashboard/manageOrders'}>
                                <i className="fa fa-cart-plus cart-fa"></i>
                                    <span className='nav-item'>Manage Order</span>
                            </Link></li>

                                    <li><Link to={'/dashboard/manageAddProducts'}>
                                    <i className="fa fa-cart-plus cart-fa"></i>
                                    <span className='nav-item'>Add Product</span>
                            </Link></li>


                              <li><Link to={'/dashboard/adminAnalytics'}>
                                    <i className="fas fa-chart-bar"></i>
                                    <span className='nav-item'>Analytics</span>
                                    </Link></li>
           {/*                    <li><Link to={'/dashboard/makeAdmin/:productID'}>
                                    <i className="fas fa-chart-bar"></i>
                                    <span className='nav-item'>Analytics</span>
                                    </Link></li> */}

                                <li><Link to={'/dashboard/manageProducts'}>
                                    <i className="fas fa-tasks"></i>
                                    <span className='nav-item'>Manage Product</span>
                                    </Link></li>

                                    </>}


                                    <li><Link to={'/'}>
                                    <i className="fas fa-home"></i>
                                    <span className='nav-item'>Home</span>
                                    </Link></li>

                                <li><Link  onClick={logOut}  
                                className='sidebar-logout'>
                                    <i className="fas fa-sign-out-alt"></i>
                                    <span className='nav-item' >Log out</span>
                                    </Link></li>
                            </ul>
                        </nav>
                    </div>
            </section>
            <section className="dashboard-content-section">
                    <div>
                       <Outlet></Outlet>
                    </div>
            </section>
        </section>
        }
        </>
    );
};

export default DashboardContent;
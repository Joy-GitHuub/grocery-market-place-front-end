import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/DashboardHeader.css';

const DashboardHeader = () => {
    return (
        <section className='dashboard-header-section'>
            <div className="dashboard-header-wrap">
                <h3>DASHBOARD</h3>
                <div className="dashboard-home-dashboard-wrap">
                    <h5>
                        <Link to={'/'}>Home</Link>
                    </h5>
                    <span></span>
                    <h5>
                        <Link to={'/dashboard'}>Dashboard</Link>
                    </h5>
                </div>
            </div>
        </section>
    );
};

export default DashboardHeader;
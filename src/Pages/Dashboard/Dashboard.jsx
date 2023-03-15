import React from 'react';
import Header from '../Home/Header';
import Footer from '../Shared/Footer';
import Search from '../Shared/Search';
import DashboardContent from './Dashboard-Page/DashboardContent';
import DashboardHeader from './Dashboard-Page/DashboardHeader';

const Dashboard = () => {
    return (
        <div>
            <Header/>
            <Search/>
            <DashboardHeader/>
            <DashboardContent/>
            <Footer/>
        </div>
    );
};

export default Dashboard;
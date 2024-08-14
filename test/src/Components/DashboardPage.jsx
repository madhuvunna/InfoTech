import React from 'react';
import { Link } from 'react-router-dom';

const DashboardPage = () => {
    return (
        <div>
            <h1>Dashboard Page</h1>
            <Link to="/members">Go to Member Page</Link>
        </div>
    );
};

export default DashboardPage;

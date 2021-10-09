import userEvent from '@testing-library/user-event';
import React from 'react';
import useAuth from '../../Hooks/useAuth';
import './Home.css';

const Home = () => {
    const {user} = useAuth();
    return (
        <div className="home">
            <h2>This is home</h2>
            <h4>User: {user.displayName}</h4>
        </div>
    );
};

export default Home;
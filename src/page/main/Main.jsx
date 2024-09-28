import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <div className='main-page'>
            <h1>main</h1>
            <Link to="/calendar" >Calendar</Link>
        </div>
    );
};

export default Main;
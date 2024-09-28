import React from 'react';
import { Link } from 'react-router-dom';

const Calendar = () => {
    return (
        <div className='calendar-page'>
            <h1>Calendar</h1>
            <Link to="/" >Main</Link>
        </div>
    );
};

export default Calendar;
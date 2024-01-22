import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div className='container'>
            <div className='pt-20 pb-72'>
                <h2>Terms and Conditions</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda autem quos facilis inventore quibusdam totam repellendus voluptas non explicabo veniam?</p>
                <p>Go back to <Link className='underline' to="/register">Register</Link></p>
            </div>
        </div>
    );
};

export default Terms;
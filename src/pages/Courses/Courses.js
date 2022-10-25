
import React from 'react';
import LeftNav from '../Shared/LeftNav/LeftNav';

const Courses = () => {
    return (
        <div>
            <h1>This is Courses</h1>
            <div className='container grid grid-cols-2 gap-4'>
                <div><LeftNav></LeftNav></div>
                <div>All Course</div>
            </div>
        </div>
    );
};

export default Courses;
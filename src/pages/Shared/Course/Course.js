import React from 'react';
import { useLoaderData } from 'react-router-dom';
import LeftNav from '../LeftNav/LeftNav';

const Course = () => {
    const courseDetails = useLoaderData()
    console.log(courseDetails)
    return (
        <div className='container m-auto'>
            <h1 className='text-4xl font-bold my-10 text-center'>Our Courses</h1>
            <div className='container flex grid-cols-2 gap-4 mb-16'>
                <div className='w-1/4'><LeftNav></LeftNav></div>
                <div className='w-9/12'>
                    <h1>Course Details</h1>
                    <div>
                        {
                            courseDetails.map(detail=> 
                            <div key={detail.id} className='mt-16'>
                                <div className="card lg:card-side bg-base-100 shadow-xl">
                                <figure><img src="https://placeimg.com/400/400/arch" alt="Album"/></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{detail.name}</h2>
                                    <p>{detail.about}</p>
                                    <p>{detail.subs}</p>
                                    <p>{detail.price}</p>
                                    <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Listen</button>
                                    </div>
                                </div>
                                </div>
                            </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;
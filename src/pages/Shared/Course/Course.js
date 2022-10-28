import React from 'react';
import { useLoaderData } from 'react-router-dom';
import LeftNav from '../LeftNav/LeftNav';
import Pdf from "react-to-pdf"

const Course = () => {
    const ref = React.createRef();
    const courseDetails = useLoaderData()
    console.log(courseDetails)
    return (
        <div className='container m-auto'>
            <h1 className='text-4xl font-bold my-10 text-center'>Our Courses</h1>
            <div className='container flex grid-cols-2 gap-4 mb-16'>
                <div className='w-1/4'><LeftNav></LeftNav></div>
                <div className='w-9/12'>
                    <h1 className='text-center text-2xl font-bold'>Course Details</h1>
                    <div>
                        {
                            courseDetails.map(detail=> 
                            <div key={detail.id} className='mt-16'>
                                <div className="card lg:card-side bg-base-100 shadow-3xl">
                                <figure className='w-96 pl-5'><img src={detail.img} alt="Album"/></figure>
                                <div className="card-body w-1/2">
                                    <div ref={ref}>
                                        <h2 className="card-title text-2xl font-bold">{detail.name}</h2>
                                        <p>{detail.about}</p>
                                    </div>
                                    <p className='text-lg font-semibold'>Our Students: {detail.subs}</p>
                                    <p className='text-lg font-semibold'>Price: {detail.price}</p>
                                    <div className="card-actions justify-start lg:justify-end">
                                    <button className="btn btn-primary shadow-xl mr-5">Get Premium Access</button>
                                    <Pdf targetRef={ref} filename="Details.pdf">
                                    {({ toPdf }) => (
                                    <button onClick={toPdf} className="btn btn-primary shadow-xl">Download Course Details</button>
                                    )}
                                  </Pdf>
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
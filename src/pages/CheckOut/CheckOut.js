import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import swal from "sweetalert";

const CheckOut = () => {
    const courseCheck = useLoaderData()
    const success = () =>{
        swal({
            title: "Successfully Purchased",
            button: "OK",
            icon: "success"
          })
    }; 
    console.log(courseCheck)
    return (
        <div className='bg-amber-400 py-10 m-10'>
            <div className='w-3/4 container m-auto'>
            {
                courseCheck.map(course=> 
                <div key={course.id} className='mt-16'>
                    <div className="bg-base-100 shadow-xl p-5 flex items-center rounded-lg">
                    <div className='w-2/6'><img src={course.img} alt="Courses"/></div>
                    <div className="ml-5">
                        <h2 className="text-3xl font-bold">{course.name}</h2>
                        <p className='text-xl font-semibold mb-5'>Your Order ID: {course.index}</p>
                        <p className='text-xl font-semibold'>Price: {course.price}</p>
                        <div className="mt-5 flex">
                            <button onClick={success} className="btn btn-success mr-5">Check Out Now</button>
                            <Link to={"/"}><button className="btn bg-gray-900 btn-outline text-white">Back to Home</button></Link>
                        </div>
                    </div>
                </div>
                </div>
                )
            }
            </div>
        </div>
    );
};

export default CheckOut;
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import LeftNav from '../Shared/LeftNav/LeftNav';

const Courses = () => {
    const cards = useLoaderData()
    console.log(cards)
    return (
        <div className='container m-auto'>
            <h1 className='text-4xl font-bold my-10 text-center'>Our Courses</h1>
            <div className='container flex grid-cols-2 gap-4 mb-16'>
                <div className='w-5/12 lg:w-1/4'><LeftNav></LeftNav></div>
                <div className='m-auto'>
                    <div className='grid lg:grid-cols-3 lg:gap-8'>
                        {
                            cards.map(card=>
                            <div key={card.id} className=''>
                               <div className="card card-compact w-8/12 lg:w-72 bg-amber-400 shadow-xl">
                                    <figure><img src={card.img} alt="courses"/></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{card.name}</h2>
                                        <p>{card.price}</p>
                                        <p>{card.subs}</p>
                                        <div className="card-actions justify-end">
                                            <Link to={`/courses/${card.id}`}><button className="btn bg-gray-900">Explore Now</button></Link>
                                            
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

export default Courses;
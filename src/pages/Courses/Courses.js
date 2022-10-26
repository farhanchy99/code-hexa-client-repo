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
                <div className='w-1/4'><LeftNav></LeftNav></div>
                <div className='m-auto'>
                    <h1>All Course{cards.length}</h1>
                    <div className='grid grid-cols-3 gap-8'>
                        {
                            cards.map(card=>
                            <div key={card.id} className=''>
                               <div className="card card-compact w-72 bg-base-100 shadow-xl">
                                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{card.name}</h2>
                                        <p>{card.price}</p>
                                        <p>{card.subs}</p>
                                        <div className="card-actions justify-end">
                                            <Link to={`/courses/${card.id}`}><button className="btn btn-primary">Buy Now</button></Link>
                                            
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
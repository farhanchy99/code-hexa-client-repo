import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const LeftNav = () => {
    const[categories, setCategories]= useState([]);

    useEffect(()=>{
        fetch('https://tutorial-website-server.vercel.app/card-categories')
        .then( res => res.json())
        .then( data => setCategories(data))
    }, [])

    return (
        <div className='bg-amber-400 p-10 rounded'>
            <h2 className='lg:text-2xl font-semibold mb-5'>Our courses list: {categories.length}</h2>
            <div>
                {
                    categories.map(category => <p 
                        key={category.id}
                        className="mb-5 text-lg font-semibold"
                        >
                            <Link to={`/courses/${category.id}`}>{category.name}</Link>
                        </p>)
                }
            </div>
        </div>
    );
};

export default LeftNav;
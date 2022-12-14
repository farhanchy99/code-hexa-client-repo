import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptop, faBuilding, faArrowTrendUp, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { Link, useLoaderData } from 'react-router-dom';
import "../Home/Home.css"
import img from "../img/cover-2.jpg"

const Home = () => {
    const cards = useLoaderData()
    console.log(cards)
    return (
        <div>
            <div className="hero h-96 lg:min-h-screen bgcover">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                <p className="mb-5">Start, switch, or advance your career with more than 5,200 courses, Professional Certificates, and degrees from world-class universities and companies.</p>
                <Link to={"/courses"}><button className="btn bg-amber-400">Get Started</button></Link>
                </div>
            </div>
            </div>

            <div className='container m-auto px-5 lg:px-24 my-16'>
                <h1 className='text-center text-4xl my-10 font-bold'>Why Code Hexa Programming Courses works</h1>
                <div className='grid grid-cols-3 gap-5 text-center'>
                    <div>
                        <FontAwesomeIcon icon={faLaptop} className="text-5xl"/>
                        <h1 className='text-xl font-semibold my-5'>Personalized learning</h1>
                        <p className='text-xs lg:text-base'>Students practice at their own pace, first filling in gaps in their understanding and then accelerating their learning.</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faBuilding} className="text-5xl"/>
                        <h1 className='text-xl font-semibold my-5'>Start coding</h1>
                        <p className='text-xs lg:text-base'>Learn by doing, right from the start. Write your first lines of code in the most popular languages.</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faArrowTrendUp} className="text-5xl"/>
                        <h1 className='text-xl font-semibold my-5'>Find your path</h1>
                        <p className='text-xs lg:text-base'>Explore careers in computer science, web development, and data science so you are informed and ready to kickstart your career.</p>
                    </div>
                </div>
            </div>

            <div className="container m-auto card lg:card-side bg-amber-400 shadow-xl w-11/12">
            <figure className='w-full lg:w-1/2 lg:pl-5'><img src={img} alt="Album"/></figure>
            <div className="px-16 p-20 w-full lg:w-3/5">
                <h2 className="card-title text-5xl font-semibold mb-5">Differentiate your classroom and engage every student.</h2>
                <p className='mb-5 text-white'>We empower teachers to support their entire classroom. 90% of US teachers who have used Code Hexa have found us effective.</p>
                <div className="card-actions justify-end">
                    <Link to={"/courses"}><button className="btn bg-gray-900">Join Now</button></Link>
                </div>
            </div>
            </div>

            

            <div className='container m-auto'>
                <h1 className='text-center text-4xl my-10 font-bold'>Our Courses</h1>
                <div className='grid grid-cols-3 gap-4 w-11/12 lg:w-4/6 m-auto mb-10'>
                        {
                            cards.map(card=>
                            <div key={card.id} className='text-center'>
                                <Link to={`/courses/${card.id}`}>
                                <div className="card lg:w-64 bg-base-100 shadow-xl image-full">
                                    <figure><img src={card.img} alt="courses" /></figure>
                                    <div className="card-body text-center">
                                        <h2 className="lg:text-xl font-semibold">{card.name}</h2>
                                        <p><FontAwesomeIcon icon={faUserGroup}></FontAwesomeIcon> {card.subs}</p>
                                    </div>
                                </div>
                                
                                </Link>
                            </div>
                            )
                        }
                </div>
            </div>
        </div>
    );
};

export default Home;


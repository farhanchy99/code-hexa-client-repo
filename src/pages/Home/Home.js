import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion"
import { faGraduationCap, faUserGroup, faBookOpenReader } from "@fortawesome/free-solid-svg-icons";
import { Link, useLoaderData } from 'react-router-dom';
import "../Home/Home.css"
import typing from "../../lotties/type.json"
import learning from "../../lotties/learn.json"
import path from "../../lotties/path.json"
import about from "../../lotties/about.json"
import Lottie from 'lottie-react';

const Home = () => {
    const cards = useLoaderData()
    console.log(cards)
    return (
        <div>
            <div className="hero h-96 lg:min-h-screen bgcover">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="text-white pl-12">
                <div className="w-1/2">
                <h1 className='text-xl'>Code <span className='text-amber-400'>Hexa</span> </h1>
                <h1 className="mb-5 text-6xl font-bold">Master Your Programming Skills</h1>
                <p className="mb-5 text-2xl">Start, switch, or advance your career with more than 5,200 courses, Professional Certificates, and degrees from world-class universities and companies.</p>
                <Link to={"/courses"}><button className="btn bg-amber-400 hover:bg-amber-500">Get Started</button></Link>
                </div>
            </div>
            </div>

            <div className='container m-auto px-5 lg:px-24 my-16 text-white'>
                <motion.div 
                    className='w-[80%] m-auto' 
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{opacity:1, scale:1}} 
                    transition={{duration: 0.3}}
                    viewport={{once: true}}
                >
                    <h1 className='text-center text-4xl mt-10 mb-4 font-bold'>Why Code Hexa Programming Courses works</h1>
                    <motion.div 
                    animate={{ x: -50 }} 
                    transition={{ ease: "easeOut", duration: 0.8 }} 
                    initial={{ opacity: 0, scale: 0 }} 
                    whileInView={{opacity:1, scale:1}} 
                    >
                        <div className='border-2 border-amber-500 w-[15%] float-right'></div>
                    </motion.div>
                </motion.div>
                <div className=' mt-24'>
                    <div className='w-full flex m-auto items-center justify-between'>
                        <div className='w-[45%]'>
                            <h1 className='text-5xl font-semibold my-5'>Personalized learning</h1>
                            <p className='text-xs lg:text-base'>Students practice at their own pace, first filling in gaps in their understanding and then accelerating their learning.</p>
                        </div>
                        <div className='w-[30%] rounded-full shadow-lg shadow-amber-500'>
                            <Lottie loop={true} animationData={typing}/>
                        </div>
                    </div>

                    <div className='w-full flex m-auto items-center justify-between'>
                        <div className='w-[35%] rounded-full shadow-lg shadow-amber-500'>
                            <Lottie loop={true} animationData={learning}/>
                        </div>
                        <div className='w-[45%]'>
                            <h1 className='text-5xl font-semibold my-5'>Start coding</h1>
                            <p className='text-xs lg:text-base'>Learn by doing, right from the start. Write your first lines of code in the most popular languages.</p>
                        </div>
                    </div>

                    <div className='w-full flex m-auto items-center'>
                        <div className='w-full'>
                            <h1 className='text-xl font-semibold my-5'>Find your path</h1>
                            <p className='text-xs lg:text-base'>Explore careers in computer science, web development, and data science so you are informed and ready to kickstart your career.</p>
                        </div>

                        <div className='w-[50%] rounded-full shadow-lg shadow-amber-500'>
                            <Lottie loop={true} animationData={path}/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="m-auto card lg:card-side rounded-none bg-amber-400 shadow-xl">
            <figure className='w-full lg:w-1/2 lg:pl-5'><Lottie loop={true} animationData={about}/></figure>
            <div className="px-16 p-20 w-full lg:w-3/5">
                <h2 className="card-title text-5xl font-semibold mb-5">Creating A Community Of Life Long Learners</h2>
                <p className='mb-5 text-white'>Online learning has become increasingly popular in recent years, offering a flexible and convenient way for individuals to pursue education and training.</p>
                <div className='flex items-center mt-10'>
                    <div>
                        <FontAwesomeIcon icon={faBookOpenReader} className='text-5xl'/>
                    </div>
                    <div className='ml-[40px]'>
                        <h1 className='text-3xl font-semibold'>Flexible Classes</h1>
                        <p className='text-[#5e5e5e]'>Flexible Classes refers to the process of acquiring knowledge or skills through the use of digital technologies and the internet.</p>
                    </div>
                </div>

                <div className='flex items-center mt-5'>
                    <div>
                        <FontAwesomeIcon icon={faGraduationCap} className='text-5xl' />
                    </div>
                    <div className='ml-[30px]'>
                        <h1 className='text-3xl font-semibold'>Learn From Anywhere</h1>
                        <p className='text-[#5e5e5e]'>Whether you are a busy professional, a stay-at-home parent, or a student who prefers to study from home effectively.</p>
                    </div>
                </div>
                <div className="card-actions justify-end mt-8">
                    <Link to={"/courses"}><button className="btn bg-gray-900">Join Now</button></Link>
                </div>
            </div>
            </div>

            

            <div className='container m-auto text-amber-400'>
                <h1 className='text-center text-4xl my-10 font-bold'>Our Courses</h1>
                <div className='grid justify-items-center grid-cols-3 gap-4 w-11/12 lg:w-[80%] m-auto mb-10'>
                        {
                            cards.map(card=>
                            <div key={card.id} className='group'>
                                <div className='card-cat hover:scale-105 ease-in duration-200'>
                                    <img src={card.img} className='card-cat-img' alt="" />

                                    <div className='card-cat-body p-5'>
                                        <h1 className='card-cat-title text-white text-3xl font-bold mt-5 mb-2 uppercase'>{card.name}</h1>
                                        <p class="card-cat-subs mb-4 text-gray-300"><FontAwesomeIcon icon={faUserGroup}></FontAwesomeIcon> {card.subs}</p>


                                        <Link to={`/courses/${card.id}`}>
                                            <button class="btn btn-sm bg-amber-400 hover:bg-amber-500 text-gray-800 hover:text-white rounded">Read More</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            )
                        }
                </div>

            </div>
        </div>
    );
};

export default Home;


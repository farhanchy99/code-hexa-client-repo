import React from 'react';
import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import './Header.css'

const Header = () => {
    const {user, logOut } = useContext(AuthContext)

    const handleLogOut =()=>{
        logOut()
        .then(()=>{})
        .catch(error => console.error(error))
    }

    return (
        <div className='bg-amber-400'>
            <div className="container navbar m-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="nav menu-compact dropdown-content mt-3 p-2 shadow bg-amber-400 rounded-box w-52 text-center">
                        <li className='mb-5'><NavLink to='/' className={({isActive})=> isActive ? 'active' : undefined} end>Home</NavLink></li>
                        <li className='mb-5'><NavLink to='/courses'>Courses</NavLink></li>
                        <li className='mb-5'><NavLink to='/faq'>FAQ</NavLink></li>
                        <li className='mb-5'><NavLink to='/blog'>Blog</NavLink></li>
                    </ul>
                    </div>
                    <NavLink className='text-2xl text-gray-900 font-semibold'>Code <span className='text-white font-bold'>HEXA</span></NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="nav menu-horizontal">
                        <li className='ml-5'><NavLink to='/' className={({isActive})=> isActive ? 'active' : undefined} end>Home</NavLink></li>
                        <li className='ml-5'><NavLink to='/courses'>Courses</NavLink></li>
                        <li className='ml-5'><NavLink to='/faq'>FAQ</NavLink></li>
                        <li className='ml-5'><NavLink to='/blog'>Blog</NavLink></li>
                    </ul>
                </div>

                <div className="navbar-end">
                    <input type="checkbox" className="toggle mr-5"/>
                    <NavLink className="hidden lg:block">{user?.displayName}</NavLink>
                    <NavLink className="flex items-center">
                        {user?.photoURL ? 
                        
                        <>
                            <img src={user?.photoURL} alt="photoURL" className='w-8 lg:w-10 rounded-full lg:m-5'/>
                            <button onClick={handleLogOut} className='btn hidden lg:block'>Log Out</button>
                        
                        </>
                        : 
                        <>
                            <Link to='/login'><button className="btn">Log In</button></Link>
                        </>
                        }
                    </NavLink>
                </div>
                
            </div>
        </div>
    );
};

export default Header;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faYoutube } from '@fortawesome/free-brands-svg-icons'
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='p-10 bg-gray-900 footer text-neutral-content justify-around'>
            <div>
                <h1 className='text-3xl text-White font-semibold'>Code <span className='text-amber-400'>HEXA</span></h1>
                <p>Created By Farhan Chowdhury 2022</p>
            </div> 
            <div>
                <span className="footer-title">Social</span> 
                <div className="grid grid-flow-col gap-4">
                <Link to='/'><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></Link>
                <Link to='/'><FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon></Link>
                <Link to='/'><FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon></Link>
                
                </div>
            </div>
        </div>
    );
};

export default Footer;
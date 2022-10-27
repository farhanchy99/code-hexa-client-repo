import React from 'react';
import img1 from "../img/cors.png"

const Blog = () => {
    return (
        <div className='container m-auto mb-10'>
            <h1 className='text-4xl font-bold my-10 text-center'>Featured Blogs</h1>
            <div className=''>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    What is CORS?
                </div>
                <div className="collapse-content"> 
                    <p>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>
                </div>
                </div>

                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                Why are you using Firebase? What other options do you have to implement authentication?
                </div>
                <div className="collapse-content"> 
                    <p>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</p>
                </div>
                </div>

                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                How does the private route work?
                </div>
                <div className="collapse-content"> 
                    <p>Private Routes vary based on the Apps, For example, Dashboard, User Profile, App Settings, Home etc. In simple words, These routes can be accessed only after login. The constraints for Public and Private routes are that Public routes should not be accessed after login and Private routes should not be accessible before login.</p>
                </div>
                </div>

                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                What is Node? How does Node work?
                </div>
                <div className="collapse-content"> 
                    <p>Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
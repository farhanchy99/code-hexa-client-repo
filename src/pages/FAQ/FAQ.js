import React from 'react';

const FAQ = () => {
    return (
        <div className='container m-auto'>
            <h1 className='text-2xl text-center font-bold my-10'>This FAQ</h1>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    Focus me to see content
                </div>
                <div className="collapse-content"> 
                    <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                </div>
            </div>

            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    Focus me to see content
                </div>
                <div className="collapse-content"> 
                    <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                </div>
            </div>

            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    Focus me to see content
                </div>
                <div className="collapse-content"> 
                    <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                </div>
            </div>

            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    Focus me to see content
                </div>
                <div className="collapse-content"> 
                    <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                </div>                                                  
            </div>
        </div>
    );
};

export default FAQ;
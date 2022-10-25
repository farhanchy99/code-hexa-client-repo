import React from 'react';

const Blog = () => {
    return (
        <div className='container m-auto'>
            <h1 className='text-4xl font-bold my-10 text-center'>Featured Blogs</h1>
            <div className=''>
                <div className="card lg:card-side bg-amber-400 hover:shadow-3xl w-3/4 m-auto mb-14 border-solid border-2 border-black p-2">
                    <figure><img src="https://placeimg.com/400/400/arch" alt="Album" className='rounded-lg'/></figure>
                    <div className="card-body">
                        <h2 className="card-title text-6xl mt-28">What is CORS?</h2>
                        <div className="card-actions justify-end">
                        <label htmlFor="my-modal-1" className="btn modal-button transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 mt-28">Read More</label>
                        <input type="checkbox" id="my-modal-1" className="modal-toggle" />
                        <div className="modal">
                            <div className="modal-box relative">
                                <label htmlFor="my-modal-1" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
                                <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

                <div className="card lg:card-side bg-amber-400 hover:shadow-3xl w-3/4 m-auto mb-14 border-solid border-2 border-black p-2">
                    <figure className='w-full'><img src="https://placeimg.com/400/400/arch" alt="Album" className='rounded-lg'/></figure>
                    <div className="card-body">
                        <h2 className="card-title text-3xl mt-24">Why are you using Firebase? What other options do you have to implement authentication?</h2>
                        <div className="card-actions justify-end">
                        <label htmlFor="my-modal-2" className="btn modal-button transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 mt-16">Read More</label>
                        <input type="checkbox" id="my-modal-2" className="modal-toggle" />
                        <div className="modal">
                            <div className="modal-box relative">
                                <label htmlFor="my-modal-2" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
                                <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

                <div className="card lg:card-side bg-amber-400 hover:shadow-3xl w-3/4 m-auto mb-14 border-solid border-2 border-black p-2">
                    <figure><img src="https://placeimg.com/400/400/arch" alt="Album" className='rounded-lg'/></figure>
                    <div className="card-body">
                        <h2 className="card-title text-4xl mt-24">How does the private route work?</h2>
                        <div className="card-actions justify-end">
                        <label htmlFor="my-modal-3" className="btn modal-button transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 mt-20">Read More</label>
                        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                        <div className="modal">
                            <div className="modal-box relative">
                                <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
                                <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

                <div className="card lg:card-side bg-amber-400 hover:shadow-3xl w-3/4 m-auto mb-14 border-solid border-2 border-black p-2">
                    <figure><img src="https://placeimg.com/400/400/arch" alt="Album" className='rounded-lg'/></figure>
                    <div className="card-body">
                        <h2 className="card-title text-4xl mt-24">What is Node?<br /> How does Node work?</h2>
                        <div className="card-actions justify-end">
                        <label htmlFor="my-modal-4" className="btn modal-button transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 mt-24">Read More</label>
                        <input type="checkbox" id="my-modal-4" className="modal-toggle" />
                        <div className="modal">
                            <div className="modal-box relative">
                                <label htmlFor="my-modal-4" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
                                <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
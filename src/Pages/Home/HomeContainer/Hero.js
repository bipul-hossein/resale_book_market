import React from 'react';

const Hero = () => {
    return (
        <div className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://static.thriftbooks.com/general/DT-L-552x352_628e4108.jpg" className="w-1/2 h-[500px] rounded-lg shadow-2xl" alt=''/>
                <div className='w-1/2'>
                    <h1 className="text-5xl font-bold">Holiday Gift Guides!</h1>
                    <p className="py-6">Find something for everyone on your list</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
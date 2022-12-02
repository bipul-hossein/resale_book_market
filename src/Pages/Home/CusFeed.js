import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
const CusFeed = () => {
    return (
        <div className='w-full m-auto pt-5 pb-8 bg-neutral-200 rounded-lg'>
            <div className="flex flex-col items-center">
                <h1 className='text-3xl mb-2'>Users Feedback</h1>

            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-3 w-full">
                    <div className="border rounded">
                        <div className="p-3 my-3">
                            <div className="flex justify-between my-2">
                                <FaQuoteLeft className='text-orange-100 text-3xl'></FaQuoteLeft>

                            </div>
                            <div>
                                <p>When you've found the books you want we'll ship qualifying orders to your door for FREE in 100% recyclable packaging. If there is no demand for a book, we will donate it to charity, or we'll recycle it. </p>
                            </div>
                            <div className="flex gap-2 items-center mt-2">
                                <div className="avatar">
                                    <div className="w-8 rounded-full">
                                        <img src="https://placeimg.com/192/192/people" alt='' />
                                    </div>
                                </div>
                                <div>
                                    <span>Rakib Hossen</span><br />

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="p-3 w-full mb-4">
                    <div className="border rounded">
                        <div className="p-3 my-3">
                            <div className="flex justify-between my-2">
                                <FaQuoteLeft className='text-orange-100 text-3xl'></FaQuoteLeft>


                            </div>
                            <div>
                                <p>Used books are often treasures that are out-of-print or rare. With Wish Lists you can choose to be notified the instant we find a copy, see how often we find rare titles, and see who else is interested.. </p>
                            </div>
                            <div className="flex gap-2 items-center mt-2">
                            <div className="avatar">
                                    <div className="w-8 rounded-full">
                                        <img src="https://placeimg.com/192/192/people" alt='' />
                                    </div>
                                </div>
                                <div>
                                    <span>sumi</span><br />

                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>


        </div>
    );
};

export default CusFeed;
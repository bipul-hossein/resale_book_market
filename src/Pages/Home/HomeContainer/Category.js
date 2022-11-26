import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModel from './BookingModel';

const Category = () => {
    const categoryBook = useLoaderData()
    console.log(categoryBook)
    const [item, setItem] = useState({})
    return (
        <>
            <div className='flex gap-4'>
                {
                    categoryBook.map((data, i) => <div
                        key={i}
                        className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src={data.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{data.productName}. writer: {data.writer}</h2>
                            <p>Seller:{data.seller}</p>
                            <p>Seller:{data.originalPrice}</p>
                            <p>Seller:{data.resalePrice}</p>
                            <p>Seller:{data.location}</p>
                            <div className="w-full">
                                <label onClick={() => setItem(data)} htmlFor="booking_modal"
                                    className="btn btn-primary w-full text-white"
                                >Book Now</label>
                            </div>
                        </div>
                    </div>)
                }
            </div>
           {(item) && <BookingModel item={item} setItem={setItem}></BookingModel>

           }
        </>
    );
};

export default Category;
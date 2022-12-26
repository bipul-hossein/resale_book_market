import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../contexts/AuthProvider';
import BookingModel from './BookingModel';
import { MdLocationOn } from 'react-icons/md';
import useAdmin from '../../../hooks/useAdmin';
import useSeller from '../../../hooks/useSeller';

const Category = () => {
    const categoryBook = useLoaderData()
    const [item, setItem] = useState({})
    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)
    const [isSeller] = useSeller(user?.email)

    const hanleBookToast = () => {
        toast.warn('Sold Out')

    }

    return (
        <>
            <div className='w-11/12 mx-auto mt-8'>

                <div className='grid mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        categoryBook?.map((data, i) => <>
                            <div key={i} className="card w-96 bg-base-100 shadow-xl">
                                <figure><img src={data?.image} alt="Shoes" className='h-48 w-full ' /></figure>

                                <div className="card-body">

                                    {/* varigfed tik */}


                                    <h2 className="card-title">
                                        {data.productName}. writer: {data?.writer}



                                        {
                                            !data.paid ?
                                                <button className='btn btn-primary btn-xs'> Available</button>
                                                :
                                                <button className='btn btn-secondary btn-xs'>sold</button>
                                        }

                                    </h2>
                                    <p>Seller:{data?.seller}</p>
                                    <div className='flex justify-between'>
                                        <p>Selling Price:{data?.resalePrice}</p>
                                        <p>Original Price:{data?.originalPrice}</p>
                                    </div>

                                    <div className='card-actions justify-end'>
                                        <span className='flex items-center gap-1'><MdLocationOn className='text-orange-400 text-3xl' />{data?.location}</span>
                                    </div>
                                    <div className="card-actions justify-end">
                                        {
                                            user && !data.paid && !isSeller && !isAdmin ? <label onClick={() => setItem(data)} htmlFor="booking_modal"
                                                className="btn btn-primary w-full text-white"
                                            >Book Now</label> : <label disabled onClick={hanleBookToast}
                                                className="btn btn-secondary w-full text-white"
                                            >Book Now</label>
                                        }

                                    </div>
                                </div>
                            </div>
                        </>

                        )
                    }
                </div>
                {(item) && <BookingModel item={item} setItem={setItem}></BookingModel>

                }
            </div>
        </>
    );
};

export default Category;
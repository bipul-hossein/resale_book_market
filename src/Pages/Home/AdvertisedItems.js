import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { MdLocationOn } from 'react-icons/md';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
import useSeller from '../../hooks/useSeller';
import BookingModel from './HomeContainer/BookingModel';

const AdvertisedItems = () => {
    const [item, setItem] = useState({})
    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)
    const [isSeller] = useSeller(user?.email)

    const hanleBookToast = () => {
        toast.warn('Sold Out')

    }


    const { data: products = [] } = useQuery({
        queryKey: ['advertisedbook'],
        queryFn: async () => {
            const res = await fetch(`https://server-side-assignment12.vercel.app/advertisedbook`);
            const data = await res.json();
            return data;
        }
    });
    console.log(products)

    return (
        <>
            {
                products.length >= 1 &&
                <>
                    <h2 className='p-4 text-3xl text-blue-700 my-4 font-bold'>Advertised items{products.length}</h2>
                    <div className='w-11/12 mx-auto mt-8'>

                        <div className='grid mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                            {
                                products?.map((data, i) => <>
                                    <div key={i} className="card w-96 bg-base-100 shadow-xl">
                                        <figure><img src={data?.image} alt="Shoes" className='h-48 w-full ' /></figure>
                                        <div className="card-body">
                                            <h2 className="card-title">
                                                {data.productName}. writer: {data?.writer}


                                                {
                                                    !data.paid ?
                                                        <button className='btn btn-primary btn-xs'> Available</button>
                                                        :
                                                        <button className='btn btn-secondary btn-xs'> sold</button>
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
                                                    !data.paid && !isSeller && !isAdmin ? <label onClick={() => setItem(data)} htmlFor="booking_modal"
                                                        className="btn btn-primary w-full text-white"
                                                    >Book Now</label> : <label onClick={hanleBookToast}
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
            }

        </>
    );
};

export default AdvertisedItems;
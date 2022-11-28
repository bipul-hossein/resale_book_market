import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckOutFrom from './CheckOutFrom';

const stripePromise = loadStripe(process.env.REACT_APP_strip_key);

const Payment = () => {
    const data =useLoaderData()

   
    return (
        <div className='w-2/3 mx-auto'>
            <h3 className="text-2xl">Payment for {data.bookName}</h3>
            <p className="text-xl">Please pay <strong>{data.price}</strong> for your Book. Your Order placed date {data.dateFormat}</p>

            <div className='w-96 my-12'>

                <Elements stripe={stripePromise}>
                    <CheckOutFrom data={data}/>
                </Elements>
            </div>

        </div>
    );
};

export default Payment;
import { format } from 'date-fns';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../contexts/AuthProvider';

const BookingModel = ({ item ,setItem}) => {
    const { user } = useContext(AuthContext)
    
    const date = new Date()
    const dateFormat = format(date, 'PP')
console.log(item)
    const handleBooking = event => {
        event.preventDefault()
        const form = event.target;
        const userName = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const location = form.location.value;

        const booking = {
            userName,
            image:item.image,
            categoryBookId:item._id,
            email,
            phone,
            bookName: item.productName,
            dateFormat,
            price: item.resalePrice,
            location
        }

        fetch('https://server-side-assignment12.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if(data.acknowledged){
                    toast.success("booking confirmed")
                    setItem(null)
                }
                
            })



    }
    return (
        <>
          
            <input type="checkbox" id="booking_modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking_modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{item.productName}</h3>

                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" disabled defaultValue={dateFormat} className="input input-bordered w-full " />
                        <input name='name' type="text" disabled defaultValue={user?.displayName} placeholder="Your Name" className="input input-bordered w-full " />
                        <input name='email' type="text" disabled defaultValue={user?.email} placeholder="Your Email" className="input input-bordered w-full " />
                        <input name='phone' type="text" placeholder="Your Phone Number" required className="input input-bordered w-full " />
                        <input name='location' type="text" placeholder="Your Location" required className="input input-bordered w-full " />
                        <input type="submit" className="btn btn-accent w-full " />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModel;
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import useTitle from '../../../hooks/useTitle';

const MyOrders = () => {
    const { user } = useContext(AuthContext)
useTitle('Order Section')

    const { data: usersOrders = [] } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/user/orders/${user.email}`);
            const data = await res.json();
            return data;
        }
    });

    console.log(usersOrders)
    return (
        <div>
            <h2 className="text-3xl">My Order</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Product</th>
                            <th>Order Date</th>
                            <th>Price</th>
                            <th>Status</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            usersOrders.map((book, i) => <tr key={book._id}>
                                <th>{i + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="w-20 rounded">
                                            <img src={book.image} alt="" />
                                        </div>
                                    </div>
                                </td>
                                <td>{book.bookName}</td>
                                <td>{book?.dateFormat}</td>
                                <td>{book.price}</td>

                                <td>
                                    {book.price && !book.paid && <Link to={`/order/payment/${book._id}`}><button className='btn btn-secondary btn-sm'> pay</button> </Link>
                                    }
                                    {
                                        book.price && book.paid && <span className='text-green-500'>Paid</span>
                                    }
                                </td>

                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default MyOrders;
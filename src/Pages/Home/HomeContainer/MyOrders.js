import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyOrders = () => {
    const {user}=useContext(AuthContext)


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
                        <th>Product</th>
                        <th>Order Date</th>
                        <th>Price</th>
                        <th>payment</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usersOrders.map((book, i) => <tr key={book._id}>
                            <th>{i + 1}</th>
                            <td>{book.bookName}</td>
                            <td>{book?.dateFormat}</td>
                            <td>{book.price}</td>
                            
                            <td>pay</td>
                            <td><button className='btn btn-xs btn-danger'>Delete</button></td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    </div>

    );
};

export default MyOrders;
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';

const MyProducts = () => {
    const { user } = useContext(AuthContext)
    const { data: mybook = [] } = useQuery({
        queryKey: ['sellerbook'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/sellerbook/${user.email}`);
            const data = await res.json();
            return data;
        }
    });

    console.log(mybook)

    return (
        <div>
            <h2 className="text-3xl">My Book</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>statis</th>
                            <th>Email</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            mybook.map((book, i) => <tr key={book._id}>
                                <th>{i + 1}</th>
                                <td>{book.productName}</td>
                                <td></td>
                                <td></td>
                                <td><button className='btn btn-xs btn-danger'>Delete</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default MyProducts;
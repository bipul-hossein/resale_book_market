import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthProvider';

const MyProducts = () => {
    const { user } = useContext(AuthContext);


    const { data: mybook = [], refetch } = useQuery({
        queryKey: ['sellerbook'],
        queryFn: async () => {
            const res = await fetch(`https://server-side-assignment12.vercel.app/sellerbook/${user.email}`);
            const data = await res.json();
            return data;
        }
    });
    const handleDeleteBook = (book) => {
        const agree = window.confirm(`you want to delete${book.productName}`)

        console.log(book)
        if (agree) {

            fetch(`https://server-side-assignment12.vercel.app/book/${book._id}`, {
                method: 'DELETE',
            })
                .then(response => response.json())
                .then(data => {
                    // console.log('Success:', data);
                    if (data.deletedCount > 0) {
                        toast.success('Book delete successfully')
                        refetch()
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        }


    }
    const handleAdvertised = (id) => {
        const advertisedId = {
            id
        }

        fetch(`https://server-side-assignment12.vercel.app/advertisedproduct`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(advertisedId)
        }).then(res => res.json())
            .then(data => {
                toast.success('Advertised added successfully')
            }).catch(e => console.error(e))

    }

    return (
        <div>
            <h2 className="text-3xl">My Book</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Price</th>
                            <th>Advertise</th>
                            <th>Status</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            mybook?.map((book, i) => <tr key={book}>
                                <th>{i + 1}</th>
                                <td>{book?.productName}</td>
                                <td>{book?.sellerEmail}</td>
                                <td>{book?.resalePrice}</td>
                                <td>
                                    {
                                        !book?.paid && <button onClick={() => handleAdvertised(book._id)} className='btn btn-xs btn-danger'>Advertise</button>
                                    }
                                    {
                                        book?.paid && <button disabled className='btn btn-xs btn-danger'>Advertise</button>
                                    }
                                </td>
                                <td>

                                    {!book?.paid && <button className='btn btn-accent btn-sm'> available</button>
                                    }
                                    {
                                        book?.paid && <span className='text-green-500'>sold</span>
                                    }
                                </td>
                                <td><button onClick={() => handleDeleteBook(book)} className='btn btn-xs btn-danger'>Delete</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default MyProducts;
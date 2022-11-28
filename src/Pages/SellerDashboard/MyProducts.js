import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthProvider';

const MyProducts = () => {
    const { user } = useContext(AuthContext);


    const { data: mybook = [],refetch } = useQuery({
        queryKey: ['sellerbook'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/sellerbook/${user.email}`);
            const data = await res.json();
            return data;
        }
    });

    

    const handleDeleteBook=(book)=>{
        const agree = window.confirm(`you want to delete${book.productName}`)

        if(agree){

            fetch(`http://localhost:5000/book/${book._id}`, {
                method: 'DELETE',
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
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
                            mybook.map((book, i) => <tr key={book._id}>
                                <th>{i + 1}</th>
                                <td>{book.productName}</td>
                                <td>{book?.sellerEmail}</td>
                                <td>{book.resalePrice}</td>
                                <td>{}</td>
                                <td>{}</td>
                                <td><button onClick={()=>handleDeleteBook(book)} className='btn btn-xs btn-danger'>Delete</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default MyProducts;
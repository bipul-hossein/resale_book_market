import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-toastify';

const AllSeller = () => {

    const { data: seller = [],refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch('https://server-side-assignment12.vercel.app/sellers',{
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    });


    const handleDeleteSeller=(seller)=>{
        const agree = window.confirm(`you want to delete ${seller.name}`)
        if(agree){
            fetch(`https://server-side-assignment12.vercel.app/user/${seller._id}`, {
                method: 'DELETE',
            })
                .then(response => response.json())
                .then(data => {
                    // console.log('Success:', data);
                    if (data.deletedCount > 0) {
                        toast.success('User delete successfully')
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
            <h2 className="text-3xl">All Seller</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            seller.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td><button onClick={()=>handleDeleteSeller(user)} className='btn btn-xs btn-danger'>Delete</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSeller;
import { format } from 'date-fns';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthProvider';

const AddProduct = () => {
    const { user } = useContext(AuthContext);
    console.log(user)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const date = new Date()
    const dateFormat = format(date, 'PP')

    const handleAddProduct = (data) => {
        console.log(data)



        const product = {
            categoryName: data.category,
            productName: data.name,
            writer: data.writer,
            image: data.image,
            location: data.location,
            postData: dateFormat,
            resalePrice: data.sellprice,
            originalPrice: data.originalprice,
            seller: user.displayName,
            sellerEmail: user.email,
            old: data.bookage
        }
        console.log(product)
        fetch('http://localhost:5000/addbook', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        }).then(res => res.json())
            .then(data => {
                console.log(data, "user add database")
                toast.success('Book added successfully')
            }).catch(e => console.error(e))


    }





    return (
        <div className='h-full flex justify-center '>
            <div className='w-2/4 p-7 '>
                <h2 className='text-xl text-center'>Add Product</h2>
                <form onSubmit={handleSubmit((handleAddProduct))}
                >


                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Category Name</span></label>
                        <select {...register("category", { required: "Category is Required" })} className="select select-bordered w-full">
                            <option disabled selected>choice</option>
                            <option selected>Other Book</option>
                        </select>
                        {errors.category && <p className='text-red-500'>{errors.category.message}</p>}
                    </div>



                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Book Name</span></label>
                        <input type="text" {...register("name", { required: "Name is Required" })} placeholder="Type your Name" className="input input-bordered w-full" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Writer</span></label>
                        <input type="text" {...register("writer", { required: "writer is Required" })} placeholder="Type your password" className="input input-bordered w-full" />
                        {errors.writer && <p className='text-red-500'>{errors.writer.message}</p>}
                    </div>

                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Book Image</span></label>
                        <input type="text" {...register("image", { required: "Image is Required" })} placeholder="Image Url" className="input input-bordered w-full" />
                        {errors.image && <p className='text-red-500'>{errors.image.message}</p>}
                    </div>

                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Book Age</span></label>
                        <input type="text" {...register("bookage", { required: "Book Age is Required" })} placeholder="Type your password" className="input input-bordered w-full" />
                        {errors.bookage && <p className='text-red-500'>{errors.bookage.message}</p>}
                    </div>

                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Original Price</span></label>
                        <input type="text" {...register("originalprice", { required: "Original is Required" })} placeholder="Type your password" className="input input-bordered w-full" />
                        {errors.originalprice && <p className='text-red-500'>{errors.originalprice.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Selling Price</span></label>
                        <input type="text" {...register("sellprice", { required: "password is Required" })} placeholder="Type your password" className="input input-bordered w-full" />
                        {errors.sellprice && <p className='text-red-500'>{errors.sellprice.message}</p>}
                    </div>

                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Location</span></label>
                        <input type="text" {...register("location", { required: "Location is Required" })} placeholder="Type your password" className="input input-bordered w-full" />
                        {errors.location && <p className='text-red-500'>{errors.location.message}</p>}
                    </div>


                    <input className='btn w-full mt-3' type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;
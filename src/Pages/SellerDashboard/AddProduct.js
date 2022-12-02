import { format } from 'date-fns';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthProvider';
import useCategoryData from '../../hooks/useCategoryData';

const AddProduct = () => {
    const { user } = useContext(AuthContext);
    const [categoryData] = useCategoryData()
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const date = new Date()
    const dateFormat = format(date, 'PP')
   


    const handleAddProduct = (data) => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgData => {
            if(imgData.success){
            
                const product = {
                    categoryName: data.category,
                    productName: data.bookName,
                    writer: data.writer,
                    image: imgData.data.url,
                    location: data.location,
                    postData: dateFormat,
                    resalePrice: data.sellprice,
                    originalPrice: data.originalprice,
                    seller: user.displayName,
                    sellerEmail: user.email,
                    old: data.bookage
                }
        
            
        fetch('https://server-side-assignment12.vercel.app/addbook', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        }).then(res => res.json())
            .then(data => {
                // console.log(data, "user add database")
                toast.success('Book added successfully')
                navigate('/seller_dashboard/myproducts')
            }).catch(e => console.error(e))
            }})
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
                            {
                                categoryData.map((data,i )=> <option key={i} >{data.categoryName}</option>
                                )
                            }
                        </select>
                        {errors.category && <p className='text-red-500'>{errors.category.message}</p>}
                    </div>

                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Book Name</span></label>
                        <input type="text" {...register("bookName", { required: "Name is Required" })} placeholder="Type your Book Name" className="input input-bordered w-full" />
                        {errors.bookName && <p className='text-red-500'>{errors.bookName.message}</p>}
                    </div>
                    <div className="form-control w-full my-2">
                        <input type="text" {...register("writer", { required: "writer is Required" })} placeholder="Writer Name" className="input input-bordered w-full" />
                        {errors.writer && <p className='text-red-500'>{errors.writer.message}</p>}
                    </div>

                    <div className="form-control w-full">
                       
                        <input type="file" {...register("image", { required: "Image is Required" })} placeholder="Image Url" className="input input-bordered w-full" />
                        {errors.image && <p className='text-red-500'>{errors.image.message}</p>}
                    </div>

                    <div className="form-control w-full my-2">
                        <input type="text" {...register("bookage", { required: "Book Age is Required" })} placeholder="Time Of Used" className="input input-bordered w-full" />
                        {errors.bookage && <p className='text-red-500'>{errors.bookage.message}</p>}
                    </div>

                    <div className="form-control w-full">
                       
                        <input type="text" {...register("originalprice", { required: "Original Price is Required" })} placeholder="Type Original Price" className="input input-bordered w-full" />
                        {errors.originalprice && <p className='text-red-500'>{errors.originalprice.message}</p>}
                    </div>
                    <div className="form-control w-full my-2">
                        
                        <input type="text" {...register("sellprice", { required: "Selling Price is Required" })} placeholder="Selling Price" className="input input-bordered w-full" />
                        {errors.sellprice && <p className='text-red-500'>{errors.sellprice.message}</p>}
                    </div>

                    <div className="form-control w-full">
                        
                        <input type="text" {...register("location", { required: "Location is Required" })} placeholder="Your Location" className="input input-bordered w-full" />
                        {errors.location && <p className='text-red-500'>{errors.location.message}</p>}
                    </div>


                    <input className='btn w-full mt-3' type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
const Categories = ({ categories}) => {
console.log(categories);
    const navigate = useNavigate()
    const handleCard =(props) =>{
        navigate(`/categories/${props}`)   
    }
    return (
        <div className='grid grid-cols-6 gap-4 '>
            {
                categories?.map((data,i )=>
                    <div key={i} onClick={()=> handleCard(data?.categoryName)} className="card w-auto bg-base-100 shadow-xl image-full cursor-pointer">
                        <figure><img src={data?.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{data?.categoryName}</h2>
                        </div>
                    </div>)
            }
        </div>
    );
};

export default Categories;
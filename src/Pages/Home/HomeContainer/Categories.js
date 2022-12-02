import React from 'react';
import { useNavigate } from 'react-router-dom';
const Categories = ({ categories}) => {

    const navigate = useNavigate()
    const handleCard =(props) =>{
        navigate(`/categories/${props}`)   
    }
    return (
        <div className='grid mt-8 gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-6'>
            {
                categories?.map((data,i )=>
                    <div key={i} onClick={()=> handleCard(data?.categoryName)} className="card bg-base-100 image-full shadow-xl cursor-pointer">
                        <figure><img className='max-w' src={data?.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{data?.categoryName}</h2>
                        </div>
                    </div>)
            }
        </div>
    );
};

export default Categories;
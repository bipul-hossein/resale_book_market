import React, { useEffect, useState } from 'react';
import Categories from './HomeContainer/Categories';
import Hero from './HomeContainer/Hero';

const Home = () => {

    const [categories, setCategories] = useState([])

    //get code client site
    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])


    return (
        <div className='w-11/12 mx-auto'>
            <Hero></Hero>
            <div className='mt-5'>
                <h2 className='text-3xl text-blue-700 my-4 font-bold'>Book Categories</h2>
                <Categories categories={categories}></Categories>
            </div>

        </div>
    );
};

export default Home;
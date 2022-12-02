import React from 'react';
import useCategoryData from '../../hooks/useCategoryData';
import AdvertisedItems from './AdvertisedItems';
import CusFeed from './CusFeed';
import Categories from './HomeContainer/Categories';
import Hero from './HomeContainer/Hero';

const Home = () => {
const [categoryData]= useCategoryData()
// console.log(categoryData)
    return (
        <div className='w-11/12 mx-auto '>
            <Hero></Hero>
            <div className='my-16'>
                <h2 className='text-3xl text-blue-700 my-4 font-bold'>Book Categories</h2>
                <Categories categories={categoryData}></Categories>
            </div>
            <div className='mt-10 bg-stone-200 rounded-md'>
                <AdvertisedItems></AdvertisedItems>
            </div>
            <div className='my-10'><CusFeed></CusFeed></div>
            
        </div>
    );
};

export default Home;
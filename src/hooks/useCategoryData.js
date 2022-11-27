import  { useEffect, useState } from 'react';

const useCategoryData = () => {
    const [categoryData, setCategoryData] = useState([])
    //get code client site
    useEffect(() => {
        fetch('https://server-side-assignment12.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategoryData(data))
    }, [])
    return [categoryData]
};

export default useCategoryData;
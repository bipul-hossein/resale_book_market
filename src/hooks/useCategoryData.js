import  { useEffect, useState } from 'react';

const useCategoryData = () => {
    const [categoryData, setCategoryData] = useState([])
    //get code client site
    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategoryData(data))
    }, [])
    return [categoryData]
};

export default useCategoryData;
import { useEffect, useState } from "react"

const useSeller = email => {
    const [isSeller, setIsSeller] = useState(false);
    const [isSellerLoading, setIsAdminLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`https://server-side-assignment12.vercel.app/users/seller/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setIsSeller(data.isSeller);
                    setIsAdminLoading(false);
                })
        }
    }, [email])
    return [isSeller, isSellerLoading]
}

export default useSeller;
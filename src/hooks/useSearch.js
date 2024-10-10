import { useState } from "react";



export default function useSearch(products,term) {

    const [matching,setMatching] = useState([])

    
    const arr = []
    if (products) {
        for (const product of products) {
            if (product.title.includes(term)) {
                arr.push(product)
            }
            setMatching(arr)
        }
        

    }

    return matching

}
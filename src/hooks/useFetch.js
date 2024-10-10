import { useState } from "react";
import { useEffect } from "react";

const BASE_URL= 'https://dummyjson.com/products'

  
export default function useFetch(category_name) {
    
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const url = category_name? BASE_URL +'/category/'+ category_name:BASE_URL
    useEffect(() => {
        
        const fetchData = async () => {
            setIsLoading(true);
            try {
              const response = await fetch(url);
              const json = await response.json();
              setData(json.products);
            } catch (error) {
              setError(error)
            } finally {
              setIsLoading(false);
            }
        };
        fetchData()
        console.log(url)
    },[url])

    return [data, isLoading, error]
}
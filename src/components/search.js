
import { useEffect } from 'react'
import searchIcon from '../assets/icons/search-icon.png'
export default function Search({products,setMatched,setTerm,term}) {

    useEffect(() => {
        const arr = []
        if (products) {
            for (const product of products) {
                if (product.title.includes(term)) {
                    arr.push(product)
                }
                setMatched(arr)
            }
        }
    },[products,term,setMatched])

    return (
        <div className='bg-[#0B192C] flex w-full h-14 rounded-full px-5 py-2 items-center justify-between'>
            <input
            placeholder='Search products'
            className='outline-none bg-inherit ' 
            value={term} 
            onChange={(e) => setTerm(e.target.value)}/>
            <div className='w-7 h-7'>
                <img className='w-full h-full' src={searchIcon} alt='search icon'/>
            </div>
        </div>
    )
}
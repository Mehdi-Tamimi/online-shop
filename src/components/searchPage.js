import { useState } from "react"
import useFetch from "../hooks/useFetch"
import Search from "./search"
import SearchResult from "./searchResult"


export default function SearchPage() {
    const [term, setTerm] = useState('')
    const [matched, setMatched] = useState([])
    const [products, isLoading, error] = useFetch()
    
    

    return (
        <div className="w-full">
            
            <div className="w-full h-auto py-4 px-4">
                <Search term={term} products={products} setMatched={setMatched} setTerm={setTerm}/>
            </div>
            <div className="w-full">
                <SearchResult matched={matched} isLoading={isLoading} error={error} term={term}/>
            </div>
        </div>
    )
}
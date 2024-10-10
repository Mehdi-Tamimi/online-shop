import ProductCard from "./productCard"


export default function SearchResult({matched,isLoading,error,term}) {
    term = term.trim()
    if (error) {
        return (
            <div className="w-full flex justify-center py-4">
                <p>
                    {error}
                </p>
            </div>
        )
    }
    if (!term) {
        return (
            <div className="w-full flex justify-center py-4">
                <p className="text-xl font-medium">
                    Search products
                </p>
            </div>
        )
    }
    else if (isLoading) {
        return (
            <div className="w-full flex justify-center py-4">
                <p>
                    Loading...
                </p>
            </div>
        )
    }
    else if (matched.length > 0) {
        return (
            <div className="w-full">
                <div className="px-5">
                    <p className="font-medium text-2xl">
                        Results for {term}
                    </p>
                </div>
                <div className="px-6">
                    <div className="slider">
                        {
                            matched.map((product,index) => <ProductCard product={product} key={index}/>)
                        }

                    </div>
                </div>
            </div>
        )
    }
    else if (matched.length == 0) {
        return (
            <div className="w-full flex justify-center flex-col items-center py-4">
                
                <p>No results for</p> <p className="font-bold text-lg">{term}</p> 
               
            </div>
        )
    }
}
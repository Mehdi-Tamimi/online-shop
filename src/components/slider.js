import useFetch from "../hooks/useFetch"
import ProductCard from "./productCard"


export default function Slider({category_name}) {


    const [products, isLoading, error] = useFetch(category_name)
    if (isLoading) {
        return <div>
            Loading...
        </div>
    }
    if (error) {
        return <div>Error: {error.message}</div>;
    }
    console.log(products)
    return (
        <div className="w-full">
            <div>
                <p>
                    {category_name}
                </p>
            </div>
            <div className="px-6 bg-gray-600">
                <div className="slider">
                    {
                        products? products.map(product => <ProductCard product={product} />): 'Loading'
                    }

                </div>
            </div>
        </div>
    )
}
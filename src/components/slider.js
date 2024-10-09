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

    return (
        <div className="w-full">
            <div className="px-5">
                <p className="font-medium text-2xl">
                    {category_name}
                </p>
            </div>
            <div className="px-6">
                <div className="slider">
                    {
                        products? products.map(product => <ProductCard product={product} />): 'Loading'
                    }

                </div>
            </div>
        </div>
    )
}
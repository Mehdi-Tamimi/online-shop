


export default function ProductCard({product}) {

    if (!product) {
        return 'Loading'
    }
    const imageUrl = product.images[0]
    return (
        <div key={product.id} className="w- h-40 inline-block">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <img
            
            src={imageUrl}
            className="h-full w-full object-cover object-center group-hover:opacity-75"
            />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
        </div>
    )
}
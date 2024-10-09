


export default function ProductCard({product}) {

    if (!product) {
        return 'Loading'
    }
    const imageUrl = product.images[0]
    return (
        <div key={product.id} className="w-40 inline-block px-2 h-48">
            <div className="rounded-xl w-full h-full py-2 px-3 flex flex-col items-center bg-[#0B192C]">
                <div className="w-24 h-24 px-3">
                    <img
                    loading="lazy"
                    src={imageUrl}
                    className="w-full"
                    />
                </div>
                <p className="bg-inherit text-xs text-white w-full text-wrap">{product.title}</p>
                <p className="bg-inherit text-lg font-medium text-white w-full">{product.price + ' $'}</p>
            </div>
        </div>
    )
}
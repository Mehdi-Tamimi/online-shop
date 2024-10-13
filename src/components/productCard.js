import addIcon from '../assets/icons/add-icon.png'
import {useDispatch, useSelector} from 'react-redux'
import { addItem } from '../cart/cartSlice'


export default function ProductCard({product}) {
    
    const dispatch = useDispatch()
    const imageUrl = product.images[0]
    const addProduct = () => {
        const data = {
            title: product.title,
            price: product.price
        }
        dispatch(addItem(data))
    }

    if (!product) {
        return 'Loading'
    }
    
    
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
                
                <div className='w-full flex justify-between'>
                    <p className="bg-inherit text-lg font-medium text-white w-full">{product.price + ' $'}</p>
                    <div onClick={addProduct} className='w-6 h-6 cursor-pointer'>
                        <img className='w-full h-full' src={addIcon} alt='cart icon'/>
                    </div>
                </div>

                
                    

            </div>
        </div>
    )
}
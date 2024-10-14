
import { useNavigate } from 'react-router-dom'
import cartIcon from '../assets/icons/cart-icon.png'
import searchIcon from '../assets/icons/search-icon.png'
import { useSelector } from 'react-redux'
export default function Header() {
    const selectedItems = useSelector(state => state.cart)
    const navigate = useNavigate()
    let count = 0
    for (const item in selectedItems) {
        count += selectedItems[item].count
    }
    return (
       <div className="sticky top-0 h-16 bg-[#0B192C] flex justify-between items-center px-4">
            <div onClick={() => navigate('/cart')} className='header-icons-container relative'>
                <img className='w-full h-full' src={cartIcon} alt='cart icon'/>
                <div className={count? 'cart-count':'hidden'}>
                    {count}
                </div>
            </div>
            <div>
                <h1 className='text-2xl font-medium'>Citadel Online Shop</h1>
            </div>
            <div onClick={() => navigate('/search')} className='header-icons-container'>
                <img className='w-full h-full'  src={searchIcon} alt='search icon'/>
            </div>
       </div>
    )
}
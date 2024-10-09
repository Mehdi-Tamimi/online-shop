import cartIcon from '../assets/icons/cart-icon.png'
import searchIcon from '../assets/icons/search-icon.png'
export default function Header() {

    return (
       <div className="sticky top-0 h-16 bg-[#0B192C] flex justify-between items-center px-4">
            <div className='header-icons-container'>
                <img className='w-full h-full' src={cartIcon} alt='cart icon'/>
            </div>
            <div>
                <h1 className='text-2xl font-medium'>Citadel Online Shop</h1>
            </div>
            <div className='header-icons-container'>
                <img className='w-full h-full'  src={searchIcon} alt='search icon'/>
            </div>
       </div>
    )
}
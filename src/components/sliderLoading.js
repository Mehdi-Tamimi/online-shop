
import loadingIcon from '../assets/icons/loading-icon.png'
export default function SliderLoading() {

    return (
        <div className="flex flex-col items-center w-full px-6 py-3 h-52">

            <div className='py-4'>
                <img className='w-10 h-10 rotating' src={loadingIcon}/>
            </div>
            <p className='text-2xl font-medium text-[#0B192C]'>
                Loading...
            </p>
        </div>
    )
}
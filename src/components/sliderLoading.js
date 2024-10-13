
import loadingIcon from '../assets/icons/loading-icon.png'
export default function SliderLoading() {

    return (
        <div className="flex flex-col items-center w-full px-6 py-3 h-52">

            <div className='rotating'>
                <img className='w-10 h-10' src={loadingIcon}/>
            </div>
            <p>
                Loading...
            </p>
        </div>
    )
}
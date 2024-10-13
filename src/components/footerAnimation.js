import { useState } from "react"


export default function FooterAnimation() {

    const [isClicked, setIsClicked] = useState(false)
    const handleOnClick = () => {
        
    }

    return (
        <div className="fixed bottom-0 w-full">
            <div className="w-full pb-4">
                <div className="walkingman relative">
                    

                </div>
                <hr className="border-t-2 border-[#0B192C] "/>
            </div>
        </div>
    )
}
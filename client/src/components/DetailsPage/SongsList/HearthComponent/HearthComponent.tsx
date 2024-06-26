import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"



type HearthComponentProps = {
    handlerOnclick:() => void
}
const HearthComponent = ({handlerOnclick}:HearthComponentProps) => {

        const [isFavorite,setIsFavorite] = useState(false)

           return (
            <>
            
            <button onClick={()=>{
                setIsFavorite(!isFavorite)
                handlerOnclick()

                
                }}>
                {!isFavorite && <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
            </svg>}  
            {isFavorite && <FontAwesomeIcon  icon={faHeart} size='xl' />}
            </button> 
            </>

           ) 

             
}
export default HearthComponent
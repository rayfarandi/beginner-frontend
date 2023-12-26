import { FaStar } from "react-icons/fa6"



const Rating =(rating)=>{
    const maxRating =5
    const elementStar = []
    for (let i=1; i<=maxRating;i++){
        const colorStar = i <= rating ? 'yellow-500' : 'gray-500'
        elementStar.push(
            <FaStar key={i}
            style={{color: colorStar}}
            className="text-lg" />
        )
    }
    return(
        <>
        <div className="flex gap-2 items-center">
            {elementStar}
            <span>{rating}</span>
        </div>
        </>
    )
}
export default Rating
import * as Icon from 'react-feather'
import { Link } from 'react-router-dom'

// No Image
import noImage from '../assets/images/kopi.png'
import Rating from './Rating'


const ProductCard =({id,name,description,price,image,isFlashSale,ratingProduct})=>{
    return(
        <div className='flex w-full flex-col relative justify-center items-center flex-1'>
            {isFlashSale && (
                <div className='absolute top-2 bg-red-500 text-white rounded-3xl text-xs sm:text-sm p-1.5 left-2 w-fit'><h1>Flash Sale !</h1></div>
            )}
            <div className='bg-gray-50 p-2 rounded h-60 w-fit flex'>
                
                <img
                className='w-44 h-44 sm:w-56 sm:h-56 object-cover'
                src={image ? `http://localhost:8888/uploads/products/${image}` : noImage}
                alt="product"
                />
            </div>
            
            <div className="shadow-md bg-white rounded p-3 mx-5 -mt-10 flex flex-col gap-5 flex-1">
                
                <Link to={`/productdetail/${id}`} className='text-3xl font-bold'>{name}</Link>
                <div className='flex-1'>{description}</div>
                {ratingProduct && (
                    <Rating />
                )}
                
                <div className='text-2xl font-bold text-orange-500'>Rp.{price?.toLocaleString('id')}</div>
                <div className='flex gap-5'>
                <button type='butoon' className='h-10 rounded bg-orange-500 flex-1 border-2 border-orange-500'>Buy</button>
                <button className='h-10 rounded px-5 border-2 bg-transparent border-orange-500 text-orange-500'><Icon.ShoppingCart/></button>
                </div>
            </div>
        </div>
    )
}
export default ProductCard
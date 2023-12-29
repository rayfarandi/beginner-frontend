import React from "react";
import * as Icon from 'react-feather'
import { Link } from 'react-router-dom'
import noImage from '../assets/images/kopi.png'
import Rating from './Rating'

// gambar
import cofeeA from '../assets/images/home-product1.jpg'
import latte from '../assets/images/home-product4.png'
import hazelnut from '../assets/images/home-product2.jpg'
import cofee from '../assets/images/cofee.jpg'

const ProductCard =({id,name,description,price,image,isFlashSale,ratingProduct})=>{
    return(
        <div className='flex flex-col relative justify-center items-center flex-1'>
            {isFlashSale && (
                <div className='absolute top-2 bg-red-500 text-white rounded-3xl text-xs sm:text-sm p-1.5 left-2 w-fit'><h1>Flash Sale !</h1></div>
            )}
            <div className='bg-gray-50 p-2 rounded h-60 flex'>
                
                 <img className='flex-1 ' src={image || noImage}  />
                
            </div>
            
            <div className="shadow-md bg-white rounded p-3 mx-5 -mt-10 flex flex-col gap-5 flex-1">
                {/* <Link to={'/productdetail'} className='text-3xl font-bold'>{name}</Link> */}
                <Link to={`/productdetail/${id}`} className='text-3xl font-bold'>{name}</Link>
                <div className='flex-1'>{description}</div>
                {ratingProduct && (
                    <Rating />
                )}
                {/* <div className='text-2xl font-bold text-orange-500'>Rp.{price}</div> */}
                <div className='text-2xl font-bold text-orange-500'>Rp.{price?.toLocaleString('id')}</div>
                <div className='flex gap-5'>
                <button type='butoon' className='h-10 rounded bg-orange-500 flex-1 border-2 border-orange-500'>Buy</button>
                <button className='h-10 rounded px-5 border-2 bg-transparent border-orange-500 text-orange-500'><Icon.ShoppingCart/></button>
                </div>
            </div>
        </div>
    )
}

const ProductHome =({ isHomePage})=>{
    const [ProductData, setData]= React.useState([
        {
            name: "Cappucinno",
            isFlashSale: true,
            description : "We provide high quality beans, good taste, and healthy meals made by love just for you. Start your day with us for a bigger smile!",
            price: 20000,
            image: cofeeA
        },
        {
            name: "Late",
            description : "a milk coffee that is a made up of one or two shots of espresso, steamed milk and a final, thin layer of frothed milk on top.",
            price: 25000,
            image: latte 
        },
        {
            name: "Cofee",
            description : "We provide high quality beans, good taste, and healthy meals made by love just for you. Start your day with us for a bigger smile!!",
            price: 23000,
            image: cofee 
        },
        {
            name: "Hazelnut latte",
            description : "Sirup ini memberikan cita rasa kacang hazelnut yang khas dan aroma yang menyenangkan.",
            price: 35000,
            image: hazelnut 
        }
    ])


    return(
        <>
        {isHomePage &&(
            <div className="flex flex-col items-center gap-2 sm:gap-4">
            <h1 className="text-2xl text-center sm:text-5xl font-medium sm:mb-2 px-4">Here is Peoples <span className="text-[#8E6447]">Favorite</span></h1>
            <hr className="border-orange-500 border-2 sm:border-4 w-16"/>
            <h2 className="text-[#4f5665] text-xs sm:text-base text-center px-4">Lets choose and have a bit taste of poeples favorite. It might be yours too!</h2>
        </div>
        )}
        
        <div className="flex sm:flex-row flex-col my-5 gap-2 sm:gap-4">
                

            {ProductData.map((item, index)=>(
                <ProductCard 
                key={String(index)} 
                name={item.name}
                isFlashSale={item.isFlashSale} 
                description={item.description} 
                price={item.price} 
                image={item.image} />
            ))}
            </div>
        </>
    )
}
export default ProductHome
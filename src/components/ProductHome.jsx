import React from "react";
import * as Icon from 'react-feather'

import axios from "axios";
import ProductCard from "./ProductCard";

// const ProductCard =({id,name,description,price,image,isFlashSale,ratingProduct})=>{
//     return(
//         <div className='flex flex-col relative justify-center items-center flex-1'>
//             {isFlashSale && (
//                 <div className='absolute top-2 bg-red-500 text-white rounded-3xl text-xs sm:text-sm p-1.5 left-2 w-fit'><h1>Flash Sale !</h1></div>
//             )}
//             <div className='bg-gray-50 p-2 rounded h-60 flex'>
                
//                  <img className='flex-1 ' src={image || noImage}  />
                
//             </div>
            
//             <div className="shadow-md bg-white rounded p-3 mx-5 -mt-10 flex flex-col gap-5 flex-1">
//                 {/* <Link to={'/productdetail'} className='text-3xl font-bold'>{name}</Link> */}
//                 <Link to={`/productdetail/${id}`} className='text-3xl font-bold'>{name}</Link>
//                 <div className='flex-1'>{description}</div>
//                 {ratingProduct && (
//                     <Rating />
//                 )}
//                 {/* <div className='text-2xl font-bold text-orange-500'>Rp.{price}</div> */}
//                 <div className='text-2xl font-bold text-orange-500'>Rp.{price?.toLocaleString('id')}</div>
//                 <div className='flex gap-5'>
//                 <button type='butoon' className='h-10 rounded bg-orange-500 flex-1 border-2 border-orange-500'>Buy</button>
//                 <button className='h-10 rounded px-5 border-2 bg-transparent border-orange-500 text-orange-500'><Icon.ShoppingCart/></button>
//                 </div>
//             </div>
//         </div>
//     )
// }

const ProductHome =({ isHomePage})=>{
    const [ProductData, setData]= React.useState([])
    
    const getRecomentProduct = async () => {
        try {
          const response = await axios.get('http://localhost:8888/products', {
            params: {
              best_seller: true,
              limit: 4
            }
          })
      
          console.log(response.data.results);
          setData(response.data.results);
        } catch (error) {
          console.error('Error fetching product data:', error);
        }
      }
    React.useEffect(()=>{
        getRecomentProduct()
    },[])


    return(
        <>
        {isHomePage &&(
        <section className="h-fit sm:h-screen flex flex-col items-center sm:pt-10 w-full sm:w-5/6 gap-6 sm:gap-12">
          <div className="flex flex-col items-center gap-2 sm:gap-4">
            <h1 className="text-2xl text-center sm:text-5xl font-medium sm:mb-2 px-4">Here is Peoples <span className="text-[#8E6447]">Favorite</span></h1>

            <hr className="border-[#ff8906] border-2 sm:border-4 w-16"/>
            <h2 className="text-[#4f5665] text-xs sm:text-base text-center px-4">Lets choose and have a bit taste of poeples favorite. It might be yours too!</h2>
          </div>
        
        
        <div className="gap-y-44 gap-x-6 flex flex-wrap justify-center mb-44 sm:gap-6 w-fit mx-6 sm:mx-0 sm:px-6">
                

            {ProductData.map((item, index)=>(
                <ProductCard 
                key={String(index)} 
                id={item.id}
                name={item.name}
                isFlashSale={true} 
                description={item.description} 
                price={item.basePrice} 
                image={item.image} />
            ))}
            </div>
      </section>
      )}
        </>
    )
}
export default ProductHome
import axios from "axios";
import React , { useEffect } from "react";
import ProductCard from "./ProductCard";
import * as Icon from "react-feather"


const ProductProduct = ()=>{

    const[Products, setProducts] = React.useState([{}])
    const[pageinfo ,setpageinfo] = React.useState(null)
    
    const getProducts=async (page)=>{
        let res
        if (page === 'next'){
            
        res = await axios.get('http://localhost:8888/products',{params: {
            page: pageinfo.nextPage
        }})
        console.log(res.data.results)
        }else if (page === '1'){
        res = await axios.get(`http://localhost:8888/products?page=${page}`)
        console.log(res.data.results)
        }else if (page === '2'){
        res = await axios.get(`http://localhost:8888/products?page=${page}`)
        console.log(res.data.results)
        }else if (page === '3'){
        res = await axios.get(`http://localhost:8888/products?page=${page}`)
        console.log(res.data.results)
        }else if (page === '4'){
        res = await axios.get(`http://localhost:8888/products?page=${page}`)
        console.log(res.data.results)
        }else{
            res = await axios.get('http://localhost:8888/products')
        }
        setpageinfo(res.data.pageinfo)
        setProducts(res.data.results)
    }
    useEffect(()=>{
        getProducts()
    },[])
    return(
        <>
        <div className="flex flex-wrap justify-center gap-x-4 sm:gap-x-20 gap-y-44 mb-48 max-w-xl">
                    
                    {Products && Products.map((item, index)=>(
                    <ProductCard 
                    key={String(index)} 
                    id={item.id}
                    name={item.name}
                    isFlashSale={true} 
                    description={item.description} 
                    price={item.basePrice} 
                    image={item.image}
                    ratingProduct={item.rating} />
                    ))}
        {/* test */}
        <div className="flex gap-2">
                    <button type="button" onClick={()=>getProducts('1')} className="flex justify-center items-center bg-[#FF8906] text-xs sm:text-sm rounded-full h-6 w-6 sm:h-8 sm:w-8">
                        1
                    </button>
        
                    <button type="button" onClick={()=>getProducts('2')} className="flex justify-center items-center  text-[#A0A3BD] text-xs sm:text-sm bg-[#E8E8E8] rounded-full h-6 w-6 sm:h-8 sm:w-8">
                        2
                    </button>
        
                    <button type="button" onClick={()=>getProducts('3')} className="flex justify-center items-center  text-[#A0A3BD] text-xs sm:text-sm bg-[#E8E8E8] rounded-full h-6 w-6 sm:h-8 sm:w-8">
                        3
                    </button>
        
                    <button type="button" onClick={()=>getProducts('4')} className="flex justify-center items-center text-[#A0A3BD] text-xs sm:text-sm bg-[#E8E8E8] rounded-full h-6 w-6 sm:h-8 sm:w-8">
                        4
                    </button>
        
                    <button type="button" onClick={()=>getProducts('next')} className="flex justify-center items-center bg-[#FF8906] rounded-full h-6 w-6 sm:h-8 sm:w-8">
                        <Icon.ArrowRight className="text-white h-4 sm:h-auto"/>
                    </button>
            </div>
        </div>

        
        </>
    )
}
export default ProductProduct
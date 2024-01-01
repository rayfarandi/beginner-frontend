import axios from "axios";
import React , { useEffect } from "react";
import ProductCard from "./ProductCard";
import * as Icon from "react-feather"


const ProductProduct = ()=>{

    const[Products, setProducts] = React.useState([{}])
    const[pageinfo ,setpageinfo] = React.useState(null)
    const[activePage, setActivePage] = React.useState('1')
    
    const getProducts=async (page)=>{
        try {
        let res
        if (page === 'next'){
            
        res = await axios.get('http://localhost:8888/products',{
            params: {
            page: pageinfo.nextPage
        }})
        console.log(res.data.results)
        }else {
                res = await axios.get('http://localhost:8888/products', {
              params: {
                page: page,
              },
            })
          }
            
        setpageinfo(res.data.pageinfo)
        setProducts(res.data.results)
        setActivePage(page)
    } catch (error) {
        console.error('Error fetching data:', error)
        alert('No data found')
        }
    }
    useEffect(()=>{
        getProducts('1')
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
                    <button type="button" onClick={()=>getProducts('1')}
                     className={`flex justify-center items-center bg-${activePage === '1' ? '[#FF8906]' : '[#E8E8E8]'} text-xs sm:text-sm rounded-full h-6 w-6 sm:h-8 sm:w-8`}>
                        1
                    </button>
        
                    <button type="button" onClick={()=>getProducts('2')} 
                    className={`flex justify-center items-center bg-${activePage === '2' ? '[#FF8906]' : '[#E8E8E8]'} text-xs sm:text-sm rounded-full h-6 w-6 sm:h-8 sm:w-8`}>
                        2
                    </button>
        
                    <button type="button" onClick={()=>getProducts('3')} 
                    className={`flex justify-center items-center bg-${activePage === '3' ? '[#FF8906]' : '[#E8E8E8]'} text-xs sm:text-sm rounded-full h-6 w-6 sm:h-8 sm:w-8`}>
                        3
                    </button>
        
                    <button type="button" onClick={()=>getProducts('4')} 
                    className={`flex justify-center items-center bg-${activePage === '4' ? '[#FF8906]' : '[#E8E8E8]'} text-xs sm:text-sm rounded-full h-6 w-6 sm:h-8 sm:w-8`}>
                        4
                    </button>
        
                    <button type="button" onClick={()=>getProducts('next')} 
                     className={`flex justify-center items-center bg-${activePage === 'next' ? '[#FF8906]' : '[#E8E8E8]'} rounded-full h-6 w-6 sm:h-8 sm:w-8`}                     >
                        <Icon.ArrowRight className={`text-${activePage === 'next' ? 'white' : '#A0A3BD'} h-4 sm:h-auto`}/>
                    </button>
            </div>
        </div>

        
        </>
    )
}
export default ProductProduct
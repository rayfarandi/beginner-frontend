import React from "react"
import * as Icon from "react-feather"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { Link, useParams, useNavigate } from 'react-router-dom'
import axios from "axios"
import { FaStar } from "react-icons/fa6"
import noImage from '../assets/images/kopi.png'
import ProductCard from "../components/ProductCard"
import { useDispatch } from "react-redux"
import { addToCart as addToCartAction } from "../../redux/reducers/cart"

const ProductDetail =()=>{
    const [detailProduct, setDetailProduct] = React.useState({})
    const [recommendedProducts, setRecommendedProducts] = React.useState([])
    const [quantity, setQuantity] = React.useState(0)
    const [localSelector, setLocalSelector] = React.useState({
        product: null,
        size: null,
        variant: null,
        quantity: 0
    })
    const {id} = useParams()

    const decButton = () => {
        if(quantity <= 0) {
            setQuantity(0)
        } else {
            setQuantity(quantity - 1)
        }
    }

    const addButton = () => {
        setQuantity(quantity + 1)
    }

    
    
    const getRecomentProduct = async () => {
        try {
          const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/products`, {
            params: {
              best_seller: true,
              limit: 3
            }
          });
      
          console.log(response.data.results);
          setRecommendedProducts(response.data.results);
        } catch (error) {
          console.error('Error fetching product data:', error);
        }
      }
    

    const getDetailProduct = async (id) => {
        const {data} = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/products/${id}`)
        if(data.success){
            setDetailProduct(data.results)
            setLocalSelector({
                product: data.results,
                size: data.results.sizes[0],
                variant: data.results.variants[0],
                quantity
            })
        }
        console.log(data.results.sizes[0])
    }

    React.useEffect(()=>{
        getDetailProduct(id)
        getRecomentProduct(setRecommendedProducts)
        window.scrollTo({
            top:0,
            left:0,
            behavior:'smooth'
          })
    },[id])

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const addCart = () => {
        dispatch(addToCartAction(localSelector))
        navigate('/CheckOut')
    }
  

    return(
        <>
        
        <body className="flex flex-col items-center">
        <Navbar bg='#000000'/>
        <section className="h-fit sm:h-screen w-5/6 flex flex-col sm:flex-row items-center mt-20 sm:mt-8 gap-4 ">
        <div className="w-full sm:flex-1 flex flex-col items-center gap-2 sm:gap-4 h-96 sm:h-5/6">
          <div className="w-full">
            <img className="w-full h-72 sm:h-80 object-cover object-center" id={detailProduct?.id}
            src={detailProduct?.image? `${import.meta.env.VITE_BACKEND_URL}/uploads/products/${detailProduct?.image}` : noImage} />
          </div>
          <div className="flex-1 flex justify-between gap-4 w-full">
            <div>
              <img className="object-cover object-center" src={noImage}/>
            </div>
            <div>
              <img className="object-cover object-center" src={noImage} />
            </div>
            <div>
              <img className="object-cover object-center" src={noImage} />
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-2 sm:gap-3">
          <div className="bg-red-500 text-white rounded-3xl text-xs sm:text-sm p-1.5 left-2 top-2 w-fit">
            <h1>FLASH SALE!</h1>
          </div>
          <h1 className="text-xl sm:text-3xl font-bold">{detailProduct?.name}</h1>
          <div className="flex items-center gap-4">
            <h1 className="text-red-500 text-[0.6rem] sm:text-xs font-semibold line-through">IDR {detailProduct?.basePrice*2?.toLocaleString('id')}</h1>
            <h1 className="text-slate-700 font-semibold text-xs sm:text-base" id="product-price">IDR {detailProduct?.basePrice?.toLocaleString('id')}</h1>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="flex items-center gap-2 sm:gap-4 text-yellow-500">
            <FaStar className="w-3 sm:w-auto "/>
            <FaStar className="w-3 sm:w-auto"/>
            <FaStar className="w-3 sm:w-auto"/>
            <FaStar className="w-3 sm:w-auto"/>
            <FaStar className="w-3 sm:w-auto"/>
            </div>
            <p className="text-gray-500 text-xs sm:text-sm" id="rating-number">5.0</p>
          </div>
          
          <div className="flex items-center divide-gray-500 divide-x-2 w-fit text-sm text-gray-500">
            <p className="flex-1 text-xs sm:text-sm pr-2">200+ Review</p>
            {detailProduct?.isRecommended && (
              <div className="flex-1 flex gap-2 sm:gap-4 justify-center items-center pl-2">
                <p className="text-xs sm:text-sm"> Recommendation</p>
                <Icon.ThumbsUp className="text-slate-700 h-4 sm:h-auto"/>
              </div>
            )}
          </div>
          <p className="text-xs sm:text-sm">
            {detailProduct?.description}
          </p>
          
          <div className="h-9 w-fit flex flex-row border rounded-md border-gray-3">
                <div onClick={decButton} id="substract-button" className="flex w-9 text-lg font-semibold justify-center items-center border border-slate-700 rounded-md hover:bg-slate-700 active:scale-95 transition:all duration-300 cursor-pointer hover:text-white">-</div>
                <div id="quantity-number" className="flex w-10 text-lg font-semibold justify-center items-center">{quantity}</div>
                <div onClick={addButton} id="add-button" className="flex w-9 text-lg font-semibold justify-center items-center border border-slate-700 rounded-md hover:bg-slate-700 hover:text-white active:scale-95 transition:all duration-300 cursor-pointer">+</div>
            </div>
        
            <div className="flex flex-col gap-3">
                <span className="font-semibold">Choose Size</span>

                <div className="flex flex-row items-center h-10 gap-8">
                    {detailProduct?.sizes?.map(item => (
                            <button onClick={()=>setLocalSelector({...localSelector, size: item})} type="button" key={`size_${item.id}`} className={`flex flex-1 h-full text-sm tracking-wide justify-center items-center border ${localSelector.size.id === item.id ? 'border-slate-700':'border-gray-300'} hover:border hover:border-slate-700 hover:bg-slate-700 hover:text-white active:scale-95 transition:all duration-300 cursor-pointer`}>
                            {item.size}
                        </button>
                    ))}
                </div>
            </div>
        
            <div className="flex flex-col gap-3">
                <span className="font-semibold">Hot/Ice?</span>
                <div className="flex flex-row items-center h-10 gap-8">
                    {detailProduct?.variants?.map(item => (
                        <button onClick={()=>setLocalSelector({...localSelector, variant: item})} type="button" key={`variant_${item.id}`} className={`flex flex-1 h-full text-sm tracking-wide text-black justify-center items-center border ${localSelector.variant.id === item.id ? 'border-slate-700':'border-gray-300'} hover:border hover:border-slate-700 hover:bg-slate-700 hover:text-white active:scale-95 transition:all duration-300 cursor-pointer`}>
                            {item.name}
                        </button>
                    ))}
                </div>
            </div>
        
            <div className="flex flex-row h-11 gap-5 mt-8">
                <Link to={'/CheckOut'} className="flex flex-1 text-sm justify-center items-center border border-slate-700 bg-slate-700 rounded-md hover:border-slate-700 text-white active:scale-95 transition:all duration-300 cursor-pointer"><button id="buy-button" >Buy</button></Link>
                <button onClick={addCart} className="flex flex-row flex-1 justify-center items-center gap-5 border border-slate-700 rounded-md hover:border-slate-700 active:scale-95 transition:all duration-300 cursor-pointer">
                    Add to Cart
                </button>
            </div>
        </div>
      </section>
      {/* product detail */}

      {/* recommen product */}
        <div className="h-fit sm:h-screen flex flex-col items-center w-5/6 gap-4 mt-8 mb-8 sm:mb-0">
          <h1 className="w-full text-xl text-center sm:text-start sm:text-4xl">Recommendation <span className="text-[#8E6447]">For You</span></h1>
          <div className="gap-y-44 gap-x-6 flex flex-wrap justify-center mb-44 sm:gap-20 w-fit mx-6 sm:mx-0 sm:px-6">
              {recommendedProducts.map((item, index)=>(
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
        </div>
      {/* recommen product */}
      
        </body>
        <Footer />
        </>
    )
}

export default ProductDetail
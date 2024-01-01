import React,{ useState, useEffect } from "react"
import Footer from "../components/Footer"
import Navbar from "../components/navbar"
import { Link, useParams } from 'react-router-dom'
import axios from "axios"
import ProductHome from "../components/ProductHome"
import { FaStar } from "react-icons/fa6"
import noImage from '../assets/images/kopi.png'
import ProductCard from "../components/ProductCard"

const ProductDetail =(image)=>{
const {id} = useParams()
const [product, setProducts] = useState (null)
  const getProduct = async ()=>{
    const res = await axios.get(`http://localhost:8888/products/${id}`)

    setProducts(res.data.results)
  }
  useEffect(()=>{ window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
    getProduct()
  },[id])

  const [quantity,setQuantity] = React.useState(0)
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

  const [ProductData, setData]= React.useState([])
    
    const getRecomentProduct = async () => {
        try {
          const response = await axios.get('http://localhost:8888/products', {
            params: {
              best_seller: true,
              limit: 3
            }
          });
      
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
        <Navbar bg='#000000'/>
        <body className="flex flex-col items-center">
        <section className="h-fit sm:h-screen w-5/6 flex flex-col sm:flex-row items-center mt-20 sm:mt-18 gap-4 sm:gap-0">
        <div className="flex-1 flex flex-col items-center gap-2 sm:gap-4 w-fit h-fit">
          <div className="">
            <img className="w-96 h-72 sm:h-96" id={product?.id}
            src={product?.image? `http://localhost:8888/uploads/products/${product?.image}` : noImage} />
          </div>
          <div className="flex gap-6">
            <div>
              <img className="w-28" src="src/assets/images/detail-product1.jpg" />
            </div>
            <div>
              <img className="w-28" src="src/assets/images/detail-product2.jpg" />
            </div>
            <div>
              <img className="w-28" src="src/assets/images/detail-product3.jpg" />
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-2 sm:gap-3">
          <div className="bg-red-500 text-white rounded-3xl text-xs sm:text-sm p-1.5 left-2 top-2 w-fit">
            <h1>FLASH SALE!</h1>
          </div>
          <h1 className="text-xl sm:text-3xl font-bold">{product?.name}</h1>
          <div className="flex items-center gap-4">
            <h1 className="text-red-500 text-[0.6rem] sm:text-xs font-semibold line-through">IDR {product?.basePrice*2}</h1>
            <h1 className="text-orange-500 font-semibold text-xs sm:text-base" id="product-price">IDR {product?.basePrice}</h1>
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
          <div className="flex items-center divide-gray-500 divide-x-2 w-[15rem] sm:w-3/5 text-sm text-gray-500">
            <p className="w-[35%] text-xs sm:text-sm">200+ Review</p>
            <div className="flex-1 flex gap-2 sm:gap-4 justify-center items-center">
              <p className="text-xs sm:text-sm">Recommendation</p>
              <i className="text-orange-500 h-4 sm:h-auto" data-feather="thumbs-up"></i>
            </div>
          </div>
          <p className="text-xs sm:text-sm">
            {product?.description}
          </p>
          
          <div className="h-9 w-fit flex flex-row border rounded-md border-gray-3">
            <div onClick={decButton} id="substract-button" className="flex w-9 text-lg font-semibold justify-center items-center border border-orange-500 rounded-md hover:bg-orange-500 active:scale-95 transition:all duration-300 cursor-pointer">-</div>                <div id="quantity-number" className="flex w-10 text-lg font-semibold justify-center items-center">{quantity}</div>
            <div onClick={addButton} id="add-button" className="flex w-9 text-lg font-semibold justify-center items-center border border-orange-500 rounded-md hover:bg-orange-500 active:scale-95 transition:all duration-300 cursor-pointer">+</div>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-xs sm:text-auto">Choose Size</h4>
            <div className="flex justify-between gap-4">
              <p className="flex-1 flex justify-center border border-gray-300 hover:border hover:border-orange-500 active:scale-95 transition:all duration-300 cursor-pointer text-xs sm:text-sm rounded py-1 sm:py-1.5">Regular</p>
              <p className="flex-1 flex justify-center border border-gray-300 hover:border hover:border-orange-500 active:scale-95 transition:all duration-300 cursor-pointer rounded py-1 sm:py-1.5">Medium</p>
              <p className="flex-1 flex justify-center border border-gray-300 hover:border hover:border-orange-500 active:scale-95 transition:all duration-300 cursor-pointer rounded py-1 sm:py-1.5">Large</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-xs sm:text-auto">Hot/Ice?</h4>
            <div className="flex justify-between gap-4">
              <p className="flex-1 flex justify-center text-xs sm:text-sm border border-gray-300 hover:border hover:border-orange-500 active:scale-95 transition:all duration-300 cursor-pointer rounded py-1 sm:py-1.5">Cold</p>
              <p className="flex-1 flex justify-center text-xs sm:text-sm border border-gray-300 hover:border hover:border-orange-500 active:scale-95 transition:all duration-300 cursor-pointer rounded py-1 sm:py-1.5">Hot</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-3 sm:mt-4"> 
          <button className="flex-1 text-xs sm:text-sm bg-orange-500 rounded py-1.5"><Link to='/checkout'>Buy</Link></button>
          
            
            <button className="flex-1 flex justify-center gap-2 sm:gap-4 text-orange-500 border border-orange-500 rounded py-1.5">
              <i className="text-orange-500 h-4 sm:h-auto" data-feather="shopping-cart"></i>
              <p className="text-xs sm:text-sm">add to cart</p>
            </button>
          </div>
        </div>
      </section>
      {/* product detail */}

      {/* recommen product */}
        <div className="h-fit sm:h-screen flex flex-col justify-center items-center w-5/6 gap-4 mt-8 mb-8 sm:mb-0">
          <h1 className="w-full text-xl text-center sm:text-start sm:text-4xl">Recommendation <span className="text-[#8E6447]">For You</span></h1>
          <div className="flex sm:flex-row flex-col my-5 gap-2 sm:gap-4">
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
        </div>
      {/* recommen product */}
        </body>
        <Footer />
        </>
    )
}

export default ProductDetail
import * as Icon from 'react-feather'
import { Link } from 'react-router-dom'

// No Image
import noImage from '../assets/images/kopi.png'
import Rating from './Rating'


const ProductCard =({id,name,description,price,image,isFlashSale,ratingProduct})=>{
    return(
        <div className='relative flex justify-center w-fit h-fit'>
           
            <div>
                <img
                className='w-44 h-44 sm:w-56 sm:h-56 object-cover'
                src={image ? `http://localhost:8888/uploads/products/${image}` : noImage}
                alt="product"
                />
            </div>

            {isFlashSale && (
                <div className='absolute bg-[#D00000] text-white rounded-3xl text-xs p-1.5 left-2 top-2'><h1>Flash Sale !</h1></div>
            )}
            
                <div
                  className="absolute w-11/12 h-[12.5rem] sm:h-5/6 bg-white top-[85%] p-1.5 sm:p-2 flex flex-col gap-1.5"
                >
                  <h1
                    className="font-semibold text-sm sm:text-base"
                    id="product-name"
                  >
                    <Link to={`/productdetail/${id}`}>{name}</Link>
                  </h1>

                  <p className="text-[0.6rem] sm:text-[0.7rem] text-[#4F5665]">
                    {description}
                  </p>

                    {ratingProduct &&(<div className="flex items-center gap-2 sm:gap-4">
                        <div className="flex items-center gap-2 sm:gap-4">
                            <div>
                            <img className="w-3 sm:w-auto" src="./assets/star.png" />
                            </div>
                            <div>
                            <img className="w-3 sm:w-auto" src="./assets/star.png" />
                            </div>
                            <div>
                            <img className="w-3 sm:w-auto" src="./assets/star.png" />
                            </div>
                            <div>
                            <img className="w-3 sm:w-auto" src="./assets/star.png" />
                            </div>
                            <div>
                            <img className="w-3 sm:w-auto" src="./assets/star.png" />
                            </div>
                        </div>
                        <p
                            className="text-[#4F5665] text-xs sm:text-sm"
                            id="rating-number"
                        >
                            5.0
                        </p>
                        </div>)}

                  <div className="flex items-center gap-4">
                    <h1
                      className="text-[#D00000] text-[0.6rem] sm:text-xs font-semibold line-through"
                    >
                      IDR{price*2 ?.toLocaleString('id')}
                    </h1>
                    <h1
                      className="text-slate-700 font-semibold text-xs sm:text-base"
                      id="product-price"
                    >
                      IDR {price?.toLocaleString('id')}
                    </h1>
                  </div>

                  <div className="flex-1 flex flex-col sm:flex-row items-end gap-1 sm:gap-2">
                    <Link to={`/productdetail/${id}`} className="w-full sm:w-9/12 bg-slate-700 rounded-md text-xs sm:text-sm py-1 active:scale-95 transition-all flex justify-center">Buy</Link>
                    <button className="w-full sm:flex-1 border border-slate-700 text-slate-700 p-[0.21rem] rounded-md flex justify-center items-center active:scale-95 transition-all">
                      <Icon.ShoppingCart className="h-4 sm:h-5" />
                    </button>
                  </div>

                </div>
        </div>
    )
}
export default ProductCard
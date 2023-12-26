import Footer from "../components/Footer"
import Navbar from "../components/navbar"
import { Link } from 'react-router-dom'

const ProductDetail =()=>{
    return(
        <>
        <Navbar />
        <body className="flex flex-col items-center">
        <section className="h-fit sm:h-screen w-5/6 flex flex-col sm:flex-row items-center mt-20 sm:mt-14 gap-4 sm:gap-0">
        <div className="flex-1 flex flex-col items-center gap-2 sm:gap-4 w-fit h-fit">
          <div className="">
            <img className="w-96 h-72 sm:h-96" src="src/assets/images/detail-product4.jpg" />
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
          <h1 className="text-xl sm:text-3xl font-bold">Hazelnut Latte</h1>
          <div className="flex items-center gap-4">
            <h1 className="text-red-500 text-[0.6rem] sm:text-xs font-semibold line-through">IDR 20.000</h1>
            <h1 className="text-orange-500 font-semibold text-xs sm:text-base" id="product-price">IDR 10.000</h1>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="flex items-center gap-2 sm:gap-4">
              <div>
                <img className="w-3 sm:w-auto" src="src/assets/images/star.png" />
              </div>
              <div>
                <img className="w-3 sm:w-auto" src="src/assets/images/star.png" />
              </div>
              <div>
                <img className="w-3 sm:w-auto" src="src/assets/images/star.png" />
              </div>
              <div>
                <img className="w-3 sm:w-auto" src="src/assets/images/star.png" />
              </div>
              <div>
                <img className="w-3 sm:w-auto" src="src/assets/images/star.png" />
              </div>
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
            Cold brewing is a method of brewing that combines ground coffee and
            cool water and uses time instead of heat to extract the flavor. It
            is brewed in small batches and steeped for as long as 48 hours.
          </p>
          <div className="flex items-center">
            <div className="border border-orange-500 bg-white rounded-sm w-4 h-4 sm:h-6 sm:w-6 flex items-center translate-x-1">
              <i className="h-3 sm:h-4" data-feather="minus"></i>
            </div>
            <div className="border border-white w-9 sm:w-12 flex justify-center items-center rounded-sm">
              <h1 className="text-xs sm:text-sm sm:py-[0.1rem]">1</h1>
            </div>
            <div className="bg-orange-500 rounded-sm w-4 h-4 sm:h-6 sm:w-6 flex items-center translate-x-[-0.25rem]">
              <i className="h-3 sm:h-4" data-feather="plus"></i>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-xs sm:text-auto">Choose Size</h4>
            <div className="flex justify-between gap-4">
              <p className="flex-1 flex justify-center border border-orange-500 text-xs sm:text-sm rounded py-1 sm:py-1.5">Regular</p>
              <p className="flex-1 flex justify-center border border-white text-xs sm:text-sm text-gray-500 rounded py-1 sm:py-1.5">Medium</p>
              <p className="flex-1 flex justify-center border border-white text-xs sm:text-sm text-gray-500 rounded py-1 sm:py-1.5">Large</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-xs sm:text-auto">Hot/Ice?</h4>
            <div className="flex justify-between gap-4">
              <p className="flex-1 flex justify-center text-xs sm:text-sm border border-orange-500 rounded py-1 sm:py-1.5">Cold</p>
              <p className="flex-1 flex justify-center text-xs sm:text-sm border border-white text-gray-500 rounded py-1 sm:py-1.5">Hot</p>
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
  
          <div className="flex justify-center gap-4 sm:gap-12 mb-44 w-md sm:w-fit flex-wrap gap-y-44">
            <div className="relative flex justify-center w-fit h-fit">
              <div>
                <img className=" w-48 sm:w-60" src="src/assets/images/home-product1.jpg" alt="" />
              </div>
              <div className="absolute bg-red-500 text-white rounded-3xl text-xs p-1.5 left-2 top-2">
                <h1>FLASH SALE!</h1>
              </div>
              <div className="absolute w-11/12 bg-white top-[85%] p-1.5 sm:p-2 flex flex-col gap-2">
                <h1 className="font-semibold text-sm sm:text-base" id="product-name">Hazelnut Latte</h1>
                <p className="text-[0.6rem] sm:text-[0.7rem] text-gray-500">
                  You can explore the menu that we provide with fun and have their
                  own taste and make your day better.
                </p>
                <div className="flex items-center gap-2 sm:gap-4">
                  <div className="flex items-center gap-2 sm:gap-4">
                    <div>
                      <img className="w-3 sm:w-auto" src="src/assets/images/star.png" />
                    </div>
                    <div>
                      <img className="w-3 sm:w-auto" src="src/assets/images/star.png" />
                    </div>
                    <div>
                      <img className="w-3 sm:w-auto" src="src/assets/images/star.png" />
                    </div>
                    <div>
                      <img className="w-3 sm:w-auto" src="src/assets/images/star.png" />
                    </div>
                    <div>
                      <img className="w-3 sm:w-auto" src="src/assets/images/star.png" />
                    </div>
                  </div>
                  <p className="text-gray-500 text-xs sm:text-sm" id="rating-number">5.0</p>
                </div>
                <div className="flex items-center gap-4">
                  <h1 className="text-red-500 text-[0.6rem] sm:text-xs font-semibold line-through">IDR 20.000</h1>
                  <h1 className="text-orange-500 font-semibold text-xs sm:text-base" id="product-price">IDR 10.000</h1>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
                  <button className=" w-full sm:w-9/12 bg-orange-500 rounded-md text-xs sm:text-sm py-1">Buy</button>
                  <i className="w-full sm:flex-1 border border-orange-500 text-orange-500 p-1 h-6 sm:h-7 rounded-md" data-feather="shopping-cart"></i>
                </div>
              </div>
            </div>
  
            <div className="relative flex justify-center w-fit h-fit">
              <div>
                <img className=" w-48 sm:w-60" src="src/assets/images/home-product2.jpg" alt="" />
              </div>
              <div className="absolute bg-red-500 text-white rounded-3xl text-xs p-1.5 left-2 top-2">
                <h1>FLASH SALE!</h1>
              </div>
              <div className="absolute w-11/12 bg-white top-[85%] p-1.5 sm:p-2 flex flex-col gap-2">
                <h1 className="font-semibold text-sm sm:text-base" id="product-name">Hazelnut Latte</h1>
                <p className="text-[0.6rem] sm:text-[0.7rem] text-gray-500">
                  You can explore the menu that we provide with fun and have their
                  own taste and make your day better.
                </p>
                <div className="flex items-center gap-2 sm:gap-4">
                  <div className="flex items-center gap-2 sm:gap-4">
                    <div>
                      <img className="w-3 sm:w-auto" src="src/assets/images/star.png" />
                    </div>
                    <div>
                      <img className="w-3 sm:w-auto" src="src/assets/images/star.png" />
                    </div>
                    <div>
                      <img className="w-3 sm:w-auto" src="src/assets/images/star.png" />
                    </div>
                    <div>
                      <img className="w-3 sm:w-auto" src="src/assets/images/star.png" />
                    </div>
                    <div>
                      <img className="w-3 sm:w-auto" src="src/assets/images/star.png" />
                    </div>
                  </div>
                  <p className="text-gray-500 text-xs sm:text-sm" id="rating-number">5.0</p>
                </div>
                <div className="flex items-center gap-4">
                  <h1 className="text-red-500 text-[0.6rem] sm:text-xs font-semibold line-through">IDR 20.000</h1>
                  <h1 className="text-orange-500 font-semibold text-xs sm:text-base" id="product-price">IDR 10.000</h1>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
                  <button className=" w-full sm:w-9/12 bg-orange-500 rounded-md text-xs sm:text-sm py-1">Buy</button>
                  <i className="w-full sm:flex-1 border border-orange-500 text-orange-500 p-1 h-6 sm:h-7 rounded-md" data-feather="shopping-cart"></i>
                </div>
              </div>
            </div>
  
            <div className="relative hidden sm:flex justify-center w-fit h-fit">
              <div>
                <img className=" w-48 sm:w-60" src="src/assets/images/home-product3.jpg" alt="" />
              </div>
              <div className="absolute bg-red-500 text-white rounded-3xl text-xs p-1.5 left-2 top-2">
                <h1>FLASH SALE!</h1>
              </div>
              <div className="absolute w-11/12 bg-white top-[85%] p-1.5 sm:p-2 flex flex-col gap-2">
                <h1 className="font-semibold text-sm sm:text-base" id="product-name">Hazelnut Latte</h1>
                <p className="text-[0.6rem] sm:text-[0.7rem] text-gray-500">
                  You can explore the menu that we provide with fun and have their
                  own taste and make your day better.
                </p>
                <div className="flex items-center gap-2 sm:gap-4">
                  <div className="flex items-center gap-2 sm:gap-4">
                    <div>
                      <img className="w-3 sm:w-auto" src="src/assets/images/star.png" />
                    </div>
                    <div>
                      <img className="w-3 sm:w-auto" src="src/assets/images/star.png" />
                    </div>
                    <div>
                      <img className="w-3 sm:w-auto" src="src/assets/images/star.png" />
                    </div>
                    <div>
                      <img className="w-3 sm:w-auto" src="src/assets/images/star.png" />
                    </div>
                    <div>
                      <img className="w-3 sm:w-auto" src="src/assets/images/star.png" />
                    </div>
                  </div>
                  <p className="text-gray-500 text-xs sm:text-sm" id="rating-number">5.0</p>
                </div>
                <div className="flex items-center gap-4">
                  <h1 className="text-red-500 text-[0.6rem] sm:text-xs font-semibold line-through">IDR 20.000</h1>
                  <h1 className="text-orange-500 font-semibold text-xs sm:text-base" id="product-price">IDR 10.000</h1>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
                  <button className=" w-full sm:w-9/12 bg-orange-500 rounded-md text-xs sm:text-sm py-1">Buy</button>
                  <i className="w-full sm:flex-1 border border-orange-500 text-orange-500 p-1 h-6 sm:h-7 rounded-md" data-feather="shopping-cart"></i>
                </div>
              </div>
            </div>
          </div>
  
          <div className="flex gap-2 justify-center">
            <div className="flex justify-center items-center bg-orange-500 text-xs sm:text-sm rounded-full h-6 w-6 sm:h-8 sm:w-8">
              <h3>1</h3>
            </div>

            <div className="flex justify-center items-center  text-gray-700 text-xs sm:text-sm bg-white rounded-full h-6 w-6 sm:h-8 sm:w-8">
              <h3>2</h3>
            </div>

            <div className="flex justify-center items-center  text-gray-700 text-xs sm:text-sm bg-white rounded-full h-6 w-6 sm:h-8 sm:w-8">
              <h3>2</h3>
            </div>

            <div className="flex justify-center items-center text-gray-700 text-xs sm:text-sm bg-white rounded-full h-6 w-6 sm:h-8 sm:w-8">
              <h3>4</h3>
            </div>

            <div className="flex justify-center items-center bg-orange-500 rounded-full h-6 w-6 sm:h-8 sm:w-8">
              <i className="text-white h-4 sm:h-auto" data-feather="arrow-right"></i>
            </div>
          </div>
        </div>
      {/* recommen product */}
        </body>
        <Footer />
        </>
    )
}

export default ProductDetail
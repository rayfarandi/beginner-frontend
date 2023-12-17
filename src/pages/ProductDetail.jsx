import Footer from "../components/Footer"
import Navbar from "../components/navbar"

const ProductDetail =()=>{
    return(
        <>
        <Navbar />
        <body className="flex flex-col items-center">
        <section class="h-fit sm:h-screen w-5/6 flex flex-col sm:flex-row items-center mt-20 sm:mt-14 gap-4 sm:gap-0">
        <div class="flex-1 flex flex-col items-center gap-2 sm:gap-4 w-fit h-fit">
          <div class="">
            <img class="w-96 h-72 sm:h-96" src="./assets/detail-product4.jpg" />
          </div>
          <div class="flex gap-6">
            <div>
              <img class="w-28" src="./assets/detail-product1.jpg" />
            </div>
            <div>
              <img class="w-28" src="./assets/detail-product2.jpg" />
            </div>
            <div>
              <img class="w-28" src="./assets/detail-product3.jpg" />
            </div>
          </div>
        </div>

        <div class="flex-1 flex flex-col gap-2 sm:gap-3">
          <div class="bg-[#D00000] text-white rounded-3xl text-xs sm:text-sm p-1.5 left-2 top-2 w-fit">
            <h1>FLASH SALE!</h1>
          </div>
          <h1 class="text-xl sm:text-3xl font-bold">Hazelnut Latte</h1>
          <div class="flex items-center gap-4">
            <h1 class="text-[#D00000] text-[0.6rem] sm:text-xs font-semibold line-through">IDR 20.000</h1>
            <h1 class="text-[#FF8906] font-semibold text-xs sm:text-base" id="product-price">IDR 10.000</h1>
          </div>
          <div class="flex items-center gap-2 sm:gap-4">
            <div class="flex items-center gap-2 sm:gap-4">
              <div>
                <img class="w-3 sm:w-auto" src="/assets/star.png" />
              </div>
              <div>
                <img class="w-3 sm:w-auto" src="/assets/star.png" />
              </div>
              <div>
                <img class="w-3 sm:w-auto" src="/assets/star.png" />
              </div>
              <div>
                <img class="w-3 sm:w-auto" src="/assets/star.png" />
              </div>
              <div>
                <img class="w-3 sm:w-auto" src="/assets/star.png" />
              </div>
            </div>
            <p class="text-[#4F5665] text-xs sm:text-sm" id="rating-number">5.0</p>
          </div>
          <div class="flex items-center divide-[#4F5665] divide-x-2 w-[15rem] sm:w-3/5 text-sm text-[#4F5665]">
            <p class="w-[35%] text-xs sm:text-sm">200+ Review</p>
            <div class="flex-1 flex gap-2 sm:gap-4 justify-center items-center">
              <p class="text-xs sm:text-sm">Recommendation</p>
              <i class="text-[#FF8906] h-4 sm:h-auto" data-feather="thumbs-up"></i>
            </div>
          </div>
          <p class="text-xs sm:text-sm">
            Cold brewing is a method of brewing that combines ground coffee and
            cool water and uses time instead of heat to extract the flavor. It
            is brewed in small batches and steeped for as long as 48 hours.
          </p>
          <div class="flex items-center">
            <div class="border border-[#FF8906] bg-white rounded-sm w-4 h-4 sm:h-6 sm:w-6 flex items-center translate-x-1">
              <i class="h-3 sm:h-4" data-feather="minus"></i>
            </div>
            <div class="border border-[#E8E8E8] w-9 sm:w-12 flex justify-center items-center rounded-sm">
              <h1 class="text-xs sm:text-sm sm:py-[0.1rem]">1</h1>
            </div>
            <div class="bg-[#FF8906] rounded-sm w-4 h-4 sm:h-6 sm:w-6 flex items-center translate-x-[-0.25rem]">
              <i class="h-3 sm:h-4" data-feather="plus"></i>
            </div>
          </div>
          <div class="flex flex-col gap-2">
            <h4 class="font-semibold text-xs sm:text-auto">Choose Size</h4>
            <div class="flex justify-between gap-4">
              <p class="flex-1 flex justify-center border border-[#FF8906] text-xs sm:text-sm rounded py-1 sm:py-1.5">Regular</p>
              <p class="flex-1 flex justify-center border border-[#E8E8E8] text-xs sm:text-sm text-[#4F5665] rounded py-1 sm:py-1.5">Medium</p>
              <p class="flex-1 flex justify-center border border-[#E8E8E8] text-xs sm:text-sm text-[#4F5665] rounded py-1 sm:py-1.5">Large</p>
            </div>
          </div>
          <div class="flex flex-col gap-2">
            <h4 class="font-semibold text-xs sm:text-auto">Hot/Ice?</h4>
            <div class="flex justify-between gap-4">
              <p class="flex-1 flex justify-center text-xs sm:text-sm border border-[#FF8906] rounded py-1 sm:py-1.5">Cold</p>
              <p class="flex-1 flex justify-center text-xs sm:text-sm border border-[#E8E8E8] text-[#4F5665] rounded py-1 sm:py-1.5">Hot</p>
            </div>
          </div>
          <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-3 sm:mt-4">
            <button class="flex-1 text-xs sm:text-sm bg-[#FF8906] rounded py-1.5">Buy</button>
            <button class="flex-1 flex justify-center gap-2 sm:gap-4 text-[#FF8906] border border-[#FF8906] rounded py-1.5">
              <i class="text-[#FF8906] h-4 sm:h-auto" data-feather="shopping-cart"></i>
              <p class="text-xs sm:text-sm">add to cart</p>
            </button>
          </div>
        </div>
      </section>
      <!-- product detail end -->

      <!-- recommendation products start-->
        <div class="h-fit sm:h-screen flex flex-col justify-center items-center w-5/6 gap-4 mt-8 mb-8 sm:mb-0">
          <h1 class="w-full text-xl text-center sm:text-start sm:text-4xl">Recommendation <span class="text-[#8E6447]">For You</span></h1>
  
          <div class="flex justify-center gap-4 sm:gap-12 mb-44 w-md sm:w-fit flex-wrap gap-y-44">
            <div class="relative flex justify-center w-fit h-fit">
              <div>
                <img class=" w-48 sm:w-60" src="./assets/home-product1.jpg" alt="" />
              </div>
              <div class="absolute bg-[#D00000] text-white rounded-3xl text-xs p-1.5 left-2 top-2">
                <h1>FLASH SALE!</h1>
              </div>
              <div class="absolute w-11/12 bg-white top-[85%] p-1.5 sm:p-2 flex flex-col gap-2">
                <h1 class="font-semibold text-sm sm:text-base" id="product-name">Hazelnut Latte</h1>
                <p class="text-[0.6rem] sm:text-[0.7rem] text-[#4F5665]">
                  You can explore the menu that we provide with fun and have their
                  own taste and make your day better.
                </p>
                <div class="flex items-center gap-2 sm:gap-4">
                  <div class="flex items-center gap-2 sm:gap-4">
                    <div>
                      <img class="w-3 sm:w-auto" src="/assets/star.png" />
                    </div>
                    <div>
                      <img class="w-3 sm:w-auto" src="/assets/star.png" />
                    </div>
                    <div>
                      <img class="w-3 sm:w-auto" src="/assets/star.png" />
                    </div>
                    <div>
                      <img class="w-3 sm:w-auto" src="/assets/star.png" />
                    </div>
                    <div>
                      <img class="w-3 sm:w-auto" src="/assets/star.png" />
                    </div>
                  </div>
                  <p class="text-[#4F5665] text-xs sm:text-sm" id="rating-number">5.0</p>
                </div>
                <div class="flex items-center gap-4">
                  <h1 class="text-[#D00000] text-[0.6rem] sm:text-xs font-semibold line-through">IDR 20.000</h1>
                  <h1 class="text-[#FF8906] font-semibold text-xs sm:text-base" id="product-price">IDR 10.000</h1>
                </div>
                <div class="flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
                  <button class=" w-full sm:w-9/12 bg-[#FF8906] rounded-md text-xs sm:text-sm py-1">Buy</button>
                  <i class="w-full sm:flex-1 border border-[#FF8906] text-[#FF8906] p-1 h-6 sm:h-7 rounded-md" data-feather="shopping-cart"></i>
                </div>
              </div>
            </div>
  
            <div class="relative flex justify-center w-fit h-fit">
              <div>
                <img class=" w-48 sm:w-60" src="./assets/home-product2.jpg" alt="" />
              </div>
              <div class="absolute bg-[#D00000] text-white rounded-3xl text-xs p-1.5 left-2 top-2">
                <h1>FLASH SALE!</h1>
              </div>
              <div class="absolute w-11/12 bg-white top-[85%] p-1.5 sm:p-2 flex flex-col gap-2">
                <h1 class="font-semibold text-sm sm:text-base" id="product-name">Hazelnut Latte</h1>
                <p class="text-[0.6rem] sm:text-[0.7rem] text-[#4F5665]">
                  You can explore the menu that we provide with fun and have their
                  own taste and make your day better.
                </p>
                <div class="flex items-center gap-2 sm:gap-4">
                  <div class="flex items-center gap-2 sm:gap-4">
                    <div>
                      <img class="w-3 sm:w-auto" src="/assets/star.png" />
                    </div>
                    <div>
                      <img class="w-3 sm:w-auto" src="/assets/star.png" />
                    </div>
                    <div>
                      <img class="w-3 sm:w-auto" src="/assets/star.png" />
                    </div>
                    <div>
                      <img class="w-3 sm:w-auto" src="/assets/star.png" />
                    </div>
                    <div>
                      <img class="w-3 sm:w-auto" src="/assets/star.png" />
                    </div>
                  </div>
                  <p class="text-[#4F5665] text-xs sm:text-sm" id="rating-number">5.0</p>
                </div>
                <div class="flex items-center gap-4">
                  <h1 class="text-[#D00000] text-[0.6rem] sm:text-xs font-semibold line-through">IDR 20.000</h1>
                  <h1 class="text-[#FF8906] font-semibold text-xs sm:text-base" id="product-price">IDR 10.000</h1>
                </div>
                <div class="flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
                  <button class=" w-full sm:w-9/12 bg-[#FF8906] rounded-md text-xs sm:text-sm py-1">Buy</button>
                  <i class="w-full sm:flex-1 border border-[#FF8906] text-[#FF8906] p-1 h-6 sm:h-7 rounded-md" data-feather="shopping-cart"></i>
                </div>
              </div>
            </div>
  
            <div class="relative hidden sm:flex justify-center w-fit h-fit">
              <div>
                <img class=" w-48 sm:w-60" src="./assets/home-product3.jpg" alt="" />
              </div>
              <div class="absolute bg-[#D00000] text-white rounded-3xl text-xs p-1.5 left-2 top-2">
                <h1>FLASH SALE!</h1>
              </div>
              <div class="absolute w-11/12 bg-white top-[85%] p-1.5 sm:p-2 flex flex-col gap-2">
                <h1 class="font-semibold text-sm sm:text-base" id="product-name">Hazelnut Latte</h1>
                <p class="text-[0.6rem] sm:text-[0.7rem] text-[#4F5665]">
                  You can explore the menu that we provide with fun and have their
                  own taste and make your day better.
                </p>
                <div class="flex items-center gap-2 sm:gap-4">
                  <div class="flex items-center gap-2 sm:gap-4">
                    <div>
                      <img class="w-3 sm:w-auto" src="/assets/star.png" />
                    </div>
                    <div>
                      <img class="w-3 sm:w-auto" src="/assets/star.png" />
                    </div>
                    <div>
                      <img class="w-3 sm:w-auto" src="/assets/star.png" />
                    </div>
                    <div>
                      <img class="w-3 sm:w-auto" src="/assets/star.png" />
                    </div>
                    <div>
                      <img class="w-3 sm:w-auto" src="/assets/star.png" />
                    </div>
                  </div>
                  <p class="text-[#4F5665] text-xs sm:text-sm" id="rating-number">5.0</p>
                </div>
                <div class="flex items-center gap-4">
                  <h1 class="text-[#D00000] text-[0.6rem] sm:text-xs font-semibold line-through">IDR 20.000</h1>
                  <h1 class="text-[#FF8906] font-semibold text-xs sm:text-base" id="product-price">IDR 10.000</h1>
                </div>
                <div class="flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
                  <button class=" w-full sm:w-9/12 bg-[#FF8906] rounded-md text-xs sm:text-sm py-1">Buy</button>
                  <i class="w-full sm:flex-1 border border-[#FF8906] text-[#FF8906] p-1 h-6 sm:h-7 rounded-md" data-feather="shopping-cart"></i>
                </div>
              </div>
            </div>
          </div>
  
          <div class="flex gap-2 justify-center">
            <div class="flex justify-center items-center bg-[#FF8906] text-xs sm:text-sm rounded-full h-6 w-6 sm:h-8 sm:w-8">
              <h3>1</h3>
            </div>

            <div class="flex justify-center items-center  text-[#A0A3BD] text-xs sm:text-sm bg-[#E8E8E8] rounded-full h-6 w-6 sm:h-8 sm:w-8">
              <h3>2</h3>
            </div>

            <div class="flex justify-center items-center  text-[#A0A3BD] text-xs sm:text-sm bg-[#E8E8E8] rounded-full h-6 w-6 sm:h-8 sm:w-8">
              <h3>2</h3>
            </div>

            <div class="flex justify-center items-center text-[#A0A3BD] text-xs sm:text-sm bg-[#E8E8E8] rounded-full h-6 w-6 sm:h-8 sm:w-8">
              <h3>4</h3>
            </div>

            <div class="flex justify-center items-center bg-[#FF8906] rounded-full h-6 w-6 sm:h-8 sm:w-8">
              <i class="text-white h-4 sm:h-auto" data-feather="arrow-right"></i>
            </div>
          </div>
        </div>
      recommen product
        </body>
        <Footer />
        </>
    )
}

export default ProductDetail
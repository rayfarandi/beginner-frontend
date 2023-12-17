import Chat from "../components/Chat"
import Footer from "../components/Footer"
import Navbar from "../components/navbar"



const Home =()=>{
    return(
        <>
        <body className="flex flex-col items-center">
        <Navbar />
                
            <div className="flex flex-col-reverse lg:flex-row h-screen w-full"> {/* <landing page */}
                    
             <div className="flex flex-1 justify-center items-center bg-gradient-to-b from-[#18181B] to-[#27272A]"> {/* left-landing */}
            
              <div className="flex flex-col mx-10 gap-5 "> {/* conten */}
                
                <h1 className="text-white font-medium text-5xl">Start Your Day with<br/>Coffee and Good Meals</h1>
                <h3 className=" text-white justify-center text-sm">
                    We provide high quality beans, good taste, and healthy meals made by
                    love just for you. Start your day with us for a bigger smile!
                </h3>
                <div className="flex justify-between">
                    <button className="bg-orange-500 py-2 px-3 rounded-md">Get Started</button>
                </div>
                <div className="flex divide-x-2">
                    <div className="flex flex-1 items-center">
                        <div className="flex flex-col gap-2">
                        <h2 className="text-orange-500 text-4xl font-semibold">90+</h2>
                        <h2 className="text-white">Staff</h2>
                        </div>
                    </div>
                    <div className="flex flex-1 justify-center items-center">
                        <div className="flex flex-col gap-2">
                        <h1 className="text-[#ff8906] text-4xl font-semibold">30+</h1>
                        <h2 className="text-white text-sm">Stores</h2>
                        </div>
                    </div>
                    <div className="flex flex-1 justify-end">
                        <div className="flex flex-col gap-2">
                        <h1 className="text-orange-500 text-4xl font-semibold">800+</h1>
                        <h2 className="text-white">Customer</h2>
                        </div>
                    </div>
                </div>
              </div>
             </div>
                <div className="flex flex-1 ">
                    {/* right-landing */}
                    <img src="assets/bg-home.jpg" alt="bacground coffee" className="flex flex-1 bg-center"/>
                    <Chat />
                    
                </div> {/* right-landing */}
                
            </div> {/* landing page */}

        
      <div className="flex h-screen w-full">{/* landing page 1 */}
        <div className="flex flex-col-reverse lg:flex-row lg:mb-10"> {/* bungkus */}
          
        <div className="flex-1 justify-center items-center">{/* left-landing */}
          <div className="flex flex-col lg:mx-6 gap-4 h-fit">
            <div className="flex items-center gap-4">
              <hr className="border-orange-500 border-4 h-14"/>
              <h1 className="text-4xl font-medium">
                We Provide <span className="text-amber-600">Good <br/> Coffee </span> and
                <span className="text-amber-600">Healthy Meals</span>
              </h1>
            </div>
            <h2 className="flex text-sm text-black">
              You can explore the menu that we provide with fun and have their
              own taste and make your day better.
            </h2>
            <div className="flex flex-col gap-2">
              <div className="flex">
                <i data-feather="check-circle" className="bg-green-700 rounded-full "></i>
                <h2 className="text-sm pl-2">High quality beans</h2>
              </div>

              <div className="flex">
                <i data-feather="check-circle" className="bg-green-700 rounded-full"></i>
                <h2 className="text-sm pl-2">Healthy meals, you can request the ingredients</h2>
              </div>

              <div className="flex">
                <i data-feather="check-circle" className="bg-green-700 rounded-full"></i>
                <h2 className="text-sm pl-2">Free member card with a minimum purchase of IDR 200.000.</h2>
              </div>

              <div className="flex">
                <i data-feather="check-circle" className="bg-green-700 rounded-full"></i>
                <h2 className="text-sm pl-2">Chat with our staff to get better experience for ordering</h2>
              </div>

            </div>
          </div>
         </div>

            <div className="flex flex-1 "> {/* right-landing */}
            <img src="assets/staff-image.jpg" alt="bacground staff-image" className="bg-center"/>
            </div>{/* right-landing */}
            </div>{/* bungkus */}
      </div> {/* landing page 1 */}


            {/* favorite product start */}
          <section className="h-fit sm:h-screen flex flex-col items-center sm:pt-10 w-full sm:w-5/6 gap-6 sm:gap-12">
            <div className="flex flex-col items-center gap-2 sm:gap-4">
                <h1 className="text-2xl text-center sm:text-5xl font-medium sm:mb-2 px-4">Here is Peoples <span className="text-[#8E6447]">Favorite</span></h1>
                <hr className="border-[#ff8906] border-2 sm:border-4 w-16"/>
                <p className="text-[#4f5665] text-xs sm:text-base text-center px-4">Lets choose and have a bit taste of poeples favorite. It might be yours too!</p>
            </div>

            <div className="gap-y-44 gap-x-6 flex flex-wrap justify-center mb-44 sm:gap-6 w-fit mx-6 sm:mx-0 sm:px-6">
                <div className="relative flex justify-center w-fit">
                <div className="w-44 sm:w-56">
                    <img src="./assets/home-product1.jpg" alt="" />
                </div>
                <div className="absolute w-11/12 bg-white shadow-md top-36 sm:top-44 p-2 flex flex-col gap-1 sm:gap-2">
                    <h1 className="font-semibold text-sm sm:text-base" id="product-name">Hazelnut Latte</h1>
                    <p className="text-[0.6rem] sm:text-[0.7rem] text-[#4F5665]">
                    You can explore the menu that we provide with fun and have their
                    own taste and make your day better.
                    </p>
                    <h1 className="text-[#FF8906] font-semibold text-sm sm:text-base" id="product-price">IDR 20.000</h1>
                    <div className="flex flex-col sm:flex-row items-center gap-2">
                    <button className="w-full sm:w-9/12 bg-[#FF8906] rounded-md text-xs sm:text-sm py-1">Buy</button>
                    <i className="w-full sm:flex-1 border border-[#FF8906] text-[#FF8906] p-1 h-6 sm:h-7 rounded-md" data-feather="shopping-cart"></i>
                    </div>
                </div>
                </div>

                <div className="relative flex justify-center w-fit">
                <div className="w-44 sm:w-56 bg-orange-100">
                    <img src="./assets/home-product2.jpg" alt="" />
                </div>
                <div className="absolute w-11/12 bg-white shadow-md top-36 sm:top-44 p-2 flex flex-col gap-1 sm:gap-2">
                    <h1 className="font-semibold text-sm sm:text-base" id="product-name">Hazelnut Latte</h1>
                    <p className="text-[0.6rem] sm:text-[0.7rem] text-[#4F5665]">
                    You can explore the menu that we provide with fun and have their
                    own taste and make your day better.
                    </p>
                    <h1 className="text-[#FF8906] font-semibold text-sm sm:text-base" id="product-price">IDR 20.000</h1>
                    <div className="flex flex-col sm:flex-row items-center gap-2">
                    <button className="w-full sm:w-9/12 bg-[#FF8906] rounded-md text-xs sm:text-sm py-1">Buy</button>
                    <i className="w-full sm:flex-1 border border-[#FF8906] text-[#FF8906] p-1 h-6 sm:h-7 rounded-md" data-feather="shopping-cart"></i>
                    </div>
                </div>
                </div>

                <div className="relative flex justify-center w-fit">
                <div className="w-44 sm:w-56 bg-orange-100">
                    <img src="./assets/home-product3.jpg" alt="" />
                </div>
                <div className="absolute w-11/12 bg-white shadow-md top-36 sm:top-44 p-2 flex flex-col gap-1 sm:gap-2">
                    <h1 className="font-semibold text-sm sm:text-base" id="product-name">Hazelnut Latte</h1>
                    <p className="text-[0.6rem] sm:text-[0.7rem] text-[#4F5665]">
                    You can explore the menu that we provide with fun and have their
                    own taste and make your day better.
                    </p>
                    <h1 className="text-[#FF8906] font-semibold text-sm sm:text-base" id="product-price">IDR 20.000</h1>
                    <div className="flex flex-col sm:flex-row items-center gap-2">
                    <button className="w-full sm:w-9/12 bg-[#FF8906] rounded-md text-xs sm:text-sm py-1">Buy</button>
                    <i className="w-full sm:flex-1 border border-[#FF8906] text-[#FF8906] p-1 h-6 sm:h-7 rounded-md" data-feather="shopping-cart"></i>
                    </div>
                </div>
                </div>

                <div className="relative flex justify-center w-fit">
                <div className="w-44 sm:w-56 bg-orange-100">
                    <img src="./assets/home-product1.jpg" alt="" />
                </div>
                <div className="absolute w-11/12 bg-white shadow-md top-36 sm:top-44 p-2 flex flex-col gap-1 sm:gap-2">
                    <h1 className="font-semibold text-sm sm:text-base" id="product-name">Hazelnut Latte</h1>
                    <p className="text-[0.6rem] sm:text-[0.7rem] text-[#4F5665]">
                    You can explore the menu that we provide with fun and have their
                    own taste and make your day better.
                    </p>
                    <h1 className="text-[#FF8906] font-semibold text-sm sm:text-base" id="product-price">IDR 20.000</h1>
                    <div className="flex flex-col sm:flex-row items-center gap-2">
                    <button className="w-full sm:w-9/12 bg-[#FF8906] rounded-md text-xs sm:text-sm py-1">Buy</button>
                    <i className="w-full sm:flex-1 border border-[#FF8906] text-[#FF8906] p-1 h-6 sm:h-7 rounded-md" data-feather="shopping-cart"></i>
                    </div>
                </div>
                </div>
            </div>
            </section>
            {/* favorite product */}

            {/* Map*/}
            <div className="flex w-full h-screen flex-col items-center gap-5 bg-gray-100">
            <div className="flex flex-col items-center my-8 gap-2">{/* map-text */}
                <h1 className="text-4xl font-semibold"><span className="text-amber-600">Visit Our Store</span> in the Spot on the Map Below</h1>
                <h2 className="text-sm py-2 text-center">
                You can explore the menu that we provide with fun and have their own
                taste and make your day better.
                </h2>
            </div>
            <div className="flex justify-center">{/* map-image */}
                <img src="/assets/home-map.png"  className="w-[80%]"/> 
            </div>
            </div>
            {/* map */}

            {/* testimoni */}
            <div className="flex justify-center items-center w-full h-96 bg-gradient-to-b from-[#18181B] to-[#27272A]">
            <div className="flex w-11/12 justify-center items-center " >{/* Kiri */}
                <img src="assets/home-customer-image1.jpg" alt="customer testimoni" className="flex flex-col gap-4 w-full sm:w-[30rem]" />
            </div>
            <div className="flex flex-col gap-4 w-11/12 justify-center">{/* kanan  */}
                <h1 className="text-white ">TESTIMONIAL</h1>
                <h2 className="text-white text-4xl border-l-4 border-orange-500 pl-4">Viezh Robert</h2>
                <h3 className="text-orange-500 text-sm">Manager Coffe Shop</h3>
                <h3 className="text-white">
                “Wow... I am very happy to spend my whole day here. the Wi-fi is good,
                and the coffee and meals tho. I like it here!! Very recommended!
                </h3>
                <div className="flex gap-2">
                <div className="flex gap-2">
                    <img src="/assets/star.png" />
                    <img src="/assets/star.png" />
                    <img src="/assets/star.png" />
                    <img src="/assets/star.png" />
                    <img src="/assets/star.png" />
                </div>
                <p className="text-white">5.0</p>
                </div>
                <div className="flex gap-4 ">
                <i data-feather="arrow-left" className="bg-orange-500 rounded-full h-8 w-8"></i>
                <i data-feather="arrow-right" className="bg-orange-500 rounded-full h-8 w-8"></i>
                </div>
                <div className="flex gap-1">
                <div className="bg-orange-500 w-8 h-2 rounded-md"></div>
                <div className="bg-orange-50 w-2 h-2 rounded-md"></div>
                <div className="bg-orange-50 w-2 h-2 rounded-md"></div>
                <div className="bg-orange-50 w-2 h-2 rounded-md"></div>
                </div>
            
            </div> {/* kanan  */}
            </div>{/* testimoni  */}
            
        <Footer />
        </body>
        </>
    )
}
export default Home
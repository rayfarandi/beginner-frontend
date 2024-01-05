import  * as Icon from 'react-feather'
import Chat from "../components/Chat"
import Footer from "../components/Footer"

import Navbar from "../components/navbar"
// gambar
import Map from '../assets/images/home-map.jpg'
import MapRes from '../assets/images/map-res.jpg'

import { FaStar } from "react-icons/fa6"
import testimoni from '../assets/images/home-testimoni1.jpg'
import ProductHome from '../components/ProductHome'
import { useEffect } from 'react'




const Home =()=>{
  useEffect(()=>{
    window.scrollTo({
      top:0,
      left:0,
      behavior:'smooth'
    })
  },[])

    return(
        <>
        <body className="flex flex-col items-center">
        
        <Navbar bg="#0B090921" />
        
        
                
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
                        <h1 className="text-orange-500 text-4xl font-semibold">30+</h1>
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
                    <div className="flex flex-1 bg-center bg-[url(../assets/images/bg-home.jpg)] bg-cover "></div>
                    <Chat />
                    
                </div> {/* right-landing */}
                
            </div> {/* landing page */}

        
      
      <section className="flex flex-col-reverse sm:flex-row w-full h-[64rem] sm:h-screen">{/* landing page 1 */}
        <div className="h-fit py-16 sm:py-0 sm:h-screen sm:flex-1  flex items-center">
          <div className="flex flex-col ml-8 sm:ml-28 gap-4 h-fit max-w-lg">
              <div className="flex items-center gap-4">
                <hr className="border-orange-500 border-2 sm:border-4 h-14"/>
                <h1 className="text-2xl sm:text-5xl font-medium">
                  We Provide <span className="text-[#8E6447]">Good <br/> Coffee</span> and
                  <span className="text-[#8E6447]">Healthy Meals</span>
                </h1>
              </div>
              <h2 className="text-sm text-[#4F5665]">
                You can explore the menu that we provide with fun and have their
                own <br/> taste and make your day better.
              </h2>
              <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                  <div className="bg-[#2FAB73] rounded-full text-white w-fit h-fit">
                    <Icon.CheckCircle className="h-5 w-fit" />
                  </div>
                  <h2 className="text-sm text-[#4F5665]">High quality beans</h2>
                </div>
  
                <div className="flex gap-4">
                  <div className="bg-[#2FAB73] rounded-full text-white w-fit h-fit">
                    <Icon.CheckCircle className="h-5 w-fit" />
                  </div>
                  <h2 className="text-sm text-[#4F5665]">Healthy meals, you can request the ingredients</h2>
                </div>
  
                <div className="flex gap-4">
                  <div className="bg-[#2FAB73] rounded-full text-white w-fit h-fit">
                    <Icon.CheckCircle className="h-5 w-fit" />
                  </div>
                  <h2 className="text-sm text-[#4F5665]">Free member card with a minimum purchase of IDR 200.000.</h2>
                </div>
  
                <div className="flex gap-4">
                  <div className="bg-[#2FAB73] rounded-full text-white w-fit h-fit">
                    <Icon.CheckCircle className="h-5 w-fit" />
                  </div>
                  <h2 className="text-sm text-[#4F5665]">Chat with our staff to get better experience for ordering</h2>
                </div>
              </div>
          </div>
        </div>
  
          <div className="bg-[url(../assets/images/staff-image.jpg)] flex-1 bg-center bg-cover"></div>
        </section>{/* landing page 1 */}
      


            {/* favorite product start */}
          
                       
            <ProductHome isHomePage={true} />
            
          
            {/* favorite product */}
            

            
            {/* Map*/}
            <section className="h-fit py-6 sm:h-full flex flex-col items-center justify-center w-full bg-gray-100 gap-12">
            <div className="flex flex-col items-center gap-2 sm:gap-4">{/* map-text */}
            <h1 className="text-4xl font-semibold"><span className="text-amber-600">Visit Our Store</span> in the Spot on the Map Below</h1>
                <h2 className="text-sm py-2 text-center">
                You can explore the menu that we provide with fun and have their own
                taste and make your day better.
                </h2>
            </div>

            <div className="flex justify-center">{/* map-image */}
          <img className="w-11/23 hidden sm:block" src={Map} />
          <img className="sm:hidden" src={MapRes} />
            </div>
            </section>
            {/* Map*/}

            {/* testimoni */}
            <section className="flex justify-center items-center bg-gradient-to-b from-[#323436] to-[#0B0909] w-full h-fit py-6 sm:h-fit sm:py-12">
            <div className="flex flex-col sm:flex-row w-5/6 gap-4">
                <div className="flex flex-col items-center gap-4">
                <h2 className="text-white sm:hidden">TESTIMONIAL</h2>
                <img className="w-full sm:w-[30rem]" src={testimoni} alt="" />
                </div>
                
                <div className="flex flex-col gap-4 w-full sm:w-[30rem]">
                <h2 className="text-white hidden sm:block">TESTIMONIAL</h2>
                <h1 className="text-white text-2xl sm:text-4xl border-l-4 border-orange-500 pl-4">Viezh Robert</h1>
                <h2 className="text-orange-500">Manager Coffe Shop</h2>
                <h2 className="text-white text-sm sm:text-base">
                    “Wow... I am very happy to spend my whole day here. the Wi-fi is good,
                    and the coffee and meals tho. I like it here!! Very recommended!
                </h2>
                <div className="flex items-center gap-4">
                    <div className="flex gap-4 text-yellow-500">
                    <div>
                        <FaStar />
                    </div>
                    <div>
                        <FaStar />
                    </div>
                    <div>
                        <FaStar />  
                    </div>
                    <div>
                        <FaStar />
                    </div>
                    <div>
                        <FaStar />
                    </div>
                    </div>
                    <h2 className="text-white" id="rating-number">5.0</h2>
                </div>
                <div className="flex gap-2">
                    <div className="flex justify-center items-center bg-white rounded-full h-8 w-8">
                    <i className="h-5" data-feather="arrow-left"></i>
                    </div>

                    <div className="flex justify-center items-center bg-orange-500 rounded-full h-8 w-8">
                    <i className="h-5"  data-feather="arrow-right"></i>
                    </div>
                </div>
                <div className="flex gap-1">
                    <div className="bg-orange-500 w-8 h-2 rounded-md"></div>
                    <div className="bg-white w-2 h-2 rounded-md"></div>
                    <div className="bg-white w-2 h-2 rounded-md"></div>
                    <div className="bg-white w-2 h-2 rounded-md"></div>
                </div>
                </div>
            </div>
            </section>
            
        <Footer />
        </body>
        </>
    )
}
export default Home
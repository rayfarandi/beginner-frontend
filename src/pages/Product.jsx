import  * as Icon from 'react-feather'
import Footer from "../components/Footer"
import Navbar from "../components/navbar"

import KuponMother from '../assets/images/motherdaycupon.png'
import KuponFather from '../assets/images/fatherdaycupon.png'

import ProductProduct from '../components/ProductProduct';
import { useEffect, useState } from "react";


const Product=()=>{
    const [filters, setFilters] = useState({
        search:'',
        categories: [],
        sortBy: [],
        priceRange: 0
    })
    
    useEffect(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }, [])

    return(
        <>
        <body className="flex flex-col items-center">
        <Navbar bg='#000000'/>

        {/* header dan kupon  */}
            <header className="hidden sm:flex items-center bg-[url('../assets/images/bg-product-list.png')] bg-center w-full h-72 mt-12">
            <h1 className="text-white text-5xl ml-28">
                We Provide Good Coffee and Healthy <br />
                Meals
            </h1>
            </header>

            

            <section className="flex flex-col w-full items-center gap-4 lg:pt-0 pt-6 lg:overflow-x-hidden">
            <div className="w-5/6 flex justify-between">
                <h1 className="text-2xl sm:text-3xl">Today <span className="text-[#8E6447]">Promo</span></h1>

                <div className="hidden sm:flex gap-2">
                <div className="flex justify-center items-center bg-[#E8E8E8] rounded-full h-8 w-8">
                    <Icon.ArrowLeft className="h-5" />
                </div>

                <div className="flex justify-center items-center bg-[#FF8906] rounded-full h-8 w-8">
                    <Icon.ArrowRight className="h-5" />
                </div>
                </div>
            </div>
            {/* kupon  */}
            <div className="overflow-y-scroll  w-full">
            <div className="w-fit flex gap-10 ">
                <div className="flex bg-[#88B788] rounded-2xl items-center pl-2 w-64 sm:w-72 h-20 sm:h-auto">
                <div>
                    <img className="h-20 sm:h-24 translate-y-1" src={KuponMother} alt="" />
                </div>
                <div className="flex flex-col gap-1">
                    <div>
                    <h5 className="text-xs sm:text-sm font-bold">HAPPY MOTHERS DAY!</h5>
                    <p className="text-[0.7rem] sm:text-xs">
                        Get one of our favorite menu <br />
                        for free!
                    </p>
                    </div>
                    <p className="text-[0.7rem] sm:text-xs text-white">Klaim Kupon</p>
                </div>
                </div>

                <div className="flex bg-[#88B788] rounded-2xl items-center pl-2 w-64 sm:w-72 h-20 sm:h-auto">
                <div>
                    <img className="h-20 sm:h-24 translate-y-1" src={KuponMother} alt="" />
                </div>
                <div className="flex flex-col gap-1">
                    <div>
                    <h5 className="text-xs sm:text-sm font-bold">HAPPY MOTHERS DAY!</h5>
                    <p className="text-[0.7rem] sm:text-xs">
                        Get one of our favorite menu <br />
                        for free!
                    </p>
                    </div>
                    <p className="text-[0.7rem] sm:text-xs text-white">Klaim Kupon</p>
                </div>
                </div>

                <div className="flex bg-[#88B788] rounded-2xl items-center pl-2 w-64 sm:w-72 h-20 sm:h-auto">
                <div>
                    <img className="h-20 sm:h-24 translate-y-1" src={KuponMother} alt="" />
                </div>
                <div className="flex flex-col gap-1">
                    <div>
                    <h5 className="text-xs sm:text-sm font-bold">HAPPY MOTHERS DAY!</h5>
                    <p className="text-[0.7rem] sm:text-xs">
                        Get one of our favorite menu <br />
                        for free!
                    </p>
                    </div>
                    <p className="text-[0.7rem] sm:text-xs text-white">Klaim Kupon</p>
                </div>
                </div>

                <div className="flex bg-[#88B788] rounded-2xl items-center pl-2 w-64 sm:w-72 h-20 sm:h-auto">
                <div>
                    <img className="h-20 sm:h-24 translate-y-1" src={KuponMother} alt="" />
                </div>
                <div className="flex flex-col gap-1">
                    <div>
                    <h5 className="text-xs sm:text-sm font-bold">HAPPY MOTHERS DAY!</h5>
                    <p className="text-[0.7rem] sm:text-xs">
                        Get one of our favorite menu <br />
                        for free!
                    </p>
                    </div>
                    <p className="text-[0.7rem] sm:text-xs text-white">Klaim Kupon</p>
                </div>
                </div>

                <div className="flex bg-[#F5C361]  rounded-2xl items-center pl-2 w-64 sm:w-72 h-20 sm:h-auto">
                <div>
                    <img className="h-20 sm:h-24 translate-y-1" src={KuponFather} alt="" />
                </div>
                <div className="flex flex-col gap-3">
                    <h5 className="text-xs sm:text-sm font-bold">Get a cup of coffee for free <br/> on sunday morning</h5>
                    <p className="text-[0.7rem] sm:text-xs">Only at 7 to 9 AM</p>
                </div>
                </div>
            </div>
            </div>
            {/* kupon  */}
            
            </section>
            <div className="w-5/6">
                <div className="flex gap-1">
                <div className="bg-[#FF8906] w-8 h-2 rounded-md"></div>
                <div className="bg-[#DDE0E4] w-2 h-2 rounded-md"></div>
                <div className="bg-[#DDE0E4] w-2 h-2 rounded-md"></div>
                <div className="bg-[#DDE0E4] w-2 h-2 rounded-md"></div>
                </div>
            </div>
        
            {/* conten product  */}
            <div className="w-5/6 flex flex-col gap-3">
                <h1 className="text-3xl">Our <span className="SPAN">Product</span></h1>
                <div className="flex  flex-col  gap-3 lg:flex-row"> {/* bungkus tes  */}
                {/* pencarian  */}
             <div className="hidden sm:block w-1/4 bg-black rounded-xl h-fit p-4 text-white">
                <aside className="">
                <form className="flex flex-col gap-4 bg-black p-4 text-white rounded-xl">
                    <div className="flex justify-between">
                        <h4 className="font-semibold text-xs sm:text-sm">Filter</h4>
                        <button className="font-semibold text-xs sm:text-sm active:scale-95 transition-all" type="reset">Reset Filter</button>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="font-semibold text-sm" htmlFor="search-product">Search</label>
                        <input name="searchKey" className="rounded text-xs p-2 outline-none text-black" id="search-product" type="text" placeholder="Search Your Product"/>
                    </div>
                    <div className="flex flex-col gap-3 text-xs">
                            <h4 className="font-semibold text-xs sm:text-sm">Category</h4>
                        <div className="flex gap-2 sm:gap-3">
                            <input type="checkbox" name="category" value="favorite product"/><label htmlFor="favorite product" className="text-xs sm:text-sm">Favorite Product</label>
                        </div>
                            <div className="flex gap-2 sm:gap-3">
                            <input type="checkbox" name="category" value="coffee"/>
                            <label htmlFor="coffee" className="text-xs sm:text-sm">Coffee</label>
                        </div>
                        <div className="flex gap-2 sm:gap-3">
                            <input type="checkbox" name="category" value="non coffee"/>
                            <label htmlFor="non coffee" className="text-xs sm:text-sm">Non Coffee</label>
                        </div>
                        <div className="flex gap-2 sm:gap-3">
                            <input type="checkbox" name="category" value="foods"/>
                            <label htmlFor="foods" className="text-xs sm:text-sm">Foods</label>
                        </div>
                        <div className="flex gap-2 sm:gap-3">
                            <input type="checkbox" name="category" value="add on"/>
                            <label htmlFor="add on" className="text-xs sm:text-sm">Add-On</label>
                        </div>

                    </div>
                                    
                    <div className="flex flex-col gap-3 text-xs">
                        <h4 className="font-semibold text-xs sm:text-sm">SortBy</h4>
                        <div className="flex gap-2 sm:gap-3">
                            <input type="checkbox" name="sortBy" value="createdAt"/>
                            <label htmlFor="createdAt" className="text-xs sm:text-sm">Latest Products</label>
                        </div>
                        <div className="flex gap-2 sm:gap-3">
                            <input type="checkbox" name="sortBy" value="name"/>
                            <label htmlFor="name" className="text-xs sm:text-sm">Name</label>
                        </div>
                        <div className="flex gap-2 sm:gap-3">
                            <input type="checkbox" name="sortBy" value="basePrice"/>
                            <label htmlFor="basePrice" className="text-xs sm:text-sm">Cheap</label>
                        </div>
                    </div>
                    <button className="bg-[#FF8906] rounded p-2 text-xs text-black font-semibold active:scale-95 transition-all" type="submit">Apply Filter
                    </button>
                    </form>
                </aside>
             
             </div>

                {/* list card */}
                {/* <ProductProduct /> */}
                <div className='relative flex justify-center w-full'>
                <ProductProduct  />
                </div>
                
                {/* list card */}
             </div> {/* bungkus tes  */}


            </div>{/* conten product  */}
        <Footer />
        </body>
        </>
    )
}
export default Product

import Footer from "../components/Footer"
import Navbar from "../components/navbar"

import KuponMother from '../assets/images/motherdaycupon.png'
import KuponFather from '../assets/images/fatherdaycupon.png'

import ProductProduct from '../components/ProductProduct';


const Product=()=>{

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
                    <i className="h-5" data-feather="arrow-left"></i>
                </div>

                <div className="flex justify-center items-center bg-[#FF8906] rounded-full h-8 w-8">
                    <i className="h-5"  data-feather="arrow-right"></i>
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
             <div className=" lg:w-1/5 w-[30%] bg-black rounded-xl h-fit p-4 justify-center text-white hidden lg:flex">
                <form className="flex flex-col gap-4" >
                
                    <div className="flex justify-between">
                        <h4 className="font-semibold text-sm">Filter</h4>
                        <button type="reset" className="font-semibold text-sm">Reset Filter</button>
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="search-product" className="font-semibold text-sm">Search</label>
                        <input id="search-product" type="text" className="text-xs p-2 text-black" placeholder="Search Your Product"/>
                    </div>

                    <div className="flex flex-col gap-1 text-sm">
                        {/* Category */}
                        <h4 className="font-semibold text-sm">Category</h4>
                        <div className="flex gap-2">
                        <input type="checkbox" name="category" id="favorite-product" value="Favorite Product"/>
                        <label htmlFor="favorite-product">Favorite Product</label>
                        </div>

                        <div className="flex gap-2">
                        <input type="checkbox" name="category" id="coffee" value="coffee"/>                  
                        <label htmlFor="coffee">Coffee</label>
                        </div>

                        <div className="flex gap-2">
                        <input type="checkbox" name="category" id="non-coffee" value="non-coffee"/>                  
                        <label htmlFor="non-coffee">Non Coffee</label>
                        </div>

                        <div className="flex gap-2">
                        <input type="checkbox" name="category" id="foods" value="foods"/>                  
                        <label htmlFor="foods">Foods</label>
                        </div>

                        <div className="flex gap-2">
                        <input type="checkbox" name="category" id="add-on" value="add-on"/>                  
                        <label htmlFor="add-on">Add-On</label>
                        </div>
                    </div>{/* Category */}

                    <div className="flex flex-col gap-2 text-sm">
                        {/* sort by */}
                        <h4 className="font-semibold text-sm">Sort By</h4>
                        <div className="flex gap-2">
                        <input type="checkbox" name="category" id="buy1get1" value="buy1get1"/> 
                        <label htmlFor="buy1get1">Buy1get1</label>                 
                        </div>

                        <div className="flex gap-2">
                        <input type="checkbox" name="category" id="flashsale" value="flashsale"/>  
                        <label htmlFor="flashsale">Flashsale</label>                
                        </div>

                        <div className="flex gap-2">
                        <input type="checkbox" name="category" id="birthday-package" value="birthday-package"/>
                        <label htmlFor="birthday-package">Birthday Package</label>
                        </div>

                        <div className="flex gap-2">
                        <label htmlFor="cheap">Cheap</label>
                        <input type="checkbox" name="category" id="cheap" value="cheap"/>
                        </div>
                    </div>{/* sort by */}

                    {/* range */}
                    <div className="flex flex-col gap-2 text-sm">
                        <label htmlFor="range-price">Range Price</label>
                        <input id="range-price" type="range" />
                    </div>

                    <button type="submit" className="bg-orange-500 rounded-md w-36 h-8 font-semibold text-sm  text-black ">Apply Filter</button>
                    
                </form>{/* form pencarian */}
                </div>{/* pencarian */}

                {/* list card */}
                <ProductProduct />
                {/* list card */}
             </div> {/* bungkus tes  */}


            </div>{/* conten product  */}
            {/* tombol  */}
            {/* <div className="flex gap-2">
                    <button type="button" className="flex justify-center items-center bg-[#FF8906] text-xs sm:text-sm rounded-full h-6 w-6 sm:h-8 sm:w-8">
                        1
                    </button>
        
                    <button type="button" className="flex justify-center items-center  text-[#A0A3BD] text-xs sm:text-sm bg-[#E8E8E8] rounded-full h-6 w-6 sm:h-8 sm:w-8">
                        2
                    </button>
        
                    <button type="button" className="flex justify-center items-center  text-[#A0A3BD] text-xs sm:text-sm bg-[#E8E8E8] rounded-full h-6 w-6 sm:h-8 sm:w-8">
                        3
                    </button>
        
                    <button type="button" className="flex justify-center items-center text-[#A0A3BD] text-xs sm:text-sm bg-[#E8E8E8] rounded-full h-6 w-6 sm:h-8 sm:w-8">
                        4
                    </button>
        
                    <button type="button" onClick={()=>getProducts('next')} className="flex justify-center items-center bg-[#FF8906] rounded-full h-6 w-6 sm:h-8 sm:w-8">
                        <i className="text-white h-4 sm:h-auto" data-feather="arrow-right"></i>
                    </button>
            </div> */}
        <Footer />
        </body>
        </>
    )
}
export default Product
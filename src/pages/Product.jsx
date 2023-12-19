import Footer from "../components/Footer"
import Navbar from "../components/navbar"
import { Link } from 'react-router-dom'
// import * as Icon from 'react-feather'
import KuponMother from '../assets/images/motherdaycupon.png'
import KuponFather from '../assets/images/fatherdaycupon.png'
import ProductImg1 from  '../assets/images/recommend-product1.jpg'
import ProductImg2 from  '../assets/images/recommend-product2.jpg'


const Product=()=>{
    return(
        <>
        <body className="flex flex-col items-center">
        <Navbar />

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
                <div className="flex flex-wrap justify-center gap-x-4 sm:gap-x-20 gap-y-44 mb-48 max-w-xl">
                    <div className="relative flex justify-center w-fit h-fit">
                        <div>
                        <img className=" w-48 sm:w-60" src={ProductImg1} alt="" />
                        </div>
                        <div className="absolute bg-[#D00000] text-white rounded-3xl text-xs p-1.5 left-2 top-2">
                        <h1>FLASH SALE!</h1>
                        </div>
                        <div className="absolute w-11/12 bg-white top-[85%] p-1.5 sm:p-2 flex flex-col gap-2">
                        <Link to="/productdetail" >
                        <h1 className="font-semibold text-sm sm:text-base" id="product-name">Hazelnut Latte</h1></Link>
                        <p className="text-[0.6rem] sm:text-[0.7rem] text-[#4F5665]">
                            You can explore the menu that we provide with fun and have their
                            own taste and make your day better.
                        </p>
                        <div className="flex items-center gap-2 sm:gap-4">
                            <div className="flex items-center gap-2 sm:gap-4">
                            <div>
                                <img className="w-3 sm:w-auto" src="src/assets/images/star.png"  />
                            </div>
                            <div>
                                <img className="w-3 sm:w-auto" src="src/assets/images/star.png"  />
                            </div>
                            <div>
                                <img className="w-3 sm:w-auto" src="src/assets/images/star.png"  />
                            </div>
                            <div>
                                <img className="w-3 sm:w-auto" src="src/assets/images/star.png"  />
                            </div>
                            <div>
                                <img className="w-3 sm:w-auto" src="src/assets/images/star.png"  />
                            </div>
                            </div>
                            <p className="text-[#4F5665] text-xs sm:text-sm" id="rating-number">5.0</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <h1 className="text-[#D00000] text-[0.6rem] sm:text-xs font-semibold line-through">IDR 20.000</h1>
                            <h1 className="text-[#FF8906] font-semibold text-xs sm:text-base" id="product-price">IDR 20.000</h1>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
                            <button className=" w-full sm:w-9/12 bg-[#FF8906] rounded-md text-xs sm:text-sm py-1">Buy</button>
                            <i className="w-full sm:flex-1 border border-[#FF8906] text-[#FF8906] p-1 h-6 sm:h-7 rounded-md" data-feather="shopping-cart"></i>
                        </div>
                        </div>
                    </div>
        
                    <div className="relative flex justify-center w-fit h-fit">
                        <div>
                        <img className=" w-48 sm:w-60" src={ProductImg2} alt="" />
                        </div>
                        <div className="absolute bg-[#D00000] text-white rounded-3xl text-xs p-1.5 left-2 top-2">
                        <h1>FLASH SALE!</h1>
                        </div>
                        <div className="absolute w-11/12 bg-white top-[85%] p-1.5 sm:p-2 flex flex-col gap-2">
                        <Link to="/productdetail" >
                        <h1 className="font-semibold text-sm sm:text-base" id="product-name">Hazelnut Latte</h1></Link>
                        <p className="text-[0.6rem] sm:text-[0.7rem] text-[#4F5665]">
                            You can explore the menu that we provide with fun and have their
                            own taste and make your day better.
                        </p>
                        <div className="flex items-center gap-2 sm:gap-4">
                            <div className="flex items-center gap-2 sm:gap-4">
                            <div>
                                <img className="w-3 sm:w-auto" src="src/assets/images/star.png"  />
                            </div>
                            <div>
                                <img className="w-3 sm:w-auto" src="src/assets/images/star.png"  />
                            </div>
                            <div>
                                <img className="w-3 sm:w-auto" src="src/assets/images/star.png"  />
                            </div>
                            <div>
                                <img className="w-3 sm:w-auto" src="src/assets/images/star.png"  />
                            </div>
                            <div>
                                <img className="w-3 sm:w-auto" src="src/assets/images/star.png"  />
                            </div>
                            </div>
                            <p className="text-[#4F5665] text-xs sm:text-sm" id="rating-number">5.0</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <h1 className="text-[#D00000] text-[0.6rem] sm:text-xs font-semibold line-through">IDR 20.000</h1>
                            <h1 className="text-[#FF8906] font-semibold text-xs sm:text-base" id="product-price">IDR 20.000</h1>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
                            <button className=" w-full sm:w-9/12 bg-[#FF8906] rounded-md text-xs sm:text-sm py-1">Buy</button>
                            <i className="w-full sm:flex-1 border border-[#FF8906] text-[#FF8906] p-1 h-6 sm:h-7 rounded-md" data-feather="shopping-cart"></i>
                        </div>
                        </div>
                    </div>
        
                    <div className="relative flex justify-center w-fit h-fit">
                        <div>
                        <img className=" w-48 sm:w-60" src={ProductImg2} alt="" />
                        </div>
                        <div className="absolute bg-[#D00000] text-white rounded-3xl text-xs p-1.5 left-2 top-2">
                        <h1>FLASH SALE!</h1>
                        </div>
                        <div className="absolute w-11/12 bg-white top-[85%] p-1.5 sm:p-2 flex flex-col gap-2">
                        <h1 className="font-semibold text-sm sm:text-base" id="product-name">Hazelnut Latte</h1>
                        <p className="text-[0.6rem] sm:text-[0.7rem] text-[#4F5665]">
                            You can explore the menu that we provide with fun and have their
                            own taste and make your day better.
                        </p>
                        <div className="flex items-center gap-2 sm:gap-4">
                            <div className="flex items-center gap-2 sm:gap-4">
                            <div>
                                <img className="w-3 sm:w-auto" src="src/assets/images/star.png"  />
                            </div>
                            <div>
                                <img className="w-3 sm:w-auto" src="src/assets/images/star.png"  />
                            </div>
                            <div>
                                <img className="w-3 sm:w-auto" src="src/assets/images/star.png"  />
                            </div>
                            <div>
                                <img className="w-3 sm:w-auto" src="src/assets/images/star.png"  />
                            </div>
                            <div>
                                <img className="w-3 sm:w-auto" src="src/assets/images/star.png"  />
                            </div>
                            </div>
                            <p className="text-[#4F5665] text-xs sm:text-sm" id="rating-number">5.0</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <h1 className="text-[#D00000] text-[0.6rem] sm:text-xs font-semibold line-through">IDR 20.000</h1>
                            <h1 className="text-[#FF8906] font-semibold text-xs sm:text-base" id="product-price">IDR 20.000</h1>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
                            <button className=" w-full sm:w-9/12 bg-[#FF8906] rounded-md text-xs sm:text-sm py-1">Buy</button>
                            <i className="w-full sm:flex-1 border border-[#FF8906] text-[#FF8906] p-1 h-6 sm:h-7 rounded-md" data-feather="shopping-cart"></i>
                        </div>
                        </div>
                    </div>
        
                    <div className="relative flex justify-center w-fit h-fit">
                        <div>
                        <img className=" w-48 sm:w-60" src={ProductImg2} alt="" />
                        </div>
                        <div className="absolute bg-[#D00000] text-white rounded-3xl text-xs p-1.5 left-2 top-2">
                        <h1>FLASH SALE!</h1>
                        </div>
                        <div className="absolute w-11/12 bg-white top-[85%] p-1.5 sm:p-2 flex flex-col gap-2">
                        <h1 className="font-semibold text-sm sm:text-base" id="product-name">Hazelnut Latte</h1>
                        <p className="text-[0.6rem] sm:text-[0.7rem] text-[#4F5665]">
                            You can explore the menu that we provide with fun and have their
                            own taste and make your day better.
                        </p>
                        <div className="flex items-center gap-2 sm:gap-4">
                            <div className="flex items-center gap-2 sm:gap-4">
                            <div>
                                <img className="w-3 sm:w-auto" src="src/assets/images/star.png"  />
                            </div>
                            <div>
                                <img className="w-3 sm:w-auto" src="src/assets/images/star.png"  />
                            </div>
                            <div>
                                <img className="w-3 sm:w-auto" src="src/assets/images/star.png"  />
                            </div>
                            <div>
                                <img className="w-3 sm:w-auto" src="src/assets/images/star.png"  />
                            </div>
                            <div>
                                <img className="w-3 sm:w-auto" src="src/assets/images/star.png"  />
                            </div>
                            </div>
                            <p className="text-[#4F5665] text-xs sm:text-sm" id="rating-number">5.0</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <h1 className="text-[#D00000] text-[0.6rem] sm:text-xs font-semibold line-through">IDR 20.000</h1>
                            <h1 className="text-[#FF8906] font-semibold text-xs sm:text-base" id="product-price">IDR 20.000</h1>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
                            <button className=" w-full sm:w-9/12 bg-[#FF8906] rounded-md text-xs sm:text-sm py-1">Buy</button>
                            <i className="w-full sm:flex-1 border border-[#FF8906] text-[#FF8906] p-1 h-6 sm:h-7 rounded-md" data-feather="shopping-cart"></i>
                        </div>
                        </div>
                    </div>
        
                    <div className="relative flex justify-center w-fit h-fit">
                        <div>
                        <img className=" w-48 sm:w-60" src={ProductImg1} alt="" />
                        </div>
                        <div className="absolute bg-[#D00000] text-white rounded-3xl text-xs p-1.5 left-2 top-2">
                        <h1>FLASH SALE!</h1>
                        </div>
                        <div className="absolute w-11/12 bg-white top-[85%] p-1.5 sm:p-2 flex flex-col gap-2">
                        <h1 className="font-semibold text-sm sm:text-base" id="product-name">Hazelnut Latte</h1>
                        <p className="text-[0.6rem] sm:text-[0.7rem] text-[#4F5665]">
                            You can explore the menu that we provide with fun and have their
                            own taste and make your day better.
                        </p>
                        <div className="flex items-center gap-2 sm:gap-4">
                            <div className="flex items-center gap-2 sm:gap-4">
                            <div>
                                <img className="w-3 sm:w-auto" src="src/assets/images/star.png"  />
                            </div>
                            <div>
                                <img className="w-3 sm:w-auto" src="src/assets/images/star.png"  />
                            </div>
                            <div>
                                <img className="w-3 sm:w-auto" src="src/assets/images/star.png"  />
                            </div>
                            <div>
                                <img className="w-3 sm:w-auto" src="src/assets/images/star.png"  />
                            </div>
                            <div>
                                <img className="w-3 sm:w-auto" src="src/assets/images/star.png"  />
                            </div>
                            </div>
                            <p className="text-[#4F5665] text-xs sm:text-sm" id="rating-number">5.0</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <h1 className="text-[#D00000] text-[0.6rem] sm:text-xs font-semibold line-through">IDR 20.000</h1>
                            <h1 className="text-[#FF8906] font-semibold text-xs sm:text-base" id="product-price">IDR 20.000</h1>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
                            <button className=" w-full sm:w-9/12 bg-[#FF8906] rounded-md text-xs sm:text-sm py-1">Buy</button>
                            <i className="w-full sm:flex-1 border border-[#FF8906] text-[#FF8906] p-1 h-6 sm:h-7 rounded-md" data-feather="shopping-cart"></i>
                        </div>
                        </div>
                    </div>
        
                    <div className="relative flex justify-center w-fit h-fit">
                        <div>
                        <img className=" w-48 sm:w-60" src={ProductImg1} alt="" />
                        </div>
                        <div className="absolute bg-[#D00000] text-white rounded-3xl text-xs p-1.5 left-2 top-2">
                        <h1>FLASH SALE!</h1>
                        </div>
                        <div className="absolute w-11/12 bg-white top-[85%] p-1.5 sm:p-2 flex flex-col gap-2">
                        <h1 className="font-semibold text-sm sm:text-base" id="product-name">Hazelnut Latte</h1>
                        <p className="text-[0.6rem] sm:text-[0.7rem] text-[#4F5665]">
                            You can explore the menu that we provide with fun and have their
                            own taste and make your day better.
                        </p>
                        <div className="flex items-center gap-2 sm:gap-4">
                            <div className="flex items-center gap-2 sm:gap-4">
                            <div>
                                <img className="w-3 sm:w-auto" src="src/assets/images/star.png"  />
                            </div>
                            <div>
                                <img className="w-3 sm:w-auto" src="src/assets/images/star.png"  />
                            </div>
                            <div>
                                <img className="w-3 sm:w-auto" src="src/assets/images/star.png"  />
                            </div>
                            <div>
                                <img className="w-3 sm:w-auto" src="src/assets/images/star.png"  />
                            </div>
                            <div>
                                <img className="w-3 sm:w-auto" src="src/assets/images/star.png" />
                            </div>
                            </div>
                            <p className="text-[#4F5665] text-xs sm:text-sm" id="rating-number">5.0</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <h1 className="text-[#D00000] text-[0.6rem] sm:text-xs font-semibold line-through">IDR 20.000</h1>
                            <h1 className="text-[#FF8906] font-semibold text-xs sm:text-base" id="product-price">IDR 20.000</h1>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
                            <button className=" w-full sm:w-9/12 bg-[#FF8906] rounded-md text-xs sm:text-sm py-1">Buy</button>
                            <i className="w-full sm:flex-1 border border-[#FF8906] text-[#FF8906] p-1 h-6 sm:h-7 rounded-md" data-feather="shopping-cart"></i>
                        </div>
                        </div>
                    </div>
                    </div>
                {/* list card */}
             </div> {/* bungkus tes  */}


            </div>{/* conten product  */}
            {/* tombol  */}
            <div className="flex gap-2">
                    <div className="flex justify-center items-center bg-[#FF8906] text-xs sm:text-sm rounded-full h-6 w-6 sm:h-8 sm:w-8">
                        <h3>1</h3>
                    </div>
        
                    <div className="flex justify-center items-center  text-[#A0A3BD] text-xs sm:text-sm bg-[#E8E8E8] rounded-full h-6 w-6 sm:h-8 sm:w-8">
                        <h3>2</h3>
                    </div>
        
                    <div className="flex justify-center items-center  text-[#A0A3BD] text-xs sm:text-sm bg-[#E8E8E8] rounded-full h-6 w-6 sm:h-8 sm:w-8">
                        <h3>2</h3>
                    </div>
        
                    <div className="flex justify-center items-center text-[#A0A3BD] text-xs sm:text-sm bg-[#E8E8E8] rounded-full h-6 w-6 sm:h-8 sm:w-8">
                        <h3>4</h3>
                    </div>
        
                    <div className="flex justify-center items-center bg-[#FF8906] rounded-full h-6 w-6 sm:h-8 sm:w-8">
                        <i className="text-white h-4 sm:h-auto" data-feather="arrow-right"></i>
                    </div>
                    </div>
        <Footer />
        </body>
        </>
    )
}
export default Product
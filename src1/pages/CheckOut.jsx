import Footer from "../components/Footer"
import Navbar from "../components/navbar"
import { Link } from 'react-router-dom'


const CheckOut =()=>{
    return(
        <>
        <body className="flex flex-col items-center">
        <Navbar />

        <div className="flex flex-col px-4 w-full sm:w-5/6 mt-20 sm:mt-24 mb-10 sm:mb-16 gap-4">
            <h1 className="text-2xl sm:text-3xl font-semibold">Payment Details</h1>

                <form className="flex flex-col sm:flex-row gap-4">
                <div className="flex flex-col w-full sm:w-7/12 gap-6 sm:gap-16">
                    <div className="flex flex-col gap-4">
                    <div className="flex justify-between">
                        <h4 className="font-semibold">Your Order</h4>
                        <button className="flex items-center bg-orange-500 rounded-md">
                        <i className="h-3 sm:h-4" data-feather="plus"></i>
                        <h5 className="text-xs p-1.5 sm:p-2">Add Menu</h5>
                        </button>
                    </div>

                    <div className="flex flex-col gap-3 sm:gap-5 overflow-y-scroll h-[22rem] sm:h-[21rem]">
                        <div className="relative flex items-center gap-2 sm:gap-4 bg-gray-50 p-2">
                        <div className="">
                            <img className="w-24 sm:w-36" src="src/assets/images/checkout-image.jpg" />
                        </div>
                        <div className="flex-1 flex flex-col gap-2 sm:gap-3 justify-center">
                            <div className="bg-[#D00000] text-white rounded-3xl text-[0.6rem] sm:text-xs p-1 sm:p-1.5 w-fit">
                            <h1>FLASH SALE!</h1>
                            </div>
                            <h4 className="font-bold text-xs sm:text-base">Hazelnut Latte</h4>
                            <div className="flex divide-x text-xs sm:text-sm text-gray-500 divide-[#4F5665] w-48 sm:w-60">
                            <p className="pr-3">2pcs</p>
                            <p className="flex-1 flex justify-center">Regular</p>
                            <p className="flex justify-center px-3">Ice</p>
                            <p className="flex-1 flex justify-center">Dine in</p>
                            </div> 
                            <div className="flex items-center gap-4">
                            <h1 className="text-red-600 text-[0.6rem] sm:text-xs font-semibold line-through">IDR 40.000</h1>
                            <h1 className="text-orange-500 font-semibold text-xs sm:text-base" id="product-price">IDR 10.000</h1>
                            </div>
                            <div className="absolute text-red-600 top-2 right-2 sm:top-auto sm:right-4">
                            <i className="h-4" data-feather="x-circle"></i>
                            </div>
                        </div>
                        </div>

                        <div className="relative flex items-center gap-2 sm:gap-4 bg-gray-50 p-2">
                        <div className="">
                            <img className="w-24 sm:w-36" src="src/assets/images/checkout-image.jpg" />
                        </div>
                        <div className="flex-1 flex flex-col gap-2 sm:gap-3 justify-center">
                            <div className="bg-red-600 text-white rounded-3xl text-[0.6rem] sm:text-xs p-1 sm:p-1.5 w-fit">
                            <h1>FLASH SALE!</h1>
                            </div>
                            <h4 className="font-bold text-xs sm:text-base">Hazelnut Latte</h4>
                            <div className="flex divide-x text-xs sm:text-sm text-gray-500 divide-[#4F5665] w-48 sm:w-60">
                            <p className="pr-3">2pcs</p>
                            <p className="flex-1 flex justify-center">Regular</p>
                            <p className="flex justify-center px-3">Ice</p>
                            <p className="flex-1 flex justify-center">Dine in</p>
                            </div>
                            <div className="flex items-center gap-4">
                            <h1 className="text-red-600 text-[0.6rem] sm:text-xs font-semibold line-through">IDR 40.000</h1>
                            <h1 className="text-orange-500 font-semibold text-xs sm:text-base" id="product-price">IDR 10.000</h1>
                            </div>
                            <div className="absolute text-red-600 top-2 right-2 sm:top-auto sm:right-4">
                            <i className="h-4" data-feather="x-circle"></i>
                            </div>
                        </div>
                        </div>

                        <div className="relative flex items-center gap-2 sm:gap-4 bg-gray-50 p-2">
                        <div className="">
                            <img className="w-24 sm:w-36" src="src/assets/images/checkout-image.jpg" />
                        </div>
                        <div className="flex-1 flex flex-col gap-2 sm:gap-3 justify-center">
                            <div className="bg-red-600 text-white rounded-3xl text-[0.6rem] sm:text-xs p-1 sm:p-1.5 w-fit">
                            <h1>FLASH SALE!</h1>
                            </div>
                            <h4 className="font-bold text-xs sm:text-base">Hazelnut Latte</h4>
                            <div className="flex divide-x text-xs sm:text-sm text-gray-500 divide-gray-500 w-48 sm:w-60">
                            <p className="pr-3">2pcs</p>
                            <p className="flex-1 flex justify-center">Regular</p>
                            <p className="flex justify-center px-3">Ice</p>
                            <p className="flex-1 flex justify-center">Dine in</p>
                            </div>
                            <div className="flex items-center gap-4">
                            <h1 className="text-red-600 text-[0.6rem] sm:text-xs font-semibold line-through">IDR 40.000</h1>
                            <h1 className="text-orange-500 font-semibold text-xs sm:text-base" id="product-price">IDR 10.000</h1>
                            </div>
                            <div className="absolute text-red-600 top-2 right-2 sm:top-auto sm:right-4">
                            <i className="h-4" data-feather="x-circle"></i>
                            </div>
                        </div>
                        </div>

                        <div className="relative flex items-center gap-2 sm:gap-4 bg-gray-50 p-2">
                        <div className="">
                            <img className="w-24 sm:w-36" src="src/assets/images/checkout-image.jpg" />
                        </div>
                        <div className="flex-1 flex flex-col gap-2 sm:gap-3 justify-center">
                            <div className="bg-red-600 text-white rounded-3xl text-[0.6rem] sm:text-xs p-1 sm:p-1.5 w-fit">
                            <h1>FLASH SALE!</h1>
                            </div>
                            <h4 className="font-bold text-xs sm:text-base">Hazelnut Latte</h4>
                            <div className="flex divide-x text-xs sm:text-sm text-gray-500 divide-[#4F5665] w-48 sm:w-60">
                            <p className="pr-3">2pcs</p>
                            <p className="flex-1 flex justify-center">Regular</p>
                            <p className="flex justify-center px-3">Ice</p>
                            <p className="flex-1 flex justify-center">Dine in</p>
                            </div>
                            <div className="flex items-center gap-4">
                            <h1 className="text-red-600 text-[0.6rem] sm:text-xs font-semibold line-through">IDR 40.000</h1>
                            <h1 className="text-orange-500 font-semibold text-xs sm:text-base" id="product-price">IDR 10.000</h1>
                            </div>
                            <div className="absolute text-red-600 top-2 right-2 sm:top-auto sm:right-4">
                            <i className="h-4" data-feather="x-circle"></i>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div className="flex flex-col justify-center gap-4">
                    <h2 className="text-lg sm:text-xl font-semibold">Payment Info & Delivery</h2>
                    
                    <div className="flex flex-col gap-2">
                        <label
                        className="text-black font-semibold text-xs sm:text-sm"
                        htmlFor="email"
                        >Email</label
                        >
                        <div className="flex border border-[#dedede] rounded-lg p-2 gap-3 items-center">
                        <i className="text-gray-500 h-4" data-feather="mail"></i>
                        <input
                            className="w-full outline-none text-xs sm:text-sm bg-transparent"
                            id="email"
                            type="email"
                            placeholder="Enter Your Email"
                        />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label
                        className="text-black font-semibold text-xs sm:text-sm"
                        htmlFor="full-name"
                        >Full Name</label
                        >
                        <div className="flex border border-[#dedede] rounded-lg p-2 gap-3 items-center">
                        <i className="text-gray-500 h-4" data-feather="user"></i>
                        <input
                            className="w-full outline-none text-xs sm:text-sm  bg-transparent"
                            id="full-name"
                            type="text"
                            placeholder="Enter Your Full Name"
                        />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label
                        className="text-black font-semibold text-xs sm:text-sm "
                        htmlFor="address"
                        >Address</label
                        >
                        <div className="flex border border-[#dedede] rounded-lg p-2 gap-3 items-center">
                        <i className="text-gray-500 h-4" data-feather="map-pin"></i>
                        <input
                            className="w-full outline-none text-xs sm:text-sm  bg-transparent"
                            id="address"
                            type="text"
                            placeholder="Enter Your Address"
                        />
                        </div>
                    </div>
                    </div>
                </div>

                <div className="flex-1 h-fit flex flex-col">
                    <div className="flex pt-1 h-12 font-semibold">
                    <h4>Total</h4>
                    </div>
                    <div className="payment-summary bg-gray-50 p-3 text-sm flex flex-col gap-4">
                    <div className="flex justify-between">
                        <h5 className="text-gray-500 font-semibold text-xs sm:text-base">Order</h5>
                        <h5 className="font-semibold text-xs sm:text-base">Idr.40.000</h5>
                    </div>

                    <div className="flex justify-between">
                        <h5 className="text-gray-500 font-semibold text-xs sm:text-base">Delivery</h5>
                        <h5 className="font-semibold text-xs sm:text-base">Idr.0</h5>
                    </div>

                    <div className="flex justify-between">
                        <h5 className="text-gray-500 font-semibold text-xs sm:text-base">Tax</h5>
                        <h5 className="font-semibold text-xs sm:text-base">Idr.4000</h5>
                    </div>

                    <hr/>

                    <div className="flex justify-between">
                        <h5 className="text-gray-500  font-semibold text-xs sm:text-base">Sub Total</h5>
                        <h5 className="font-semibold text-xs sm:text-base">Idr.44.000</h5>
                    </div>

                    <button className="bg-orange-500 w-full rounded-md text-xs sm:text-sm py-1.5"><Link to='/detailorder'>Checkout</Link></button>

                    <p className="text-xs text-gray-500">We Accept</p>

                    <div className="flex flex-wrap justify-between gap-2 items-center">
                        <div>
                        <img src="src/assets/images/BRI.png" />
                        </div>

                        <div>
                        <img src="src/assets/images/DANA.png" />
                        </div>

                        <div>
                        <img src="src/assets/images/BCA.png" />
                        </div>

                        <div>
                        <img src="src/assets/images/gopay.png" />
                        </div>

                        <div>
                        <img src="src/assets/images/ovo.png" />
                        </div>

                        <div>
                        <img src="src/assets/images/paypal.png" />
                        </div>
                    </div>

                    <p className="text-xs text-gray-500">*Get Discount if you pay with Bank Central Asia</p>
                    </div>
                </div>
                </form>

            </div>

        {/* <payment detail */}

        <Footer />
            
        </body>
        </>
    )
}

export default CheckOut
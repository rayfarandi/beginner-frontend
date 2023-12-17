import Footer from "../components/Footer"
import Navbar from "../components/navbar"

const DetailOrder = ()=>{
    return(
        <>
        <body className="flex flex-col items-center">
        <Navbar />
        <div className="flex flex-col w-full px-20 mt-24 ">
            <div className="flex flex-col mb-5">
                <h1 className=" text-3xl font-bold">Order #12354-09893</h1>
                <h3 className="text-gray-600 text-sm">21 March 2023 at 10:30 AM</h3>
            </div>

            <div className="flex md:flex-row flex-col w-full h-screen gap-6">
                
                <div className="flex flex-1 flex-col gap-7">{/* order informasi */}
                <h1 className="text-xl font-semibold">Order Information</h1>

                <div className="flex flex-col divide-y">
                    
                    {/* isi */}
                    <div className="flex justify-between py-3">
                        <div className=" text-gray-700 items-center gap-2 flex">  
                        <i data-feather="user"></i>
                        <h3>Full Name</h3>
                    </div>
                        <h3 className="font-bold"><a href="/profile.html">Ghaluh Wizard Anggoro</a> </h3>
                    </div>

                    <div className="flex justify-between py-3">
                        <div className= "text-gray-700 items-center gap-2 flex">
                        <i data-feather="map-pin"></i>
                        <h3>Address</h3>
                        </div>
                        <h3 className="font-bold">Griya bandung indah</h3>
                    </div>

                    <div className="flex justify-between py-3">
                        <div className=" text-gray-700 items-center gap-2 flex">
                        <i data-feather="phone"></i>
                        <h3>Phone</h3>
                        </div>
                        <h3 className="font-bold">082116304338</h3>
                    </div>

                    <div className="flex justify-between py-3">
                        <div className=" text-gray-700 items-center gap-2 flex">
                        <i data-feather="credit-card"></i>
                        <h3>Payment Method</h3>
                        </div>
                        <h3 className="font-bold">Cash</h3>
                    </div>

                    <div className="flex justify-between py-3">
                        <div className=" text-gray-700 items-center gap-2 flex">
                        <i data-feather="truck"></i>
                        <h3>Shipping</h3>
                        </div>
                        <h3 className="font-bold">Dine In</h3>
                    </div>

                    <div className="flex justify-between py-3">
                        <div className=" text-gray-700 items-center gap-2 flex">
                        <i data-feather="refresh-ccw"></i>
                        <h3>Status</h3>
                        </div>
                        <h3 className="font-bold text-green-500 rounded-full px-2 flex bg-green-200 items-center">Done</h3>
                    </div>

                    <div className="flex justify-between py-3">
                        <h3>Total Transaksi</h3>
                        <h3 className="font-bold text-orange-500">Idr 40.000</h3>
                    </div>
                </div>
                </div> {/* order informasi */}

            <div className="flex flex-col gap-4"> {/* your order */}
                
                <h4 className="font-semibold">Your Order</h4>

            <div className="flex flex-col gap-3 sm:gap-5 overflow-y-scroll h-[22rem] sm:h-[21rem]">
            <div className="relative flex items-center gap-2 sm:gap-4 bg-[#E8E8E84D] p-2">
                <div className="">
                <img className="w-24 sm:w-36" src="./assets/checkout-image.jpg" />
                </div>
                <div className="flex-1 flex flex-col gap-2 sm:gap-3 justify-center">
                <div className="bg-[#D00000] text-white rounded-3xl text-[0.6rem] sm:text-xs p-1 sm:p-1.5 w-fit">
                    <h1>FLASH SALE!</h1>
                </div>
                <h4 className="font-bold text-xs sm:text-base">Hazelnut Latte</h4>
                <div className="flex divide-x text-xs sm:text-sm text-[#4F5665] divide-[#4F5665] w-48 sm:w-60">
                    <p className="pr-3">2pcs</p>
                    <p className="flex-1 flex justify-center">Regular</p>
                    <p className="flex justify-center px-3">Ice</p>
                    <p className="flex-1 flex justify-center">Dine in</p>
                </div>
                <div className="flex items-center gap-4">
                    <h1 className="text-[#D00000] text-[0.6rem] sm:text-xs font-semibold line-through">IDR 40.000</h1>
                    <h1 className="text-[#FF8906] font-semibold text-xs sm:text-base" id="product-price">IDR 10.000</h1>
                </div>
                </div>
            </div>

            <div className="relative flex items-center gap-2 sm:gap-4 bg-[#E8E8E84D] p-2">
                <div className="">
                <img className="w-24 sm:w-36" src="./assets/checkout-image.jpg" />
                </div>
                <div className="flex-1 flex flex-col gap-2 sm:gap-3 justify-center">
                <div className="bg-[#D00000] text-white rounded-3xl text-[0.6rem] sm:text-xs p-1 sm:p-1.5 w-fit">
                    <h1>FLASH SALE!</h1>
                </div>
                <h4 className="font-bold text-xs sm:text-base">Hazelnut Latte</h4>
                <div className="flex divide-x text-xs sm:text-sm text-[#4F5665] divide-[#4F5665] w-48 sm:w-60">
                    <p className="pr-3">2pcs</p>
                    <p className="flex-1 flex justify-center">Regular</p>
                    <p className="flex justify-center px-3">Ice</p>
                    <p className="flex-1 flex justify-center">Dine in</p>
                </div>
                <div className="flex items-center gap-4">
                    <h1 className="text-[#D00000] text-[0.6rem] sm:text-xs font-semibold line-through">IDR 40.000</h1>
                    <h1 className="text-[#FF8906] font-semibold text-xs sm:text-base" id="product-price">IDR 10.000</h1>
                </div>
                </div>
            </div>

            <div className="relative flex items-center gap-2 sm:gap-4 bg-[#E8E8E84D] p-2">
                <div className="">
                <img className="w-24 sm:w-36" src="./assets/checkout-image.jpg" />
                </div>
                <div className="flex-1 flex flex-col gap-2 sm:gap-3 justify-center">
                <div className="bg-[#D00000] text-white rounded-3xl text-[0.6rem] sm:text-xs p-1 sm:p-1.5 w-fit">
                    <h1>FLASH SALE!</h1>
                </div>
                <h4 className="font-bold text-xs sm:text-base">Hazelnut Latte</h4>
                <div className="flex divide-x text-xs sm:text-sm text-[#4F5665] divide-[#4F5665] w-48 sm:w-60">
                    <p className="pr-3">2pcs</p>
                    <p className="flex-1 flex justify-center">Regular</p>
                    <p className="flex justify-center px-3">Ice</p>
                    <p className="flex-1 flex justify-center">Dine in</p>
                </div>
                <div className="flex items-center gap-4">
                    <h1 className="text-[#D00000] text-[0.6rem] sm:text-xs font-semibold line-through">IDR 40.000</h1>
                    <h1 className="text-[#FF8906] font-semibold text-xs sm:text-base" id="product-price">IDR 10.000</h1>
                </div>
                </div>
            </div>

            <div className="relative flex items-center gap-2 sm:gap-4 bg-[#E8E8E84D] p-2">
                <div className="">
                <img className="w-24 sm:w-36" src="./assets/checkout-image.jpg" />
                </div>
                <div className="flex-1 flex flex-col gap-2 sm:gap-3 justify-center">
                <div className="bg-[#D00000] text-white rounded-3xl text-[0.6rem] sm:text-xs p-1 sm:p-1.5 w-fit">
                    <h1>FLASH SALE!</h1>
                </div>
                <h4 className="font-bold text-xs sm:text-base">Hazelnut Latte</h4>
                <div className="flex divide-x text-xs sm:text-sm text-[#4F5665] divide-[#4F5665] w-48 sm:w-60">
                    <p className="pr-3">2pcs</p>
                    <p className="flex-1 flex justify-center">Regular</p>
                    <p className="flex justify-center px-3">Ice</p>
                    <p className="flex-1 flex justify-center">Dine in</p>
                </div>
                <div className="flex items-center gap-4">
                    <h1 className="text-[#D00000] text-[0.6rem] sm:text-xs font-semibold line-through">IDR 40.000</h1>
                    <h1 className="text-[#FF8906] font-semibold text-xs sm:text-base" id="product-price">IDR 10.000</h1>
                </div>
                </div>
            </div>
            </div>{/* your order */}
            </div>
            </div>
        </div>{/* history order */}


        <Footer />
        </body>
        </>
    )
}

export default DetailOrder
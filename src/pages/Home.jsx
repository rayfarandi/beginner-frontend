/* eslint-disable no-unused-vars */
 // eslint-disable-next-line no-undef
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FiMessageCircle, FiSend, FiCheckCircle } from "react-icons/fi";
import { FaStar } from "react-icons/fa6"
import testimoni from '../assets/images/home-testimoni1.jpg'
import ButtonSwipe from "../components/ButtonSwipe";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Map from "../assets/images/home-map.png";
import MapMobile from "../assets/images/map-mobile.png";
import CardProductHome from "../components/CardProductHome";
import { useSelector } from "react-redux";
import ProductSkeleton from "../components/ProductSkeleton";

const Data = ({ value, text }) => {
  return (
    <div>
      <h1 className={`text-primary text-2xl sm:text-4xl font-semibold flex justify-between ${text == "Staff" || text == "Stores" ? 'w-12 sm:w-[4.5rem]' : 'w-16 sm:w-24'}`}>
        <h1>
        {value}
        </h1>
        <p>+</p>
      </h1>
      <p className="text-white text-xs sm:text-sm">{text}</p>
    </div>
  );
};



const ListProvide = ({ text }) => {
  return (
    <div className="flex gap-4">
      <div className="bg-gradient-to-br from-grey-700 to-black rounded-full text-primary w-fit h-fit">
        <FiCheckCircle className="h-5 w-fit" />
      </div>
      <p className="text-xs sm:text-sm text-[base-content]">{text}</p>
    </div>
  );
};


// recommendation products start
// eslint-disable-next-line react-refresh/only-export-components
export const recommendProducts= async (setIsLoading,setData) => {
  setIsLoading(true)
  try {
    const {data} = await axios.get(`${import.meta.env.VITE_SERVER_URL}/products`, {
      params: {
        limit: setData.limit,
        isRecommended: true
      }
    })
    console.log(data)
    setData.setDataProducts(data.results)
    setData.setCurrentPage && setData.setCurrentPage(data.pageInfo.currentPage)
    setData.setTotalPage && setData.setTotalPage(data.pageInfo.totalPage)
    setData.setNextPage && setData.setNextPage(data.pageInfo.nextPage)
  } catch (error) {
    console.log(error)
  }finally{
    setIsLoading(false)
  }
}
// recommendation products end



const Home = () => {
  const [isLoading,setIsLoading]= useState(false)
  const token = useSelector(state => state.auth.token)

  const [chatBox, setChatBox] = useState(false);

  // animasi landing page start
  const [display, setDisplay] = useState(false)
  // animasi landing page end



  // animasi provide page start
  const [listProvide, setListProvide] = useState([
    {
      text:"High quality beans"
    },
    {
      text:"Healthy meals, you can request the ingredients"
    },
    {
      text:"Free member card with a minimum purchase of IDR 200.000."
    },
    {
      text:"Chat with our staff to get better experience for ordering"
    }
  ])




  const [dataProducts, setDataProducts] = useState()
  

  const [position, setPosition] = useState(0);
  const handleSlideLeft = () => {
    setPosition(position + 1);
    console.log("test")
    console.log(position)
  };


  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  
    setDisplay(true)
    setIsLoading(true)

    const timer = setTimeout(()=>{
      
      recommendProducts(setIsLoading, {
        setDataProducts,
        limit: 4,
      })
    },6000)
    return ()=> clearTimeout(timer)

  }, [])


  return (
    <div className="font relative flex flex-col items-center">
      <Navbar home={true}/>

      <button
        onClick={() => setChatBox(!chatBox)}
        className="fixed flex justify-center items-center text-white right-6 bottom-6 sm:right-12 sm:bottom-12 bg-primary rounded-full p-1 w-10 h-10 sm:p-2 sm:w-12 sm:h-12 z-50 active:scale-90 transition"
      >
        <FiMessageCircle size={25}/>
      </button>

      <div
        className={`${
          !chatBox ? "hidden" : "flex"
        } fixed w-60 h-80 sm:w-72 sm:h-96 rounded-xl sm:rounded-2xl flex-col bg-white top-24 sm:right-24 z-50`}
      >
        <div className="flex border-t-[0.8rem] sm:border-t-[1rem] border-primary rounded-tr-xl rounded-tl-xl sm:rounded-tr-2xl sm:rounded-tl-2xl pl-4 gap-4 py-2">
          <div>
            <img
              className=" w-10 h-10 sm:w-14 sm:h-14 rounded-full"
              src="https://images.pexels.com/photos/1649691/pexels-photo-1649691.jpeg?auto=compress&cs=tinysrgb&w=100"
            />
          </div>
          <div className="admin-support">
            <h1 className="font-bold text-sm sm:text-base">Juan ElCabalo</h1>
            <h1 className="text-primary text-sm sm:text-base">
              Admin Support
            </h1>
          </div>
        </div>

        <hr className="border border-[#E8E8E8]" />

        <div className="p-2 flex flex-col gap-2 h-48 sm:h-56">
          <div className="flex items-center gap-2 sm:gap-4">
            <div>
              <img
                className="w-6 h-6 sm:w-8 sm:h-8 rounded-full"
                src="https://images.pexels.com/photos/1649691/pexels-photo-1649691.jpeg?auto=compress&cs=tinysrgb&w=100"
              />
            </div>
            <p className="text-[0.6rem] sm:text-xs text-[base-content] bg-[#E8E8E84D] rounded-md p-1 sm:p-2">
              Halo, Ada yang bisa kami bantu?
            </p>
          </div>

          <div className="flex items-center justify-end gap-2 sm:gap-4">
            <p className="text-[0.6rem] sm:text-xs text-[base-content]  bg-[#E8E8E84D] rounded-md p-1 sm:p-2">
              Saya kesulitan mencari kopi
            </p>
            <div>
              <img
                className="w-6 h-6 sm:w-8 sm:h-8 rounded-full"
                src="https://images.pexels.com/photos/16331782/pexels-photo-16331782/free-photo-of-a-dj-at-the-party.jpeg?auto=compress&cs=tinysrgb&w=100"
              />
            </div>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center px-2 gap-2">
          <input
            className="w-4/5 rounded-md text-[0.6rem] sm:text-xs p-1.5 sm:p-2 border border-[#DEDEDE] outline-none"
            type="text"
            placeholder="Masukan Pesan Anda"
          />
          <div className="flex-1 text-white flex justify-center items-center bg-primary rounded-md p-1 sm:p-1.5 active:scale-95 transition-all">
            <FiSend size={20}/>
          </div>
        </div>
      </div>

      <section className="flex flex-col-reverse sm:flex-row h-[64rem] sm:h-screen w-full">
        <div className="flex h-fit py-16 sm:py-0 sm:h-screen sm:flex-1 justify-center items-center bg-gradient-to-b from-dark to-black">
          <div className="flex flex-col gap-6 max-w-md h-fit px-4 sm:px-0">
            <h1
              className={`text-2xl sm:text-5xl text-white font-medium transition-all duration-1000 
            ${display ? "ml-0 opacity-100 " : "-ml-12 opacity-0 "}`}
            >
              Start Your Day with <br /> Coffee and Good <br /> Meals
            </h1>
            <p
              id="description"
              className={`text-white text-xs sm:text-sm w-11/12 transition-all duration-1000 delay-500 ${
                display ? "ml-0 opacity-100 " : "-ml-12 opacity-0 "
              }`}
            >
              We provide high quality beans, good taste, and healthy meals made
              by love just for you. Start your day with us for a bigger smile!
            </p>

            <Link
              to={token ? '/products' : '/login'}
              className="base-100 bg-gradient-to-br from-primary to-black py-1 px-2 text-sm rounded w-fit text-center active:scale-90 transition-all"
            >
              Get Started
              <span
                className={`absolute top-0 right-0 h-full bg-gradient-to-bl from-grey-700 to-black transition-all duration-1000 delay-1000 ${
                  display ? "w-0" : " w-full"
                }`}
              ></span>
            </Link>
            <div className="flex divide-x-2">
              <div className="flex-1 flex">
                <div className="flex flex-col sm:gap-2  w-5/6">
                  <Data value="90" text="Staff" />
                </div>
              </div>

              <div className="flex-1 flex justify-center">
                <div className="flex flex-col items-center sm:gap-2 w-5/6">
                  <Data value="30" text="Stores" />
                </div>
              </div>

              <div className="flex-1 flex justify-end">
                <div className="flex flex-col items-end sm:gap-2 w-5/6">
                  <Data value="800" text="Customer" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 bg-[url('../assets/images/bg-home.jpg')] bg-center"></div>
      </section>

      <section className="flex flex-col-reverse sm:flex-row w-full h-[64rem] sm:h-screen ">
        <div className="h-fit py-16 sm:py-0 px-4 sm:px-0 sm:h-screen sm:flex-1 flex items-center justify-center sm:justify-normal">
          <div className="flex flex-col sm:ml-28 gap-4 h-fit max-w-lg ">
            <div
              className={`flex items-center gap-4`}
            >
              <hr className="border-primary border-2 sm:border-4 h-14" />
              <h1 className="text-2xl sm:text-5xl font-medium">
                We Provide{" "}
                <span className="text-primary">
                  Good <br /> Coffee
                </span>{" "}
                and{" "}
                <span className="text-primary">Healthy <br /> Meals</span>
              </h1>
            </div>
            <p className={`text-xs sm:text-sm text-[base-content]`}>
              You can explore the menu that we provide with fun and have their
              own <br /> taste and make your day better.
            </p>
            <div
              id="list-provide"
              className={`flex flex-col gap-4`}
            >
              {listProvide.map((item, index) => (
                <ListProvide key={index} text={item.text} />
              ))}
            </div>
          </div>
        </div>

        <div className="bg-[url('../assets/images/staff-image.jpg')] flex-1 bg-center bg-cover"></div>
      </section>

      <section className="h-fit sm:h-screen flex flex-col items-center sm:pt-10 w-full sm:w-5/6 gap-6 sm:gap-12">
        <div className="flex flex-col items-center gap-2 sm:gap-4">
          <h1
            className={`relative text-[base-content] text-2xl text-center sm:text-5xl font-medium sm:mb-2 px-4`}
          >
            Here is People's <span className="text-primary">Favorite</span>
          </h1>
          <hr className="border-primary border-2 sm:border-4 w-16" />
          <p className="text-[base-content] text-xs sm:text-base text-center px-4">
            Let's choose and have a bit taste of poeple's favorite. It might be
            yours too!
          </p>
        </div>

        <div className="gap-y-48 gap-x-6 flex flex-wrap justify-center mb-44 sm:gap-6 w-fit mx-6 sm:mx-0 sm:px-6">
          {isLoading ? (
            Array.from({length:4},(_,index)=>(
              <ProductSkeleton className="w-44 h-44" key={index} />
            ))
          ) : (
            dataProducts &&
            dataProducts.map((product) => (
              <CardProductHome
                id={product.id}
                key={product.id}
                productName={product.name}
                description={product.description}
                rating={product.rating}
                price={product.basePrice}
                image={product.image}
                tag={product.tag}
              />
            ))
          )}
        </div>
      </section>

      <section className="h-fit py-6 mt-10 sm:h-screen flex flex-col items-center justify-center w-full bg-neutral gap-12">
        <div className="flex flex-col items-center gap-2 sm:gap-4">
          <h1 className="text-2xl sm:text-5xl font-medium text-center px-4 sm:px-0 text-[base-content]">
            <span className="text-primary">Visit Our Store</span> in the Spot
            on the Map Below
          </h1>
          <hr className="border-primary border-2 sm:border-4 w-16" />
          <p className="text-[base-content] text-center text-xs sm:text-base max-w-lg px-4 sm:px-0">
            You can explore the menu that we provide with fun and have their own
            taste and make your day better.
          </p>
        </div>

        <div className="flex justify-center">
          <img className="w-3/5 hidden sm:block" src={Map} />
          <img className="sm:hidden" src={MapMobile} />
        </div>
      </section>

      <section className="flex justify-center items-center bg-gradient-to-b from-grey-700-700 to-black w-full h-fit py-6 sm:h-fit sm:py-12">
      
            <div className="flex flex-col sm:flex-row w-5/6 gap-4">
                <div className="flex flex-col items-center gap-4">
                <h2 className="text-white sm:hidden">TESTIMONIAL</h2>
                <img className="w-full sm:w-[30rem]" src={testimoni} alt="" />
                </div>
                
                <div className="flex flex-col gap-4 w-full sm:w-[30rem]">
                <h2 className="text-white hidden sm:block">TESTIMONIAL</h2>
                <h1 className="text-white text-2xl sm:text-4xl border-l-4 border-slate-700 pl-4">Viezh Robert</h1>
                <h2 className="text-slate-700">Manager Coffe Shop</h2>
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
                <ButtonSwipe handleNextPage={handleSlideLeft}/>
                </div>
                <div className="flex gap-1">
                    <div className="bg-slate-700 w-8 h-2 rounded-md"></div>
                    <div className="bg-white w-2 h-2 rounded-md"></div>
                    <div className="bg-white w-2 h-2 rounded-md"></div>
                    <div className="bg-white w-2 h-2 rounded-md"></div>
                </div>
                </div>
            </div>
            
      </section>

      <Footer />
    </div>
  );
};

export default Home;

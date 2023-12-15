import Footer from "../components/Footer"
import Navbar from "../components/navbar"
import * as Icon from 'react-feather'


const Home =()=>{
    return(
        <>
        <body className="flex flex-col items-center">
        <Navbar />
        {/* <landing page */}
        <div className="flex flex-col-reverse lg:flex-row h-screen w-full">
            {/* left-landing */}
      <div className="flex flex-1 justify-center items-center bg-gradient-to-b from-[#18181B] to-[#27272A]"> 
      
        <div className="flex flex-col mx-10 gap-5 "> 
        {/* conten */}
          <h1 className="text-white font-medium text-5xl">Start Your Day with<br></br>Coffee and Good Meals</h1>
          <h3 className=" text-white justify-center text-sm">
            We provide high quality beans, good taste, and healthy meals made by
            love just for you. Start your day with us for a bigger smile!
          </h3>
          <div className="flex justify-between">
            <button className="bg-orange-500 py-2 px-3 rounded-md">Get Started</button>
          </div>
          <div className="flex divide-x-2">
            <div className="flex flex-1 flex-col justify-start items-center">
              <h2 className="text-orange-500 text-4xl font-semibold">90+</h2>
              <h2 className="text-white">Staff</h2>
            </div>
            <div className="flex flex-1 flex-col justify-center items-center">
              <h1 className="text-orange-500 text-4xl font-semibold">30+</h1>
              <h2 className="text-white">Stores</h2>
            </div>
            <div className="flex flex-1 flex-col justify-end items-center">
              <h1 className="text-orange-500 text-4xl font-semibold">800+</h1>
              <h2 className="text-white">Customer</h2>
            </div>
          </div>
        </div>
      </div>
        <div className="flex flex-1 ">
            {/* right-landing */}
            <img src="assets/bg-home.jpg" alt="bacground coffee" className="flex flex-1 bg-center"/>
            {/* <chat */}
        <div className="flex justify-center items-center right-10 bottom-10 fixed bg-orange-500 rounded-full  p-2 w-12 h-12">
            <Icon.MessageCircle/>
        </div>
        {/* chat */}
        </div> {/* right-landing */}
    </div> {/* landing page */}
        <Footer />
        </body>
        </>
    )
}
export default Home
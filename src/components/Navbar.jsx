import * as Icon from 'react-feather'
import { Link } from 'react-router-dom'
const Navbar =()=>{
    
    return (
      
        <>
      <nav className="flex w-full h-[10%] fixed bg-black z-10">
      <div className="flex justify-between items-center w-11/12 ml-[5%]">
        <div className="flex gap-10">
          <div className="flex flex-row">
            <img src="src/assets/media/cup-coffee-icon-white.png"  className=" flex" alt="logo"/>
            <img src="src/assets/media/text-logo-white.png" className=" flex pl-1" alt="logo tulisan"/>
          </div>
          <div className="flex gap-10">
            <Link to="/" className="hover:border-b hover:border-orange-500 text-white hidden md:block">Home</Link>
            <Link to="./product" className="hover:border-b hover:border-orange-500 text-white hidden md:block">Product</Link>
          </div>
        </div>

      

        <div className="flex items-center gap-5">
            <Icon.Search className="text-white"/>
            <Icon.ShoppingCart className="text-white"/>
            <Icon.Menu className="md:hidden text-white"/>
            
          
            <Link to="./login"className="text-white border border-white py-2 px-3 text-sm rounded hidden md:block">Sign In</Link>
          <Link to="./register" className="bg-orange-500 py-2 px-3 text-sm rounded hidden md:block">Sign Up</Link>
        </div>
    </div>
    
    </nav>
    <div className="sm:hidden flex w-full bg-black py-1 mt-20 flex-col">
                <div className="flex ">
                    <Icon.Search className="bg-white pl-2  rounded-l-full text-black text-2xl md hydrated"/>
                    <input type="text" className="w-full rounded-r-full px-3" placeholder="Search"/>
                </div>
                <div className="flex flex-col gap-2">
                    <Link to="/" className="text-white hover:opacity-80  mt-2  flex justify-center border-[1px] border-slate-700 py-2 rounded">Home</Link>
                    <Link to="/product" className="text-white hover:opacity-80 underline underline-offset-4 decoration-primary flex justify-center border-[1px] border-slate-700 py-2 rounded">Product</Link>
                </div>
                <div className="flex flex-col gap-2">
                    <a href="#sign" className="">
                        <button className="text-white border-[1px] rounded px-4 py-2 hover:opacity-80 mt-3 lg:mt-0 w-full">Sign in</button>
                    </a>
                    <a href="#signUp" className="">
                        <button className="text-white bg-primary border-[1px] border-primary px-4 py-2 rounded hover:opacity-80 w-full">Sign up</button>
                    </a>
                </div>
            </div>
        </>
    )
} 
export default Navbar
import { Link } from "react-router-dom"
const Navbar =()=>{
    
    return (
        <>
        <nav className="flex w-full h-[10%] fixed bg-black z-10">
      <div className="flex justify-between items-center w-11/12 ml-[5%]">
      <div className="flex gap-10">
        <div className="flex flex-row">
          <img src="../assets/cup-coffee-icon-white.png"  className=" flex" alt="logo"/>
          <img src="../assets/text-logo-white.png" className=" flex pl-1" alt="logo tulisan"/>
        </div>
        <div className="flex gap-10">
          <a href="/home.html" className="hover:border-b hover:border-orange-500 text-white hidden md:block">Home</a>
          <a href="/product.html" className="hover:border-b hover:border-orange-500 text-white hidden md:block">Product</a>
        </div>
      </div>

      <div className="flex items-center gap-5">
          <i data-feather="search" className="text-white"></i>
          <i data-feather="shopping-cart" className="text-white"></i>
          <i data-feather="menu" className="md:hidden text-white"></i>
          
        
          <Link to="./login.html"className="text-white border border-white py-2 px-3 text-sm rounded hidden md:block">Sign In</Link>
        <Link to="./register.html" className="bg-orange-500 py-2 px-3 text-sm rounded hidden md:block">Sign Up</Link>
      </div>
    </div>
    </nav>
        </>
    )
} 
export default Navbar
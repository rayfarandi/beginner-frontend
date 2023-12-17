import React from 'react'
import * as Icon from 'react-feather'
import { Link } from 'react-router-dom'
const Navbar =()=>{
  const [menuOpen, setMenuOpen]= React.useState(false)
    return (
      
        <>
      <nav className={`${!menuOpen ? 'h-[10%] ':'flex-col pt-4 '} flex w-full fixed bg-black z-10`}>
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
            <button onClick={()=>setMenuOpen(!menuOpen)}>
            <Icon.Menu className="md:hidden text-white"/>
            </button>
            
            
          
            <Link to="./login"className="text-white border border-white py-2 px-3 text-sm rounded hidden md:block">Sign In</Link>
          <Link to="./register" className="bg-orange-500 py-2 px-3 text-sm rounded hidden md:block">Sign Up</Link>
        </div>
    </div>
    {menuOpen && <div className="md:hidden flex w-full bg-black pt-4 pb-2 flex-col">
                <div className="flex ">
                    <Icon.Search className="bg-white pl-2  rounded-l-full text-black text-2xl md hydrated"/>
                    <input type="text" className="w-full rounded-r-full px-3" placeholder="Search"/>
                </div>
                <div className="flex flex-col gap-2">
                    <Link to="/" className="text-white hover:opacity-80  mt-2 flex justify-center border-[1px] border-white py-2 rounded">Home</Link>
                    <Link to="/product" className="text-white hover:opacity-80 decoration-primary flex justify-center border-[1px] border-white py-2 rounded">Product</Link>
                    <Link to="/register" className="text-white hover:opacity-80  mt-2 flex justify-center border-[1px] border-white py-2 rounded">Sign Up</Link>
                    <Link to="/login" className="text-white hover:opacity-80 decoration-primary flex justify-center border-[1px] border-white py-2 rounded">Sign In</Link>
                </div>
                
            </div>}
    </nav>
    
        </>
    )
} 
export default Navbar
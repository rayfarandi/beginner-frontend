import React, { useState } from 'react'
import * as Icon from 'react-feather'
import { Link,useNavigate } from 'react-router-dom'
// gambar
import LogoW from '../assets/images/logo-white.png'
import LogoTextW from '../assets/images/text-logo-white.png'
const Navbar =({ bg })=>{
  const [menuOpen, setMenuOpen]= useState(false)
  const [logoutOpen, setLogoutOpen] = useState(false)
  const [token ,setToken] = useState(window.localStorage.getItem('token'))
  const navigate = useNavigate()

  const onLogout =()=>{
    setToken(null)
    window.localStorage.removeItem('token')
    navigate('/login')
  }
    return (
      
        <>
      
      <nav className={`${!menuOpen ? 'py-4 flex-row  ' : 'flex-col pt-4 '} flex w-full fixed z-10`} style={{ background: bg }}>
      
      <div className="flex justify-between items-center w-11/12 ml-[5%]">
        <div className="flex gap-10">
          <div className="flex flex-row">
            <img src={LogoW}  className=" flex" alt="logo"/>
            <img src={LogoTextW} className=" flex pl-1" alt="logo tulisan"/>
          </div>
          <div className="flex gap-10">
            <Link to="/" className="hover:border-b hover:border-orange-500 text-white hidden md:block">Home</Link>
            <Link to="/product" className="hover:border-b hover:border-orange-500 text-white hidden md:block">Product</Link>
          </div>
        </div>

      

        <div className="flex items-center gap-5">
            <Icon.Search className="text-white hidden md:block"/>
            <Icon.ShoppingCart className="text-white"/>
            <button onClick={()=>setLogoutOpen(!logoutOpen)}>
            {token && <div className='h-8 w-8 rounded-full bg-white'>
              </div>}
            </button>
            <button onClick={()=>setMenuOpen(!menuOpen)}>
            <Icon.Menu className="md:hidden text-white"/>
            </button>
            
            
            
            {!token &&<Link to="/login"className="text-white border border-white py-2 px-3 text-sm rounded hidden md:block">Sign In</Link>}
            {!token &&<Link to="/register" className="bg-orange-500 py-2 px-3 text-sm rounded hidden md:block">Sign Up</Link>}
        </div>
    </div>
    {menuOpen && <div className="md:hidden flex w-full bg-black pt-4 pb-2 flex-col" style={{ background: bg }}>
                <div className="flex ">
                    <Icon.Search className="bg-white pl-2  rounded-l-full text-black text-2xl md hydrated"/>
                    <input type="text" className="w-full rounded-r-full px-3" placeholder="Search"/>
                </div>
                <div className="flex flex-col gap-2">
                    <Link to="/" className="text-white hover:opacity-80  mt-2 flex justify-center border-[1px] border-white py-2 rounded">Home</Link>
                    <Link to="/product" className="text-white hover:opacity-80 decoration-primary flex justify-center border-[1px] border-white py-2 rounded">Product</Link>
                    {!token&& <Link to="/register" className="text-white hover:opacity-80  mt-2 flex justify-center border-[1px] border-white py-2 rounded">Sign Up</Link>}
                    {!token&& <Link to="/login" className="text-white hover:opacity-80 decoration-primary flex justify-center border-[1px] border-white py-2 rounded">Sign In</Link>}
                </div>
                
            </div>}
    </nav>
          {logoutOpen && <button onClick={onLogout} className="flex -right-1 top-11 text-l bg-orange-300 items-center px-2 py-2 mx-5 my-5 rounded hover:opacity-70 z-20 fixed">
          <Icon.LogOut className="w-12" name="log-out"/>
          <h1 className="px-2">Logout</h1>
          </button>}
        </>
    )
} 
export default Navbar
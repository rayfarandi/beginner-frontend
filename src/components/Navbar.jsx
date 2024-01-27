import React, { useEffect, useState } from 'react'
import * as Icon from 'react-feather'
import { Link,useNavigate } from 'react-router-dom'
// gambar
import LogoW from '../assets/images/logo-white.png'
import LogoTextW from '../assets/images/text-logo-white.png'
import axios from 'axios'
import defaultInsertImage from "../assets/images/insertimage.jpg" 
import { useDispatch, useSelector } from 'react-redux'
import { logout as logoutAction } from '../../redux/reducers/auth'
import { setProfile as setProfileAction } from '../../redux/reducers/profile'

const Navbar =({ bg })=>{
  const [menuOpen, setMenuOpen]= useState(false)
  const [logoutOpen, setLogoutOpen] = useState(false)
  // const [token ,setToken] = useState(window.localStorage.getItem('token'))
  const token = useSelector(state=> state.auth.token)
  const [searchDisplay, setSearchDisplay] = React.useState('hidden')
  // const [user, setUser] = useState({})
  const user = useSelector(state => state.profile.data)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const getProfile = async()=>{
    if(token){
      const {data} = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/profile`,{
                headers:{
                    'Authorization': `Bearer ${token}`
                }
    })
    // setUser(data.results)
    
    dispatch(setProfileAction(data.results))
    }
}
React.useEffect(()=>{
    getProfile()
},[])
  
  const searchButton = (event) => {
    event.preventDefault()
    if(searchDisplay === 'hidden'){
        setSearchDisplay('flex')
    }else if(searchDisplay === 'flex'){
        setSearchDisplay('hidden')
    }
}

  
  const onLogout =()=>{
    // setToken(null)
    // window.localStorage.removeItem('token')
    dispatch(logoutAction())
    navigate('/login')
  }
  useEffect(()=>{
    // getProfile()
  },[])
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
            <Link to="/" className="hover:border-b hover:border-slate-700 text-white hidden md:block">Home</Link>
            <Link to="/product" className="hover:border-b hover:border-slate-700 text-white hidden md:block">Product</Link>
          </div>
        </div>

      

        <div className="flex items-center gap-5">
            
            
            <form className='flex flex-row-reverse items-center gap-2' action="">
              <div onClick={searchButton}>
                <div className="hover:border-b-2 hover:border-b-slate-700 hover:pb-1.5"><Icon.Search  className='text-lg text-white'/>
                </div>
              </div>
            </form>
            <div className={`${searchDisplay} flex-row items-center border h-8 border-gray-300 rounded-lg px-4 gap-4`}>
                <input className="flex-1 outline-none placeholder:text-sm placeholder:text-white bg-transparent" id="search" type="text" name="search" placeholder="Search" autoComplete="on"/>
            </div>
            <Icon.ShoppingCart className="text-white"/>
            
            <button onClick={()=>setLogoutOpen(!logoutOpen)}>
            {token && 
            <>
            <div className='h-8 w-8 rounded-full bg-white'>
            {!user.picture && <img className='h-8 w-8 rounded-full' src={defaultInsertImage} />}
              {user.picture && <img className='h-8 w-8 rounded-full' src={`${import.meta.env.VITE_BACKEND_URL}/uploads/profile/${user.picture}` } />}
            </div>
            </>
            }
            </button>
            <button onClick={()=>setMenuOpen(!menuOpen)}>
            <Icon.Menu className="md:hidden text-white"/>
            </button>
            
            
            
            {!token &&<Link to="/login"className="text-white border border-white py-2 px-3 text-sm rounded hidden md:block">Sign In</Link>}
            {!token &&<Link to="/register" className="bg-slate-700 py-2 px-3 text-sm rounded hidden md:block">Sign Up</Link>}
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
            
          {logoutOpen && <div className='flex'> <button><Link to="/profile" className="flex -right-1 top-11 text-l bg-slate-300 items-center px-2 py-2 mx-5 my-5 rounded hover:opacity-70 z-20 fixed">
          <Icon.User className="w-12" name="log-out"/>
          <h1 className="px-2">Profile</h1>
          </Link></button>
          <button onClick={onLogout} className="flex -right-1 top-24 text-l bg-slate-300 items-center px-1.5 py-2 mx-5 my-5  rounded hover:opacity-70 z-20 fixed">
          <Icon.LogOut className="w-12" name="log-out"/>
          <h1 className="px-2">Logout</h1>
          </button></div>}
          
          
        </>
    )
} 
export default Navbar
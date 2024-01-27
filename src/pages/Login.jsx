import React,{useEffect, useState} from 'react'
import  * as Icon from 'react-feather'
import { Link, useNavigate } from 'react-router-dom'
// gambar
import { FcGoogle } from "react-icons/fc"
import { FaFacebook } from "react-icons/fa"
import Logo from '../assets/images/logo.png'
import LogoText from '../assets/images/text-logo.png'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { login as loginAction } from '../../redux/reducers/auth'


const Form = ()=>{
  const inputEmail = React.useRef()
  const inputPassword = React.useRef()
  // const [alertSuccess, setalertSuccess] = useState(false)
  // const [alertError, setalertError] = useState(false)
  // const[token, setToken]= useState(window.localStorage.getItem('token'))
  const token = useSelector (state=> state.auth.token)
  const dispach = useDispatch()
  const navigate = useNavigate()
  const [showPassword,setShowPassword] =useState(false)
  const [successMessage,setSuccessMessage] = useState(null)
  const [errorMessage,setErrorMessage] = useState(null)

  useEffect(()=>{
    if(token){
      navigate('/')
    }
  },[token,navigate])

  const togglePassword = () => {
    setShowPassword(!showPassword)
    }

  const proccesLogin =async (event)=>{
  try{
    event.preventDefault()
  const {value: email} = event.target.email
  const {value: password} = event.target.password
  const form = new URLSearchParams()
  form.append('email',email)
  form.append('password',password)
    
    const {data} = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/login`, form.toString())
    setSuccessMessage(data.message)
    setErrorMessage(null)
    const {token: resultsToken} = data.results
    
    // setalertSuccess(true)
    // setalertError(false)

    setTimeout(()=>{
      // window.location = '/'
      // setToken(resultsToken)
      // window.localStorage.setItem("token",resultsToken)
      dispach(loginAction(resultsToken))
      navigate('/')
    },1500)
  }catch(err){
    
    setErrorMessage(err.response.data.message)
    
  }
    

  }
  return(
    <form onSubmit={proccesLogin}>
          <label htmlFor="email"><h3 className="font-semibold px-5 pt-3">Email</h3></label>
                 <div className="flex mx-5 my-3 border-[1px] rounded">
                    <div className="w-[7%] flex justify-center">
                      <Icon.Mail className="w-4"/>
                    </div>
                    <input ref={inputEmail} type="email" name="email" className="w-[93%] py-1 pl-2" placeholder="Enter Your Email"/>
                </div>
            

            <div>
              <label htmlFor="password"><h3 className="font-semibold px-5 pt-3">Password</h3>
              </label>
                 <div className="flex mx-5 my-3 border-[1px] rounded">
                    <div className="w-[7%] flex justify-center">
                      <Icon.Key className="w-4"/>
                    </div>
                    <input ref={inputPassword} type={showPassword ?'text':'password'}  name="password" className="w-[90%] py-1 pl-2" placeholder="Enter Your Password"/>
                    <button onClick={togglePassword} className="lg:w-[3%] w-[7%] flex lg:px-1" type="button">
                    
                      <Icon.Eye className="w-4"/>
                    </button>
                  
                </div>
            </div>


            <div className="flex justify-end items-center mt-5 mr-5">
              <h1 className="text-gray-500 text-[13px]">Forgot Password?</h1> 
              <Link to="/forgotpasswords" className="text-slate-700">Forgot</Link>
          </div>
          {successMessage&& <div
          className="bg-green-200 border border-green-500 text-green-900 px-10 py-4 rounded text-bold">
            {successMessage}
          </div>}
          {errorMessage && <div
          className="bg-red-200 border border-red-500 text-red-900 px-10 py-4 rounded text-bold">
            {errorMessage}
          </div>} 

            <div className="flex justify-center py-3">
              <button type="submit" className="w-[95%] bg-slate-700 py-2 hover:bg-slate-700/70">Login</button>
            </div>
          
          </form>
  )
}

const Login = ()=>{
  
  
    return(
<>
    <div className="flex flex-row">
        <div
          className="hidden sm:block sm:w-2/5 md:w-2/6 lg:w-1/4
          bg-[url(../assets/images/bg-login.jpg)] w-1/4 bg-center bg-cover"
        ></div>
        
        <div className="flex lg:w-[75%] w-full flex-col gap-5">
          <div className="flex flex-row">
            <img src={Logo} className=" flex pl-10 pt-10 lg:pl-12" alt="logo"/>
            <img src={LogoText} className=" flex  pl-1 pt-10 lg:pl-1" alt="logo tulisan"/>
          </div>
         <div className="flex flex-col px-5">
          <h1 className="font-semibold text-[#8E6447] px-5">Login</h1>
          <h2 className="text-[14px] px-5 pt-3">Fill out the form correctly</h2>
          <Form />
          



          <div className="flex justify-center mt-4">
            <h1 className="text-gray-500 text-[13px]">Or</h1>
            </div>

            <div className="flex justify-center items-center gap-5 my-5 mx-5">
            <button className="flex justify-center items-center gap-5 px-4 py-3 rounded shadow-md lg:w-[46%]">
            <FcGoogle alt="google" className="w-5 h-5 object-contain"/>
                <h4 className="hidden lg:block">Google</h4>
            </button>
            <button className="flex justify-center items-center gap-5 px-4 py-3 rounded shadow-md lg:w-[46%]">
            <FaFacebook  alt="facebook" className="w-5 h-5 object-contain" />
                <h4 className="hidden lg:block">Facebook</h4>
            </button>
            </div>
            </div>
        </div>
    </div>          
</>

    )
}
export default Login
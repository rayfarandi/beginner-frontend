import { Link } from 'react-router-dom'
// import * as Icon from 'react-feather'
import axios from 'axios';
import React, { useState } from 'react';
import { ConfirmPasswordInput, EmailInput, FullNameInput, PasswordInput } from '../components/RegistrasiForm'


// gambar
import { FcGoogle } from "react-icons/fc"
import { FaFacebook } from "react-icons/fa";
import Logo from '../assets/images/logo.png'
import LogoText from '../assets/images/text-logo.png'


function RegisterForm() {
  const [isSuccess, setIsSuccess] = useState(false)
  const [successMessage,setSuccessMessage] = useState('')
  const [isError, setIsError] = useState(false)
  const [errorMessage,setErrorMessage] = useState('')
  
  const registerProcess = async (event) => {
    event.preventDefault()
    const {value: fullName} = event.target.fullName
    const {value: email} = event.target.email
    const {value: password} = event.target.password
    const {value: confirm} = event.target.confirm
    
    if(!fullName || !email || !password || !confirm){
      setIsError(true)
      setIsSuccess(false)
      return
    }
    
    if(!email.includes('@')){
      setIsError(true)
      setIsSuccess(false)
      return
    }

    if(password != confirm){
      setIsError(true)
      setIsSuccess(false)
      return
    }
    
    const form = new URLSearchParams()
    form.append('fullName', fullName)
    form.append('email', email)
    form.append('password', password)
    
  
    try{
      const {data} = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/register`, form.toString())
      
      setSuccessMessage(data.message)
      setIsSuccess(true)
      setIsError(false)

      setTimeout(() => {
        window.location.href = '/login'
      }, 2000)
    
    }catch(err) {
      console.log(err)
      setErrorMessage(err.response.data.message)
      setIsError(true)
      setIsSuccess(false)
    }
  }

    return(
        <>
        <div className="flex flex-row">
        <div
          className="hidden sm:block sm:w-2/5 md:w-2/6 lg:w-1/4
          bg-[url(../assets/images/bg-register.webp)] w-1/4 bg-center bg-cover"
        ></div>
        
        <div className="flex lg:w-[75%] w-full flex-col gap-5">
          <div className="flex flex-row">
            <img src={Logo} className=" flex pl-10 pt-10 lg:pl-12" alt="logo" />
            <img src={LogoText} className=" flex  pl-1 pt-10 lg:pl-1" alt="logo tulisan"/>
          </div>
         <div className="flex flex-col px-5">
          <h1 className="font-semibold text-[#8E6447] px-5">Login</h1>
          <h2 className="text-[14px] px-5 pt-3">Fill out the form correctly</h2>

          <form onSubmit={registerProcess} id="form" className="flex flex-col w-full pt-5 md:w-11/12 gap-6 px-4 md:px-5">
            <FullNameInput/>
            <EmailInput/>
            <PasswordInput showSetNew={false}/>
            <ConfirmPasswordInput/>
            <div
              id="alert-success"
              className={`bg-green-300 border border-green-400 text-green-960 px-10 py-4 rounded text-bold ${isSuccess ? '' : 'hidden'}`}
            >
              <p>{successMessage}</p>
            </div>
            <div
              id="alert-error"
              className={`bg-red-300 border border-red-400 text-red-900 px-10 py-4 rounded text-bold ${isError ? '' : 'hidden'}`}
            >
              Please check form correctly! 
              <p> {errorMessage}</p>
            </div>
            <div>
            <button className="border w-full h-12 rounded-md bg-slate-700" type="submit">
              Register
            </button>
              
            </div>
          </form>
          <div className="flex flex-col w-full md:w-11/12 mt-6 gap-6 px-4 md:px-5">
            <div className="flex items-center justify-center">
              Have an account? <Link to="/login" className="text-amber-500">Login</Link>
            </div>
            <div className="flex items-center justify-center">
              <div className="flex-grow border-t border-gray-300 mx-2"></div>
              <div className="divider">or</div>
              <div className="flex-grow border-t border-gray-300 mx-2"></div>
            </div>
            <div className="flex gap-x-3.5 items-center justify-center">
              <button className="flex justify-center items-center gap-5 px-4 py-3 rounded shadow-md lg:w-[46%]">
              <FcGoogle alt="google" className="w-5 h-5 object-contain"/>
                <h4 className="hidden md:block">Google</h4>
              </button>
              <button className="flex justify-center items-center gap-5 px-4 py-3 rounded shadow-md lg:w-[46%]">
              <FaFacebook  alt="facebook" className="w-5 h-5 object-contain" />
                <h4 className="hidden md:block">Facebook</h4>
              </button>
            </div>
          </div>
      
            </div>
        </div>
    </div>
        </>
    )
}
export default RegisterForm




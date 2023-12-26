import React from 'react'
import  * as Icon from 'react-feather'
import { Link } from 'react-router-dom'
// gambar
import { FcGoogle } from "react-icons/fc"
import { FaFacebook } from "react-icons/fa"
import Logo from '../assets/images/logo.png'
import LogoText from '../assets/images/text-logo.png'
import axios from 'axios'

const Form = ()=>{
  const inputEmail = React.useRef()
  const inputPassword = React.useRef()

  const proccesLogin =async (event)=>{
    event.preventDefault()
  const {value: email} = event.target.email
  const {value: password} = event.target.password
  const form = new URLSearchParams()
  form.append('email',email)
  form.append('password',password)
  try{
    const {data} = await axios.post('http://localhost:8888/auth/login', form.toString())
    const {token} = data.results
    window.location = '/'
  }catch(err){
    alert(err.response.data.message)
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
                    <input ref={inputPassword} type="password" name="password" className="w-[90%] py-1 pl-2" placeholder="Enter Your Password"/>
                    <button className="lg:w-[3%] w-[7%] flex lg:px-1" type="button">
                    
                      <Icon.Eye className="w-4"/>
                    </button>
                  
                </div>
            </div>


            <div className="flex justify-end items-center mt-5 mr-5">
              <h1 className="text-gray-500 text-[13px]">Forgot Password?</h1> 
              <Link to="/forgotpasswords" className="text-orange-500">Forgot</Link>
          </div>
          

            <div className="flex justify-center py-3">
              <button type="submit" className="w-[95%] bg-orange-500 py-2 hover:bg-orange-500/70">Login</button>
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
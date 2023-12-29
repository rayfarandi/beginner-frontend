import React, { useState } from 'react'
import  * as Icon from 'react-feather'
import { Link } from 'react-router-dom'

export const FullNameInput = () =>{
  return(
    <div className="relative">
        <label className="block font-semibold" htmlFor="fullName">
          Full Name
          <i className="absolute inset-y-0 left-0 flex items-center pl-3 pt-6">
            <Icon.User className="h-5 w-5 text-gray-500" />
          </i>
        </label>
        <input className="border rounded-lg w-full h-12 pl-10 outline-none" id="fullName" name="text" type="text" placeholder="Enter Your Full Name" />
      </div>
  )
}


export const EmailInput = () =>{
  return(
    <div className="relative">
        <label className="block font-semibold" htmlFor="email">
          Email
          <i className="absolute inset-y-0 left-0 flex items-center pl-3 pt-6">
            <Icon.Mail className="h-5 w-5 text-gray-500" />
          </i>
        </label>
        <input className="border rounded-lg w-full h-12 pl-10 outline-none" id="email" name="email" type="email" placeholder="Enter Your Email" />
      </div>
  )
}

export const PasswordInput = ({showSetNew = true}) =>{
  const [showPassword, setShowPassword] = useState(false)

  const togglePassword = () => {
    setShowPassword(!showPassword)
  }

  return(
    <div className="relative">
        <label className="block font-semibold" htmlFor="password">
          Password
          {showSetNew && (
          <span className="absolute right-0 top-0 flex items-center pr-3 text-amber-500 self-items-end">
            <Link to="#">Set New Password</Link>
          </span>
          )}
          <i className="absolute inset-y-0 left-0 flex items-center pl-3 pt-6">
            <Icon.Lock className="h-5 w-5 text-gray-500" />
          </i>
        </label>
        <div className="flex border rounded-lg w-full h-12 pl-10 pr-3 items-center">
          <input className="w-full outline-none" id="password" name="password" type={showPassword ? 'text' : 'password'} placeholder="Enter Your Password"/>
          <button onClick={togglePassword} id="reveal-password" className="justify-self-end" type="button">
            <i>
              <Icon.EyeOff className="text-gray-500 h-5 w-5" />
            </i>
          </button>
        </div>
      </div>
  )
}

export const ConfirmPasswordInput = () =>{
  const [showPassword, setShowPassword] = useState(false)

  const togglePassword = () => {
    setShowPassword(!showPassword)
  }
  return(
    <div className="relative">
        <label className="block font-semibold" htmlFor="confirm-password">
          Confirm Password
          <i className="absolute inset-y-0 left-0 flex items-center pl-3 pt-6">
            <Icon.Lock className="h-5 w-5 text-gray-500" />
          </i>
        </label>
        <div className="flex border rounded-lg w-full h-12 pl-10 pr-3 items-center">
          <input className="w-full outline-none" id="confirm-password" name="confirm" type={showPassword ? 'text' : 'password'} placeholder="Enter Your Password Again" />
          <button onClick={togglePassword} id="reveal-confirm-password" className="justify-self-end" type="button">
            <i>
              <Icon.EyeOff className="text-gray-500 h-5 w-5" />
            </i>
          </button>
        </div>
      </div>
  )
}

import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Navigate, useNavigate } from "react-router-dom"

const PrivateRoute = ({ children }) =>{
    // const [token, setToken]=useState(window.localStorage.getItem('token'))
    const token = useSelector(state => state.auth.token)
    const navigate = useNavigate()
    useEffect(()=>{
    if(!token){
        navigate('/login')
        }
    },[token,navigate])
    return(
        <>{children}</>
    )
    
}

export default PrivateRoute
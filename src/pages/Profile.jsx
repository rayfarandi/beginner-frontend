import React from "react";
import * as Icon from "react-feather"
import Navbar from "../components/navbar";
import Footer from "../components/Footer";

const Profile =()=>{
    return(
        <>
        <body className="flex flex-col items-center">
        
        <Navbar bg='#000000' />

        {/* profile form */}
    <h1 className="w-5/6 mt-24 text-3xl font-bold">Profile</h1>
    <form className="w-5/6 flex flex-col sm:flex-row gap-4">
      <div className="w-full sm:w-1/5 border border-gray-500 h-fit flex flex-col items-center p-4 gap-3">
        <div className="flex flex-col items-center">
          <h2 className="font-bold">Ghaluh Wizard</h2>
          <p className="text-xs text-gray-500">ghaluhwizz@gmail.com</p>
        </div>
        <div>
          <img className="rounded-full w-28 h-28" src="https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?auto=compress&cs=tinysrgb&w=600" id="photo"/>
        </div>
        <button className="text-xs bg-orange-500 w-full rounded p-2">Upload New Photo</button>
        <p className="text-xs text-gray-500">Since <span className="font-bold">20 January 2022</span></p>
      </div>

      <div className="flex-1 border border-gray-500 p-4 flex flex-col gap-6 outline-none">
          <div className="flex flex-col gap-1">
            <label className="font-bold text-sm" htmlFor="full-name">Full Name</label>
            <div className="flex border border-[#DEDEDE] rounded-md text-gray-500 p-2 gap-2">
              <Icon.User/>
              <input className="text-xs w-full outline-none" id="full-name" type="text" placeholder="Enter Your Full Name" value="Ghaluh Wizard"/>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-bold text-sm" htmlFor="email">Email</label>
            <div className="flex border border-[#DEDEDE] rounded-md text-gray-500 p-2 gap-2">
              <Icon.Mail/>
              <input className="text-xs w-full outline-none" id="email" type="email" placeholder="Enter Your Email" value="ghaluhwizz@gmail.com"/>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-bold text-sm" htmlFor="phone">Phone</label>
            <div className="flex  border border-[#DEDEDE] rounded-md text-gray-500 p-2 gap-2">
              <Icon.Phone/>
              <input className="text-xs w-full outline-none" id="phone" type="text" placeholder="Enter Your Phone Number" value="082116304338"/>
            </div>
          </div>

          <div className="flex flex-col gap-1">
              <div className="flex justify-between items-center">
                  <label className="font-bold text-sm" htmlFor="password">Password</label>
                  <a className="text-orange-500 text-xs" href="#">Set New Password</a>
              </div>
            <div className="flex border border-[#DEDEDE] rounded-md text-gray-500 p-2 gap-2">
              <Icon.Lock/>
              <input className="text-xs w-full outline-none" id="password" type="password" placeholder="Enter Your Password" value="1234567890"/>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-bold text-sm" htmlFor="address">Address</label>
            <div className="flex border border-[#DEDEDE] rounded-md text-gray-500 p-2 gap-2">
              <Icon.MapPin/>
              <input className="text-xs w-full outline-none" id="address" type="text" placeholder="Enter Your Adress" value="Griya Bandung Indah"/>
            </div>
          </div>

          <button className="w-full bg-orange-500 rounded text-xs p-2" type="submit">Submit</button>
        </div>
      
    </form>
    {/* profile form */}

        <Footer/>
        </body>
        </>
    )
}

export default Profile
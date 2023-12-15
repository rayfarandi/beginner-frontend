import * as Icon from 'react-feather'
import { Link } from 'react-router-dom'

const Footer =()=>{
    return(
        <>
        <footer className="flex justify-center items-center w-full h-fit bg-orange-50">
      <div className="flex flex-col flex-1 items-center my-5 lg:flex-row w-11/12 md:my-4 gap-4 lg:gap-24">
       {/* bungkus  */}
       <div className="flex">
         <div className="flex flex-col items-center lg:items-start w-80 gap-4">
         <div className="flex">
           <img src="/assets/cup-coffe-icon.png"  className="flex" alt="logo"/>
           <img src="/assets/text-logo.png" className=" flex pl-1" alt="logo tulisan"/>
         </div>
         <h3 className="text-gray-500">
           Coffee Shop is a store that sells some good meals, and especially
           coffee. We provide high quality beans
         </h3>
         <h4 className="text-gray-500">&copy;2020CoffeeStore</h4>
         </div>
       </div>
 
       <div className="flex gap-20">
         <div className="flex flex-col gap-4">
           <p className="font-semibold">Product</p>
           <div className="flex flex-col gap-2">
             <Link to="./product" className="text-gray-500" >Our Product</Link>
             <a className="text-gray-500" href="#">Pricing</a>
             <a className="text-gray-500" href="#">Location</a>
             <a className="text-gray-500" href="#">Countries</a>
             <a className="text-gray-500" href="#">Blog</a>
           </div>
         </div>
 
         <div className="flex flex-col gap-4">
           <p className="font-semibold">Engage</p>
           <div className="flex flex-col gap-2">
             <a className="text-gray-500" href="#">Partner</a>
             <a className="text-gray-500" href="#">FAQ</a>
             <a className="text-gray-500" href="#">About Us</a>
             <a className="text-gray-500" href="#">Privacy Policy</a>
             <a className="text-gray-500" href="#">Terms of Service</a>
           </div>
         </div>
       </div>
 
       <div className="flex flex-col gap-4 ">
         <p className="font-semibold">Social Media</p>
         <div className="flex gap-4">
           <a href="#" className="rounded-full bg-orange-500 w-9 h-9"><Icon.Facebook className="w-8 h-8 pt-1"/></a>
           <a href="#" className="rounded-full bg-orange-500 w-9 h-9"><Icon.Twitter className="w-8 h-8 pt-1 pl-1"/></a>
           <a href="#" className="rounded-full bg-orange-500 w-9 h-9"><Icon.Instagram className="w-8 h-8 pt-1 pl-1"/></a>
         </div>
       </div>
 
      </div> 
      {/* bungkus */}
     </footer>
        </>
    )
}
export default Footer
import * as Icon from 'react-feather'
import { Link } from 'react-router-dom'
// gambar
import Logo from '../assets/images/logo.png'
import LogoText from '../assets/images/text-logo.png'

const Footer =()=>{
    return(
        <>
        <footer className="flex justify-center items-center w-full h-fit py-6 sm:h-fit sm:py-12 bg-[#F8F8F8]">
      <div className="flex flex-col w-5/6 gap-4 sm:gap-0">

        <div className="flex flex-col sm:flex-row gap-10 sm:gap-20">
          <div className="flex flex-col gap-4 w-full sm:w-[21rem]">
            <div className="flex gap-4">
              <div>
                <img src={Logo}/>
              </div>
              <div>
                <img src={LogoText} />
              </div>
            </div>
            <p className="text-gray-500">
              Coffee Shop is a store that sells some good meals, and especially
              coffee. We provide high quality beans
            </p>
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
           <a href="#" className="rounded-full bg-slate-700 w-9 h-9"><Icon.Facebook className="w-8 h-8 pt-1"/></a>
           <a href="#" className="rounded-full bg-slate-700 w-9 h-9"><Icon.Twitter className="w-8 h-8 pt-1 pl-1"/></a>
           <a href="#" className="rounded-full bg-slate-700 w-9 h-9"><Icon.Instagram className="w-8 h-8 pt-1 pl-1"/></a>
         </div>
       </div>
        
      </div> 
      <p className="text-[#AFB5C0]" id="copyright">&copy;2020CoffeeStore</p>
      </div>
      {/* bungkus */}
     </footer>
        </>
    )
}
export default Footer
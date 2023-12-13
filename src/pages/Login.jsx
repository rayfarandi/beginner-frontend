const Login = ()=>{
    return(
<>
    <div className="flex flex-row">
        <div
          className="hidden sm:block sm:w-2/5 md:w-2/6 lg:w-1/4
          bg-[url(../media/bg-login.jpg)] w-1/4 bg-center bg-cover"
        ></div>
        
        <div className="flex lg:w-[75%] w-full flex-col gap-5">
          <div className="flex flex-row">
            <img src="../media/cup-coffe-icon.png" className=" flex pl-10 pt-10 lg:pl-12" alt="logo"/>
            <img src="../media/text-logo.png" className=" flex  pl-1 pt-10 lg:pl-1" alt="logo tulisan"/>
          </div>
         <div className="flex flex-col px-5">
          <h1 className="font-semibold text-[#8E6447] px-5">Login</h1>
          <h2 className="text-[14px] px-5 pt-3">Fill out the form correctly</h2>
          <label htmlFor="email"><h3 className="font-semibold px-5 pt-3">Email</h3></label>
                 <div className="flex mx-5 my-3 border-[1px] rounded">
                    <div className="w-[7%] flex justify-center">
                      <i data-feather="mail" className="w-4"></i>
                    </div>
                    <input type="email" name="email" className="w-[93%] py-1 pl-2" placeholder="Enter Your Email"/>
                </div>
            

            <div>
              <label htmlFor="password"><h3 className="font-semibold px-5 pt-3">Password</h3>
              </label>
                 <div className="flex mx-5 my-3 border-[1px] rounded">
                    <div className="w-[7%] flex justify-center">
                      <i data-feather="key" className="w-4"></i>
                    </div>
                    <input type="password" name="password" className="w-[90%] py-1 pl-2" placeholder="Enter Your Password"/>
                    <button className="lg:w-[3%] w-[7%] flex lg:px-1" type="button">
                      <i data-feather="eye" className="w-4"></i>
                    </button>
                  
                </div>
            </div>


            <div className="flex justify-end items-center mt-5 mr-5">
              <h1 className="text-gray-500 text-[13px]">Forgot Password? <a href="forgotpassword.html" className="text-orange-500">Forgot</a></h1>
          </div>

            <div className="flex justify-center py-3">
              <button className="w-[95%] bg-orange-500 py-2 hover:bg-orange-500/70" type="submit">Login</button>
            </div>
          



          <div className="flex justify-center mt-4">
            <h1 className="text-gray-500 text-[13px]">Or</h1>
            </div>

            <div className="flex justify-center items-center gap-5 my-5 mx-5">
            <button className="flex justify-center items-center gap-5 px-4 py-3 rounded shadow-md lg:w-[46%]">
                <img src="../media/google-logo.png" alt="google" className="w-5 h-5 object-contain"/>
                <h4 className="hidden lg:block">Google</h4>
            </button>
            <button className="flex justify-center items-center gap-5 px-4 py-3 rounded shadow-md lg:w-[46%]">
                <img src="/media/facebook-logo.png" alt="facebook" className="w-5 h-5 object-contain"/>
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
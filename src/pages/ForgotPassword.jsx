const ForgotPassword = ()=>{
    return(
        <>
        <div className="flex flex-row">
            <div className="flex lg:w-fit w-0">
            <img src="../media/bg-forgot-password.jpg" alt="gambar kiri" className="w-full h-[100%] object-contain" />
        </div>
        
        <div className="flex flex-1 lg:w-[75%] w-full flex-col gap-5">
          <div className="flex flex-row">
            <img src="../media/cup-coffe-icon.png" className=" flex pl-10 pt-10 lg:pl-12" alt="logo"/>
            <img src="../media/text-logo.png" className=" flex  pl-1 pt-10 lg:pl-1" alt="logo tulisan"/>
          </div>
         <div className="flex flex-col px-5">
          <h1 className="font-semibold text-[#8E6447] px-5">Login</h1>
          <h2 className="text-[14px] px-5 pt-3">Fill out the form correctly</h2>
          <div>
             <label htmlFor="email"><h3 className="font-semibold px-5 pt-3">Email</h3></label>
                <div className="flex mx-5 my-3 border-[1px] rounded">
                    <div className="w-[7%] flex justify-center">
                    <i data-feather="mail" className="w-4"></i>
                    </div>
             <input type="email" name="email" className="w-[93%] py-1 pl-2" placeholder="Enter Your Email"/>
                </div>
            </div>

                     

            <div className="flex justify-center py-3">
              <button className="w-[95%] bg-orange-500 py-2 hover:bg-orange-500/70" type="submit">Forgot Email</button>
            </div>
          



            </div>
        </div>
    </div>   
        </>
    )
    
}

export default ForgotPassword
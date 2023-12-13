const Login = ()=>{
    return(
<>
    <div className="flex flex-row">
        <div className="flex lg:w-[25%] w-0">
        <img src="assets/bg-login.jpg" alt="gambar bacground kiri" className="w-full h-[100%] object-contain"/>
        </div>
        <div className="flex lg:w-[75%] w-full flex-col gap-5">
          <div className="flex flex-row">
            <img src="./assets/cup-coffe-icon.png"  className=" flex pl-10 pt-10 lg:pl-12" alt="logo"/>
            <img src="/assets/text-logo.png" className=" flex  pl-1 pt-10 lg:pl-1" alt="logo tulisan"/>
          </div>
         <div className="flex flex-col px-5">
          <h1 className="font-semibold text-[#8E6447] px-5">Login</h1>
          <h2 className="text-[14px] px-5 pt-3">Fill out the form correctly</h2>
          </div>

        </div>          
    </div>
</>

    )
}
export default Login
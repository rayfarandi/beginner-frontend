import  * as Icon from 'react-feather'
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

import KuponMother from '../assets/images/motherdaycupon.png'
import KuponFather from '../assets/images/fatherdaycupon.png'
import React, { useEffect, useState } from 'react';
import axios from "axios"
import ProductCard from '../components/ProductCard'
import PageNavigation from '../components/PageNavigation'



const CheckBox = ({label, name, value}) => {
    return (
        <div className="flex gap-2 sm:gap-3">
        <inp type="checkbox" name={name} value={value}/>
        <label htmlFor={value} className="text-xs sm:text-sm">{label}</label>
      </div>
    )
  }
  
  const FilterProduct = ({ filterBy }) => {
    const [category, setCategory] = useState([
      {
        label: "Favorite Product",
        value: "best_seller",
        name: "category"
      },
      {
        label: "Coffee",
        value: "coffee",
        name: "category"
      },
      {
        label: "Non Coffee",
        value: "non coffee",
        name: "category"
      },
      {
        label: "Foods",
        value: "foods",
        name: "category"
      },
      {
        label: "Add-On",
        value: "add on",
        name: "category"
      }
    ])
  
    const [sortBy, setSortBy] = useState([
      
      {
        label: "Latest Products",
        value: "createdAt",
        name: "sortBy"
      },
      {
        label: "Name",
        value: "name",
        name: "sortBy"
      },
      {
        label: "Cheap",
        value: "basePrice",
        name: "sortBy"
      },
    ])
  
    return (
      <div className="flex flex-col gap-3 text-xs">
        <h4 className="font-semibold text-xs sm:text-sm">{filterBy}</h4>
        {filterBy === "Category" ? 
          category.map((item, index) => (
            <CheckBox key={index}
            label={item.label}
            value={item.value}
            name={item.name}
            />
          ))
        : sortBy.map((item, index) => (
          <CheckBox key={index}
          label={item.label}
          value={item.value}
          name={item.name}
          />
        ))
        }
      </div>
    );
  };
  
  const Filter = ({tampilan, handleFilter}) => {
      return (
          <form onSubmit={handleFilter} className={`flex flex-col gap-4 ${tampilan? "bg-black p-4 text-white rounded-xl" : ''}`}>
          <div className="flex justify-between">
            <h4 className="font-semibold text-xs sm:text-sm">Filter</h4>
            <button
              className="font-semibold text-xs sm:text-sm active:scale-95 transition-all"
              type="reset"
            >
              Reset Filter
            </button>
          </div>
  
          {!tampilan ?
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-sm" htmlFor="search-product">
              Search
            </label>
            <input
              name="searchKey"
              className="rounded text-xs p-2 outline-none text-black"
              id="search-product"
              type="text"
              placeholder="Search Your Product"
            />
          </div> : ''}
          
          <FilterProduct filterBy="Category"/>
          <FilterProduct filterBy="SortBy"/>
  
          
  
          <button
            className="bg-slate-700 rounded p-2 text-xs text-black font-semibold active:scale-95 transition-all"
            type="submit"
          >
            Apply Filter
          </button>
        </form>
      )
  } 



const ProductProduct = () => {



  const [products, setProducts] = useState([])
  const [pageInfo, setPageInfo] = useState(null)
  const [activePage, setActivePage] = useState(1)
  


  const getProducts = async (page) => {
    try {
      

      if (page === "next" && pageInfo && pageInfo.nextPage) {
        res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/products?page=${pageInfo.nextPage}`)
      } else {
        res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/products?page=${page}`)
      }

      setPageInfo(res.data.pageInfo)
      setProducts(res.data.results)
      setActivePage(page)
    } catch (error) {
      console.error('Error fetching data:', error)
      alert('No data found')
    }
    
  }

//   useEffect(() => {
//     getProducts(1) 
//   }, [])


  

  return (
    <>
      <div className="flex flex-wrap justify-center gap-x-4 sm:gap-x-20 gap-y-44 mb-48 max-w-xl">
        {products && products.map((item, index) => (
          <ProductCard
            key={String(index)}
            id={item.id}
            name={item.name}
            isFlashSale={true}
            description={item.description}
            price={item.basePrice}
            image={item.image}
            ratingProduct={item.rating}
          />
        ))}

        {/* pagination */}
        {pageInfo && (
          <div className="flex gap-2">
            {[...Array(pageInfo.totalPage).keys()].map((pageNumber) => (
              <button
                key={pageNumber + 1}
                type="button"
                onClick={() => getProducts(pageNumber + 1)}
                className={`flex justify-center items-center ${
                  activePage === pageNumber + 1 ? 'bg-[#FF8906] text-xs sm:text-sm' : 'text-[#A0A3BD] bg-[#E8E8E8]'
                } rounded-full h-6 w-6 sm:h-8 sm:w-8`}
              >
                {pageNumber + 1}
              </button>
            ))}
            <button
              type="button"
              onClick={() => getProducts('next')}
              className={`flex justify-center items-center bg-[#FF8906] rounded-full h-6 w-6 sm:h-8 sm:w-8`}
            >
              <Icon.ArrowRight className="text-white h-4 sm:h-auto" />
            </button>
          </div>
        )}
      </div>
    </>
  )
}


const Product=()=>{
    

    const [dataProducts, setDataProducts] = useState()
    const [totalPage, setTotalPage] = useState()
    const [nextPage, setNextPage] = useState()
    const [queryParameter, setQueryParameter] = useState(null)
    const [errorMessage, setErrorMessage] = useState()
    const [error, setError] = useState(false)
    const [disable, setDisable] = useState(false)
  
    const listAllProducts = async () => {
      try {
        const {data} = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/products`)
        console.log(data)
        setTotalPage(data.pageInfo.totalPage)
        setNextPage(data.pageInfo.nextPage)
        setDataProducts(data.results)
      } catch (error) {
        console.log(error)
      }
    }
  
  
    const searchProduct = async (event) => {
      event.preventDefault()
      
  
  
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
       
      const searchKey = event.target.searchKey
      const category = event.target.category && Array.from(event.target.category)
      const sortBy = event.target.sortBy && Array.from(event.target.sortBy)
      
      const form = new URLSearchParams()
      if(searchKey){
        form.append("searchKey", searchKey.value)
      }
      
      category && category.map((checkBox) => {
        if (checkBox.checked) {
          form.append("category", checkBox.value);
        }
      });
      
      sortBy && sortBy.map((checkBox) => {
        if (checkBox.checked) {
          form.append("sortBy", checkBox.value);
        }
      });
      
      const queryParams = form.toString()
      
      try {
        const {data} = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/products?${queryParams}`)
        console.log(data)
        setTotalPage(data.pageInfo.totalPage)
        setNextPage(data.pageInfo.nextPage)
        setDataProducts(data.results)
        setQueryParameter(queryParams)
        if(data.pageInfo.nextPage === null){
          setDisable(true)
        }else{
          setDisable(false)
        }
        event.target.searchKey.value = ''
      } catch (error) {
        console.log(error.response.data.message)
        setErrorMessage(error.response.data.message)
        setError(true)
        setDataProducts(null)
      }
    }
  
    const pageNavigator = async (page) => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
  
      try {
        if(queryParameter){
          const {data} = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/products?${queryParameter}&page=${page}`)
          console.log(data)
          setDataProducts(data.results)
          setNextPage(data.pageInfo.nextPage)
          if(data.pageInfo.nextPage === null){
            setDisable(true)
          }else{
            setDisable(false)
          }
        }else{
          const {data} = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/products?page=${page}`)
          console.log(data)
          setDataProducts(data.results)
          setNextPage(data.pageInfo.nextPage)
          if(data.pageInfo.nextPage === null){
            setDisable(true)
          }else{
            setDisable(false)
          }
        }
      } catch (error) {
        console.log(error)
      }
    }
  
  
    const nextPageNavigator = async () => {
      window.scrollTo({                        
        top: 0,
        left: 0,
        behavior: "smooth",
      });
      
      try {
        if(queryParameter){
          const {data} = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/products?${queryParameter}&page=${nextPage}`)
          console.log(data)
          setDataProducts(data.results)
          setNextPage(data.pageInfo.nextPage)
          if(data.pageInfo.nextPage === null){
            setDisable(true)
          }else{
            setDisable(false)
          }
        }else{
          const {data} = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/products?page=${nextPage}`)
          setDataProducts(data.results)
          setNextPage(data.pageInfo.nextPage)
          if(data.pageInfo.nextPage === null){
            setDisable(true)
          }else{
            setDisable(false)
          }
        }
      } catch (error) {
        console.log(error)
      }
    }
  
  
  
    useEffect(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
  
    
  
      listAllProducts();
    }, [])

    return(
        <>
        <body className="flex flex-col items-center">
        <Navbar bg='#000000'/>

        {/* header dan kupon  */}
            <header className="hidden sm:flex items-center bg-[url('../assets/images/bg-product-list.png')] bg-center w-full h-72 mt-12">
            <h1 className="text-white text-5xl ml-28">
                We Provide Good Coffee and Healthy <br />
                Meals
            </h1>
            </header>

            

            <section className="flex flex-col w-full items-center gap-4 lg:pt-0 pt-6 lg:overflow-x-hidden">
            <div className="w-5/6 flex justify-between">
                <h1 className="text-2xl sm:text-3xl">Today <span className="text-[#8E6447]">Promo</span></h1>

                <div className="hidden sm:flex gap-2">
                <div className="flex justify-center items-center bg-[#E8E8E8] rounded-full h-8 w-8">
                    <Icon.ArrowLeft className="h-5" />
                </div>

                <div className="flex justify-center items-center bg-[#FF8906] rounded-full h-8 w-8">
                    <Icon.ArrowRight className="h-5" />
                </div>
                </div>
            </div>
            {/* kupon  */}
            <div className="w-fit flex gap-10">
            <div className="w-fit flex gap-10 ">
                <div className="flex bg-[#88B788] rounded-2xl items-center pl-2 w-64 sm:w-72 h-20 sm:h-auto">
                <div>
                    <img className="h-20 sm:h-24 translate-y-1" src={KuponMother} alt="" />
                </div>
                <div className="flex flex-col gap-1">
                    <div>
                    <h5 className="text-xs sm:text-sm font-bold">HAPPY MOTHERS DAY!</h5>
                    <p className="text-[0.7rem] sm:text-xs">
                        Get one of our favorite menu <br />
                        for free!
                    </p>
                    </div>
                    <p className="text-[0.7rem] sm:text-xs text-white">Klaim Kupon</p>
                </div>
                </div>

                <div className="flex bg-[#88B788] rounded-2xl items-center pl-2 w-64 sm:w-72 h-20 sm:h-auto">
                <div>
                    <img className="h-20 sm:h-24 translate-y-1" src={KuponMother} alt="" />
                </div>
                <div className="flex flex-col gap-1">
                    <div>
                    <h5 className="text-xs sm:text-sm font-bold">HAPPY MOTHERS DAY!</h5>
                    <p className="text-[0.7rem] sm:text-xs">
                        Get one of our favorite menu <br />
                        for free!
                    </p>
                    </div>
                    <p className="text-[0.7rem] sm:text-xs text-white">Klaim Kupon</p>
                </div>
                </div>

                <div className="flex bg-[#88B788] rounded-2xl items-center pl-2 w-64 sm:w-72 h-20 sm:h-auto">
                <div>
                    <img className="h-20 sm:h-24 translate-y-1" src={KuponMother} alt="" />
                </div>
                <div className="flex flex-col gap-1">
                    <div>
                    <h5 className="text-xs sm:text-sm font-bold">HAPPY MOTHERS DAY!</h5>
                    <p className="text-[0.7rem] sm:text-xs">
                        Get one of our favorite menu <br />
                        for free!
                    </p>
                    </div>
                    <p className="text-[0.7rem] sm:text-xs text-white">Klaim Kupon</p>
                </div>
                </div>

                <div className="flex bg-[#88B788] rounded-2xl items-center pl-2 w-64 sm:w-72 h-20 sm:h-auto">
                <div>
                    <img className="h-20 sm:h-24 translate-y-1" src={KuponMother} alt="" />
                </div>
                <div className="flex flex-col gap-1">
                    <div>
                    <h5 className="text-xs sm:text-sm font-bold">HAPPY MOTHERS DAY!</h5>
                    <p className="text-[0.7rem] sm:text-xs">
                        Get one of our favorite menu <br />
                        for free!
                    </p>
                    </div>
                    <p className="text-[0.7rem] sm:text-xs text-white">Klaim Kupon</p>
                </div>
                </div>

                <div className="flex bg-[#F5C361]  rounded-2xl items-center pl-2 w-64 sm:w-72 h-20 sm:h-auto">
                <div>
                    <img className="h-20 sm:h-24 translate-y-1" src={KuponFather} alt="" />
                </div>
                <div className="flex flex-col gap-3">
                    <h5 className="text-xs sm:text-sm font-bold">Get a cup of coffee for free <br/> on sunday morning</h5>
                    <p className="text-[0.7rem] sm:text-xs">Only at 7 to 9 AM</p>
                </div>
                </div>
            </div>
            </div>
            {/* kupon  */}
            
            </section>
            <div className="w-5/6">
                <div className="flex gap-1">
                <div className="bg-[#FF8906] w-8 h-2 rounded-md"></div>
                <div className="bg-[#DDE0E4] w-2 h-2 rounded-md"></div>
                <div className="bg-[#DDE0E4] w-2 h-2 rounded-md"></div>
                <div className="bg-[#DDE0E4] w-2 h-2 rounded-md"></div>
                </div>
            </div>
        
            {/* conten product  */}
            <div className="w-5/6 flex flex-col gap-3">
                <h1 className="text-3xl">Our <span className="SPAN">Product</span></h1>
                <div className="flex  flex-col  gap-3 lg:flex-row"> {/* bungkus tes  */}
                {/* pencarian  */}
                <div className="w-full px-2 sm:px-0 flex justify-center gap-4">
          <aside className="hidden sm:block w-1/4 bg-black rounded-xl h-fit p-4 text-white">
            <Filter handleFilter={searchProduct}/>
          </aside>

          <main className="flex flex-col items-end sm:flex-1">
            <div className="relative flex justify-center w-full">
              <div className={`absolute top-10 py-2 px-4bg-red-200 border border-red-500 text-red-900 px-10  text-bold rounded text-sm flex justify-center items-center font-bold ${error ? 'flex' : 'hidden'}`}>
                <h1>{errorMessage}</h1>
              </div>

              <div className=" flex flex-wrap justify-center gap-x-4 sm:gap-x-20 gap-y-48 sm:gap-y-44 mb-48 max-w-xl">
                { dataProducts &&
                  dataProducts.map((item,index) => (
                      (<ProductCard
                        key={String(index)}
                        id={item.id}
                        name={item.name}
                        isFlashSale={true}
                        description={item.description}
                        price={item.basePrice}
                        image={item.image}
                        ratingProduct={item.rating}
                      />)
                  ))
                }
              </div>
            </div>

            {
            <PageNavigation totalPage={totalPage} pageHandle={pageNavigator} nextPageHandle={nextPageNavigator} handleDisable={disable}/>
            }
            
          </main>
        </div>
                
                {/* list card */}
             </div> {/* bungkus tes  */}


            </div>{/* conten product  */}
        <Footer />
        </body>
        </>
    )
}
export default Product
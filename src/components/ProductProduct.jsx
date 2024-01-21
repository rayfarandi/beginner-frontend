import axios from "axios"
import React, { useEffect, useState } from "react"
import * as Icon from "react-feather"
import ProductCard from "./ProductCard"




const ProductProduct = () => {
  const [products, setProducts] = useState([])
  const [pageInfo, setPageInfo] = useState(null)
  const [activePage, setActivePage] = useState(1)


  const getProducts = async (page) => {
    try {
      let res
      if (page === "next" && pageInfo && pageInfo.nextPage) {
        res = await axios.get(`http://localhost:8888/products?page=${pageInfo.nextPage}`)
      } else {
        res = await axios.get(`http://localhost:8888/products?page=${page}`)
      }

      setPageInfo(res.data.pageInfo)
      setProducts(res.data.results)
      setActivePage(page)
    } catch (error) {
      console.error('Error fetching data:', error)
      alert('No data found')
    }
  }

  useEffect(() => {
    getProducts(1) 
  }, [])

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

export default ProductProduct

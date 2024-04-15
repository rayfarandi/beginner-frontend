const ProductSkeleton = ({ className }) => {
  return (
    <div className={`animate-pulse flex space-x-4 ${className}`}>
      <div className="flex flex-col gap-4 w-full">
      <div className="skeleton h-32 w-full"></div>
      <div className="skeleton h-4 w-3/4"></div> 
      <div className="skeleton h-4 w-2/3"></div> 
      <div className="skeleton h-4 w-1/2"></div> 
    </div>
    </div>
  )
}

export default ProductSkeleton;
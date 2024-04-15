const ProductSkeleton = () => {
    return (
      <div className="animate-pulse flex space-x-4">
        <div className="flex flex-col gap-4 w-52">
        <div className="skeleton h-32 w-full"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
      </div>
    )
  }

export default ProductSkeleton
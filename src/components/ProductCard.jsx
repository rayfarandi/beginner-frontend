import * as Icon from 'react-feather'


const ProductCard =({name,description,price,image})=>{
    return(
        <div className='flex flex-col justify-center items-center flex-1'>
            <div className='bg-gray-50 p-2 rounded h-60 flex'><img className='flex-1 object-cover' src={image}  alt="product" /></div>
            <div className="shadow-md bg-white rounded p-3 mx-5 -mt-10 flex flex-col gap-5 flex-1">
                <div className='text-3xl font-bold'>{name}</div>
                <div className='flex-1'>{description}</div>
                <div className='text-2xl font-bold text-orange-500'>Rp.{price.toLocaleString('id')}</div>
                <div className='flex gap-5'>
                <button className='h-10 rounded bg-orange-500 flex-1 border-2 border-orange-500'>Detail</button>
                <button className='h-10 rounded px-5 border-2 bg-transparent border-orange-500 text-orange-500'><Icon.ShoppingCart/></button>
                </div>
            </div>
        </div>
    )
}
export default ProductCard
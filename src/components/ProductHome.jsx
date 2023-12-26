import React from "react";
import ProductCard from "./ProductCard";
// gambar
import cofeeA from '../assets/images/home-product1.jpg'
import latte from '../assets/images/home-product4.png'
import hazelnut from '../assets/images/home-product2.jpg'
import cofee from '../assets/images/cofee.jpg'

const ProductHome =()=>{
    const [ProductData, setData]= React.useState([
        {
            name: "Cappucinno",
            isFlashSale: true,
            description : "We provide high quality beans, good taste, and healthy meals made by love just for you. Start your day with us for a bigger smile!",
            price: 20000,
            image: cofeeA
        },
        {
            name: "Late",
            description : "a milk coffee that is a made up of one or two shots of espresso, steamed milk and a final, thin layer of frothed milk on top.",
            price: 25000,
            image: latte 
        },
        {
            name: "Cofee",
            description : "We provide high quality beans, good taste, and healthy meals made by love just for you. Start your day with us for a bigger smile!!",
            price: 23000,
            image: cofee 
        },
        {
            name: "Hazelnut latte",
            description : "Sirup ini memberikan cita rasa kacang hazelnut yang khas dan aroma yang menyenangkan.",
            price: 35000,
            image: hazelnut 
        }
    ])


    return(
        <>
        <div className="flex flex-col items-center gap-2 sm:gap-4">
                <h1 className="text-2xl text-center sm:text-5xl font-medium sm:mb-2 px-4">Here is Peoples <span className="text-[#8E6447]">Favorite</span></h1>
                <hr className="border-orange-500 border-2 sm:border-4 w-16"/>
                <h2 className="text-[#4f5665] text-xs sm:text-base text-center px-4">Lets choose and have a bit taste of poeples favorite. It might be yours too!</h2>
            </div>
        <div className="flex sm:flex-row flex-col my-5 gap-2 sm:gap-4">
                

            {ProductData.map((item, index)=>(
                <ProductCard 
                key={String(index)} 
                name={item.name}
                isFlashSale={item.isFlashSale} 
                description={item.description} 
                price={item.price} 
                image={item.image} />
            ))}
            </div>
        </>
    )
}
export default ProductHome
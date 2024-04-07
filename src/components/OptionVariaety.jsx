import { setShipping } from "../redux/reducers/deliveryShipping";
import { useDispatch, useSelector } from "react-redux";

export const OptionVariety = ({option, onChange, size, variant, variantsProduct}) => {
    const sizes = ["Regular", "Medium", "Large"]
    const shippingMethod = ["Dine In", "Door Delivery", "Pick Up"]
  
    const deliveryShipping = useSelector(state => state.deliveryShipping.shipping)
  
    return (
        <div className="flex flex-col gap-1">
        <h4 className={`font-semibold ${option == "Delivery" ? 'text-xs sm:text-sm' : 'text-[0.7rem] sm:text-xs'}`}>{option}</h4>
        <div className="flex justify-between gap-2 sm:gap-4">
        {option == "Choose Size" ?(
          sizes.map((value, index) => (
            <label key={index} type="button" className={`${value == size ? 'border-primary' : 'border-[#E8E8E8]'} flex-1 flex justify-center border  text-[0.65rem] sm:text-xs text-[#4F5665] focus:text-black  rounded py-1 sm:py-1.5 transition-all`}>
            {value}
            <input onChange={onChange}  type="radio" name={"size"} value={value} className="hidden"/>
          </label>
          ))
        ) : option == "Hot/Ice?" ? (
          variantsProduct.map((item, index) => (
            <label key={index} type="button" className={`${item.name == variant ? 'border-primary' : 'border-[#E8E8E8]'} flex-1 flex justify-center border  text-[0.65rem] sm:text-xs text-[#4F5665] focus:text-black  rounded py-1 sm:py-1.5 transition-all`}>
            {item.name}
            <input onChange={onChange}  type="radio" name={"variant"} value={item.name} className="hidden"/>
          </label>
        ))
        ) :
        shippingMethod.map((value, index) => (
          <label key={index} type="button" className={`${value == deliveryShipping ? 'border-primary' : 'border-[#E8E8E8]'} flex-1 flex justify-center border border-[#E8E8E8]  text-[0.65rem] sm:text-xs text-[#4F5665] focus:text-black  rounded py-1 sm:py-1.5 transition-all`}>
          {value}
          <input onChange={onChange}  type="radio" name={"delivery"} value={value} className="hidden"/>
        </label>
        ))
        }
        </div>
      </div>
    )
  }

  export default OptionVariety
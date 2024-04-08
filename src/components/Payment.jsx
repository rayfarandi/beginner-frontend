import BRI from "../assets/images/BRI.png"
import DANA from "../assets/images/DANA.png"
import BCA from "../assets/images/BCA.png"
import gopay from "../assets/images/gopay.png"
import ovo from "../assets/images/ovo.png"
import PayPal from "../assets/images/paypal.png"

import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { resetProducts } from "../redux/reducers/products"
import { resetTotal, setTotal } from "../redux/reducers/totalOrder"
import { resetShipping } from "../redux/reducers/deliveryShipping"
import { resetSizes } from "../redux/reducers/sizeProducts"
import { resetVariants } from "../redux/reducers/variantProducts"
import { resetQuantities } from "../redux/reducers/quantityProducts"
import { resetId } from "../redux/reducers/productsId"

import { useState, useEffect } from "react"

const PaymentList = ({list, idr}) => {
  return (
    <div className="flex justify-between">
      <h5 className="text-white font-semibold text-xs sm:text-base">
        {list}
      </h5>
      <h5 className="font-semibold text-xs sm:text-base">Idr.{idr.toLocaleString('id')}</h5>
    </div>
  );
};

const Payment = () => {
  const token = useSelector(state => state.auth.token)

  const productId = useSelector(state => state.productsId.id)
  const sizeProduct = useSelector(state => state.sizeProducts.sizes)
  const variantProduct = useSelector(state => state.variantProducts.variants)
  const quantityProduct = useSelector(state => state.quantityProducts.quantities)
  const shipping = useSelector(state => state.deliveryShipping.shipping)

  const totalOrder = useSelector(state => state.totalOrder.total).reduce((prev, curr) => prev + curr, 0)
  // const tax = totalOrder * 0.010
  const tax = totalOrder * 0


  const navigate = useNavigate()
  const dispatch = useDispatch()

  const checkoutAction = async (event) => {
    event.preventDefault();

    const form = new URLSearchParams();
    form.append("productId", productId)
    form.append("sizeProduct", sizeProduct)
    form.append("variantProduct", variantProduct)
    form.append("quantityProduct", quantityProduct)
    form.append("deliveryShipping", shipping)

    try {
      const {data} = await axios.post(`http://localhost:8888/checkout`, form.toString(), {
        headers: {
          'Authorization' : `Bearer ${token}`
        }
      })

      console.log(data)
      console.log(data.results.id)
  
      dispatch(resetProducts())
      dispatch(resetTotal())
      dispatch(resetShipping())
      dispatch(resetSizes())
      dispatch(resetVariants())
      dispatch(resetQuantities())
      dispatch(resetId())
      
      navigate('/history-order')

    } catch (error) {
      console.log(error)
    }
  }

    return (
        <div className="flex-1 h-fit flex flex-col">
        <div className="flex pt-1 h-12 font-semibold">
          <h4>Total</h4>
        </div>
        <div className="payment-summary bg-[#E8E8E84D] p-3 text-sm flex flex-col gap-4">
            <PaymentList list="order" idr={totalOrder}/>
            <PaymentList list="Delivery" idr={5000}/>
            <PaymentList list="Tax" idr={tax}/>

          <hr/>

          <PaymentList list="Sub Total" idr={totalOrder + 5000 + tax}/>

        <button onClick={checkoutAction} className="bg-gradient-to-b from-primary to-black text-white w-full rounded-md text-xs sm:text-sm py-1.5 active:scale-95 transition-all flex justify-center">Checkout</button>
          <p className="text-xs text-white">We Accept</p>

          <div className="flex flex-wrap justify-between gap-2 items-center">
            <div>
              <img src={BRI} />
            </div>

            <div>
              <img src={DANA} />
            </div>

            <div>
              <img src={BCA} />
            </div>

            <div>
              <img src={gopay} />
            </div>

            <div>
              <img src={ovo} />
            </div>

            <div>
              <img src={PayPal} />
            </div>
          </div>

          <p className="text-xs text-white">*Get Discount if you pay with Bank Central Asia</p>
        </div>
      </div>
    )
}

export default Payment
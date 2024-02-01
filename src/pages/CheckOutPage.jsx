 import React from 'react'
 import { ShoppingCart } from '../components/ShoppingCart'
import { useSelector } from 'react-redux'
import axios from 'axios'


 
 
 function CheckOutPage() {


  const { cart } = useSelector(state => state.shoppingCart)



   const purchase = async () => {
    try {
        const requestBody = {
            products: cart.map(item => ({
                productId: item.product._id,
                quantity: item.quantity
            })),
        }
  
        const res = await axios.post('https://js2-ecommerce-api.vercel.app/api/orders', requestBody)
        
        console.log(res.data)
    } catch (error) {
        console.error(error.message)
    }
  }

   return (
     <div>
         <ShoppingCart />
         <button onClick={purchase} className="bg-red-500 text-white py-1 px-5 rounded-lg">Buy</button>
     </div>
   )
 }

 export default CheckOutPage

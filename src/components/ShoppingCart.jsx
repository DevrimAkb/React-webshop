import React from 'react'
import { CartItem } from './CartItem'
import { useSelector } from 'react-redux'

export const ShoppingCart = () => {

    const { cart, totalAmount } = useSelector(state => state.shoppingCart)


  return (
    <div className="text-black">
        <div>
            { cart.map(item => (
                <CartItem item={item} />
            ))}
        </div>
        <hr className="border-black-600"/>
        <div className="flex justify-between items-center p-2">
            <p>Total:</p>
            <div>
                <button className="bg-red-500 text-white py-1 px-5 rounded-lg hover:bg-red-700">Checkout</button>
            </div>
        </div>
    </div>
  )
}
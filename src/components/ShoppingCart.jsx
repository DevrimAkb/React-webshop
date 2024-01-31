import React from 'react'
import { CartItem } from './CartItem'
import { useSelector } from 'react-redux'

export const ShoppingCart = () => {

    const { cart, totalPrice } = useSelector(state => state.shoppingCart)


  return (
    <div className="text-black">
        <div>
            { cart.length < 1 && (
                <div className="p-2 text-center">
                    <p>Your cart is empty</p>
                </div>
            )}
            { cart.map(item => (
                <CartItem item={item} />
            ))}
        </div>
        <hr className="border-black-600"/>
        <div className="flex justify-between items-center p-2">
            <p>Total: { totalPrice }</p>
            <div>
                <Link to="/checkout" className="bg-red-500 text-white py-1 px-5 rounded-lg hover:bg-red-700">Checkout</Link>
            </div>
        </div>
    </div>
  )
}
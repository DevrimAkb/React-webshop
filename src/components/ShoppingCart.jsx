import React from 'react'
import { CartItem } from './CartItem'

const cartItems = [
    {
        product: {
            _id: "658af3e7d711cabe3c94045e",
            name: "HP Pavilion 15-eh3004no",
            price: 11999,
            description: "Den bärbara Pavilion-datorn på 15,6 tum ger mer prestanda i en mindre profil. Få mer gjort med en förstklassig AMD-processor . Arbeta på språng tack vare datorns kompakta design och batteritid med HP FastCharge . Upplev en exceptionell underhållning med ljud från B&O som levererar omsvepande ljud medan det stora skärm till chassi-förhållandet (STBR) låter dig se mer.",
            category: "laptop",
            images: ["https://www.komplett.se/img/p/1200/1247160.jpg"]

        },
        quantity: 1
    },
]

export const ShoppingCart = () => {
  return (
    <div className="text-black">
        <div className="h-40">
            { cartItems.map(item => (
                <CartItem />
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
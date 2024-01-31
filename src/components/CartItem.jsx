import React from 'react'
import { FaTrash } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { removeOne, addToCart, removeItem } from '../store/features/shoppingCart/ShoppingCartSlice';

export const CartItem = ({ item }) => {

  const dispatch = useDispatch()

  const removeOneFromCart = () => {
    dispatch(removeOne(item.product._id))
  }

  const addOneToCart = () => {
    dispatch(addToCart(item.product))
  }

  const deleteProduct = () => {
    dispatch(removeItem(item.product._id))
  }

  return (
    <div className="flex justify-between items-center p-2">
        <div className="flex items-center">
            <img src={item.product.images[0]} alt="product" className="w-20" />
            <div>
                <p className="truncate">{item.product.name}</p>
                <p className="text-sm">{item.quantity} x {item.product.price}</p>
            </div>
        </div>
        <div className="flex gap-4">
            <div className="flex gap-0.5">
            <button onClick={removeOneFromCart} className="bg-slate-500 text-white p-1 rounded-s-md hover:bg-slate-800"><FaMinus /></button>
            <button onClick={addOneToCart} className="bg-slate-500 text-white p-1 rounded-e-md hover:bg-slate-800"><FaPlus /></button>
            </div>
                <button onClick={deleteProduct} className="p-1 group"><FaTrash className="text-red-500 group-hover:text-red-700" /></button>
        </div>
    </div>
  )
}

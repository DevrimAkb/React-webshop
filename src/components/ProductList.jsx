import React from 'react'
import { ProductCard } from './ProductCard'

export const ProductList = ({ products }) => {
  return (
    <div>
        {products.map(product => (
            <ProductCard key={product._id} product={product} />
        ))}
    </div>
  )
}

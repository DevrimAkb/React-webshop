import React from 'react'
import { ProductCard } from './ProductCard'

export const ProductList = ({ products }) => {
  return (
    <div className="shop">
        {products.map(product => (
            <ProductCard key={product._id} product={product} />
        ))}
    </div>
  )
}

ProductList.Skeleton = () => {
    return (
        <div className="shop">
            <div className="skeleton">test</div>
            <div className="skeleton"></div>
        </div>
    )
}

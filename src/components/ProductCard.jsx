import React from 'react'
import { Link } from 'react-router-dom'

export const ProductCard = ({ product }) => {
  return (
    <div className='product'>
        <div className="image-container">
            <img src={product.images[0]} alt={product.images} />
        </div>
        <p className='product-name'>{ product.name }</p>
        <p className='product-price'>Pris: { product.price } :-</p>
        <p className='product-description'>{ product.description.slice(0, 50) }...</p>
        
        <Link to={`/productDetails/${product._id}`}>
        <button className='btn see-more-btn'>Läs mer</button>
         
        </Link>
    </div>
  )
}

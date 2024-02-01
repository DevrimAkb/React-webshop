import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Product } from '../components/Product'

function Shop() {
  const [products, setProducts] = useState([])

  useEffect(() => {

    const getProducts = async () => {
      const res = await axios.get('https://js2-ecommerce-api.vercel.app/api/products')
      setProducts(res.data)
    }
    getProducts()

  }, [])
  return (
    <div className='shop'>
      {
        products.map(product => (
          <Product key={product._id} product={product}/>
        ))
      }
    </div>
  )
}

export default Shop
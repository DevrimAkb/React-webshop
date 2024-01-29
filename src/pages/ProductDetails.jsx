import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function ProductDetails() {

    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const { id } = useParams()

     useEffect(() => {
        setLoading(true)

        const getProduct = async () => {
        try {
          const res = await axios.get(`https://js2-ecommerce-api.vercel.app/api/products/${id}`)
          setProduct(res.data)
          setLoading(false)
        } catch (error) {
          setError('Something went wrong')
          console.log(err.message)
        }
      }
         getProduct()
       }, [])
  return (
    <div>
    { loading && <p>Loading..</p>}
    {
        product && (
            <div className="details">
                <div className="image-container__details">
                    <img src={product.images[0]} alt={product.images}/>
                </div>
                <div className="small-image-container__details">
                <img src={product.images[1]} alt={product.images}/>
                <img src={product.images[2]} alt={product.images}/>
                <img src={product.images[3]} alt={product.images}/>
                </div>
                {product?.name}
                
            </div>
        )
    }
    </div>
 
  )
}

export default ProductDetails
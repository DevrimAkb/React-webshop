import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { MdAddShoppingCart } from "react-icons/md";

function ProductDetails() {

    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const { id } = useParams()

    // const [activeImg, setActiveImg] = useState(0)

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
                <div className="details-description">
                  <h1>{ product.name }</h1>
                  <p>{ product.description}</p>
                  <div className="details-price">
                  <p>Price: {product.price}</p>
                  <button className="cart-btn">Add to cart 
                  <MdAddShoppingCart />
                  </button>
                  </div>

                </div>
            </div>
            
        )
    }
                    {/* <div className="small-image-container__details">
                  {product.images.map((image, index) => (
                    <div key={index} onClick={() => setActiveImg(index)}>
                      <img src={image} alt="images" />
                    </div>
                  ))}
                </div> */}
    </div>
 
  )
}

export default ProductDetails
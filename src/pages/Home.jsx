import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../store/features/products/productsSlice'
import { ProductList } from '../components/ProductList'

function Home() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [])

  const { products, loading, error } = useSelector(state => state.productList)

  if (error) return (
    <div>
      <p>{error}</p>
    </div>
  )
  return (
    <div>
      <div className='header'>
        <h2 className='header-title'>Osannolikt kraftfull</h2>
        <div className="text-container">
          <p className="header-text">Upplev iPhone 15 Pro med obegränsad surf.</p>
        </div>
        <p className="header-price">699 kr/mån</p>
        <img src="/banner.jpg" alt="banner" />
        <button className='header-btn text-2xl absolute top-96 left-80'>Köp nu</button>
      </div>
      {
        loading
          ? <ProductList.Skeleton />
          : <ProductList products={products} />
      }
    </div>
  )
}

export default Home
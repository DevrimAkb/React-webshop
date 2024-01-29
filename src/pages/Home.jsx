import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../store/features/products/productsSlice'
import { ProductList } from '../components/ProductList'

function Home() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [])

  const { products, loading, error} = useSelector(state => state.productList)

  if(error) return (
    <div>
      <p>{error}</p>
    </div>
  )
  return (
    <div>
      <ProductList.Skeleton />
      <ProductList products={products} />
    </div>
  )
}

export default Home
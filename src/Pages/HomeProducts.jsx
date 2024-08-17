import React, { useContext } from 'react'
import { ProductDetailsContext } from '../Context/Context'
import ProductsContainer from '../Components/ProductsContainer'

function HomeProducts() {
  const [productsData, setProductsData] = useContext(ProductDetailsContext)

  return (
    <ProductsContainer 
      data={productsData}
    />
  )
}

export default HomeProducts
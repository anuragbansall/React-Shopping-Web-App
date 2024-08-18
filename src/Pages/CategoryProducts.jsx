import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductsContainer from '../Components/ProductsContainer'
import { ProductDetailsContext } from '../Context/Context'

function CategoryProducts() {

  const {category} = useParams()

    const [productsData, setProductsData] = useContext(ProductDetailsContext)
    const categoryData = productsData.filter((el) => el.category === category)

  return (
      <ProductsContainer 
        data={categoryData}
      />
  )
}

export default CategoryProducts
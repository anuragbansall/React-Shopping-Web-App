import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { axiosInstance } from '../utils/Axios'
import ProductsContainer from '../Components/ProductsContainer'

function CategoryProducts() {

    const [categoryData, setcategoryData] = useState([])

    const {category} = useParams()
    const fetchCategoryProducts = () => {
      axiosInstance.get(`/products/category/${category}`)
      .then(data => setcategoryData(data.data))
    }

    useEffect(() => {
      fetchCategoryProducts()

      return () => {
        setcategoryData([])
      }

    }, [category])

  return (
      <ProductsContainer 
        data={categoryData}
      />
  )
}

export default CategoryProducts
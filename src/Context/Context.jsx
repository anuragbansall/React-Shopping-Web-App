import React, { createContext, useEffect, useState } from 'react'
import { axiosInstance } from '../utils/Axios'

export const ProductDetailsContext = createContext()

function Context({children}) {

const [productsData, setProductsData] = useState([])

  const getProductData = () => {
    try{
        axiosInstance.get("/products")
       .then(data => setProductsData(data.data)
    )
    }catch(err){
        console.error(err)
    }
  }
  useEffect(() => {
    getProductData()
    
  }, [])
  
  return (
    <ProductDetailsContext.Provider value={[productsData, setProductsData]}>
      {children}
    </ProductDetailsContext.Provider>
  )
}

export default Context
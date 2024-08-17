import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Components/Home'
import ProductDetails from '../Components/ProductDetails'
import HomeProducts from '../Pages/HomeProducts'
import CategoryProducts from '../Pages/CategoryProducts'

function Routing() {
  return (
    <Routes>
        <Route path="/" element={<Home />} > 
            <Route index element={<HomeProducts />} />
            <Route path="/categories/:category" element={<CategoryProducts />} /> 
        </Route>
        <Route path="/product-details/:id" element={<ProductDetails />} />
    </Routes>
  )
}

export default Routing
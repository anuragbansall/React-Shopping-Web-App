import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Components/Home'
import ProductDetails from '../Components/ProductDetails'
import HomeProducts from '../Pages/HomeProducts'
import CategoryProducts from '../Pages/CategoryProducts'
import CreateProduct from '../Components/CreateProduct'
import EditProduct from '../Components/EditProduct'

function Routing() {
  return (
    <Routes>
        <Route path="/" element={<Home />} > 
            <Route index element={<HomeProducts />} />
            <Route path="/categories/:category" element={<CategoryProducts />} /> 
        </Route>
        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path="/create-product" element={<CreateProduct />} />
        <Route path="/edit-product/:id" element={<EditProduct />} />
    </Routes>
  )
}

export default Routing
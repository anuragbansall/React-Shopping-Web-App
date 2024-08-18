import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Components/Home'
import ProductDetails from '../Components/ProductDetails'
import HomeProducts from '../Pages/HomeProducts'
import CategoryProducts from '../Pages/CategoryProducts'
import CreateProduct from '../Pages/CreateProduct'
import EditProduct from '../Pages/EditProduct'
import NotFound from '../Common/NotFound'

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
        <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default Routing
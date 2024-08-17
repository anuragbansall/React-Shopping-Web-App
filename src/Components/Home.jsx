import React from 'react'
import ProductsContainer from './ProductsContainer'
import NavBar from '../Common/NavBar'
import { Outlet } from 'react-router-dom'

function Home() {
  return (
    <div className="h-screen bg-zinc-100 flex">
        <NavBar />
        <div className="h-full py-8 px-8 grow overflow-y-auto overflow-x-hidden">
          <Outlet />
        </div>
    </div>
  )
}

export default Home
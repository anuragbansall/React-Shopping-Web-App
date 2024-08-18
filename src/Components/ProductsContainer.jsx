import React, { useContext, useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import LoadingAnimation from '../Common/LoadingAnimation'

function ProductsContainer({data}) {

  return (
    <div className='h-full max-h-screen py-8 px-4 md:py-8 overflow-hidden overflow-y-auto'>
      {Object.keys(data).length ? <div className="grid grid-cols-[repeat(auto-fill,minmax(14rem,1fr))] gap-x-4 gap-y-4 place-items-center">
        {data.map((el, idx) => (
          <ProductCard 
            id={el.id}
            title={el.title}
            category={el.category}
            description={el.description}
            image={el.image}
            price={el.price}
            rating={el.rating}
            key={idx}
          />
        ))}
    </div> : <LoadingAnimation />}
    </div>
  )
}

export default ProductsContainer;
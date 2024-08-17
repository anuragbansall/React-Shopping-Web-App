import React from 'react'
import StarRating from '../Common/StarRating'
import { useNavigate } from 'react-router-dom'


function ProductCard({id, title, category, description, image, price, rating}) {

  const navigate = useNavigate()

  return (
    <div title={title} onClick={() => navigate(`/product-details/${id}`)} className='min-h-[20rem] w-[15rem] bg-white border overflow-hidden rounded-md p-2 cursor-pointer'>
        <div className='w-full h-[12rem] flex items-center justify-center'>
            <img src={image} className="max-h-full max-w-full object-cover hover:scale-105 duration-200" />
        </div>
        <div className='px-2'>
            <h2 className='text-xl my-2 font-semibold overflow-hidden text-ellipsis whitespace-nowrap text-center'>{title}</h2>
            <p className='text-slate-600 overflow-hidden text-ellipsis line-clamp-2'>
              {description}
            </p>
            <StarRating 
              ratingCount={rating.rate}
              totalVotes={rating.count}
            />
        </div>
    </div>
  )
}

export default ProductCard
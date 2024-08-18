import React, { useContext, useEffect, useState } from 'react'
import { ProductDetailsContext } from '../Context/Context'
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useToastMessage from '../utils/ToastMessage';

function ProductDetails() {

    const {id} = useParams()

    const [productsData, setProductsData] = useContext(ProductDetailsContext)

    const productDetails = productsData.filter(el => (el.id).toString() === id.toString())
    
    const navigate = useNavigate()

    const handleDeleteProductData = (id) => {
      setProductsData(prevData => (
        prevData.filter(item => (item.id).toString() !== (id).toString())
      ))
      navigate(-1)
      useToastMessage("Product Deleted!")
    }

  return (
    <div className='min-h-full w-full flex justify-center items-center mdp-8'>
          <div className='flex flex-col md:flex-row w-full md:w-fit p-4 items-center gap-[5rem]'>
            <img src={productDetails[0]?.image} className='max-h-[20rem] max-w-full md:max-w-[20rem]' />
            <div className='flex px-4  flex-col gap-3 overflow-hidden'>
                <h2 className='text-lg md:text-3xl font-semibold w-full md:w-[25ch]'>
                    {productDetails[0]?.title}
                </h2>
                <p className='text-slate-400'>
                    {productDetails[0]?.category}
                </p>
                <p className='text-sky-500 text-xl font-medium'>
                    {"$" + productDetails[0]?.price}
                </p>
                <p className='md:w-[55ch] line-clamp-6'>
                   {productDetails[0]?.description}
                </p>

                <div className='mt-4 flex flex-col md:flex-row gap-4'>
                   <Link onClick={() => navigate(-1)} className='border md:border-2 border-slate-400 text-slate-400 hover:bg-slate-400 hover:text-white duration-200 px-8 py-1 text-lg md:text-xl md:font-medium rounded-md text-center'>Go Back</Link>
                   <Link to={`/edit-product/${id}`} className='border md:border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white duration-200 px-8 py-1 text-lg md:text-xl md:font-medium rounded-md text-center'>Edit</Link>
                   <Link className='border md:border-2 border-red-400 text-red-400 hover:bg-red-400 hover:text-white duration-200 px-8 py-1 text-lg md:text-xl md:font-medium rounded-md text-center' onClick={() => handleDeleteProductData(id)}>Delete</Link>
                </div>
            </div>
          </div>
    </div>
  )
}

export default ProductDetails
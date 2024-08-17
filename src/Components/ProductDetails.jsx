import React, { useContext, useEffect, useState } from 'react'
import { ProductDetailsContext } from '../Context/Context'
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { axiosInstance } from '../utils/Axios';
import LoadingAnimation from '../Common/LoadingAnimation';

function ProductDetails() {

    const {id} = useParams()

    const [productDetails, setProductDetails] = useState({})

    const fetchProductDetails = () => {
        try{
            axiosInstance.get(`products/${id}`)
            .then(data => setProductDetails(data.data))
        }
        catch(err){
            console.log(err);
        }
    }
    
    useEffect(() => {
        fetchProductDetails()
    }, [productDetails, id])

    const navigate = useNavigate()

  return (
    <div className='h-full w-full flex justify-center items-center p-8'>
          {Object.keys(productDetails).length ? <div className='flex p-4 items-center gap-[5rem]'>
            <img src={productDetails?.image} className='max-h-[20rem] max-w-[20rem]' />
            <div className='flex flex-col gap-3 overflow-hidden'>
                <h2 className='text-3xl font-semibold w-[25ch]'>
                    {productDetails?.title}
                </h2>
                <p className='text-slate-400'>
                    {productDetails?.category}
                </p>
                <p className='text-sky-500 text-xl font-medium'>
                    {"$" + productDetails?.price}
                </p>
                <p className='w-[55ch] line-clamp-6'>
                   {productDetails?.description}
                </p>

                <div className='mt-4 flex gap-4'>
                   <Link onClick={() => navigate(-1)} className='border-2 border-slate-400 text-slate-400 hover:bg-slate-400 hover:text-white duration-200 px-8 py-1 text-xl font-medium rounded-md'>Go Back</Link>
                   <Link className='border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white duration-200 px-8 py-1 text-xl font-medium rounded-md'>Edit</Link>
                   <Link className='border-2 border-red-400 text-red-400 hover:bg-red-400 hover:text-white duration-200 px-8 py-1 text-xl font-medium rounded-md'>Delete</Link>
                </div>
            </div>
          </div> : <LoadingAnimation />}
    </div>
  )
}

export default ProductDetails
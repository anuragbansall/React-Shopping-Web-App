import React, { useContext, useState } from 'react'
import { ProductDetailsContext } from '../Context/Context'
import { useNavigate } from 'react-router-dom';
import { nanoid } from 'nanoid'

function CreateProduct() {
    const [productsData, setProductsData] = useContext(ProductDetailsContext)

    const [newProductData, setNewProductData] = useState({
        id: "",
        "title": "",
        "price": "",
        "description": "",
        "category": "",
        "image": "",
        "rating": {
            rate: "",
            count: ""
        }
    })

    const navigate = useNavigate()

    const handleInputData = (e) => {
        const { name, value } = e.target;
    
        if (name === "rate" || name === "count") {
            setNewProductData(prevData => ({
                ...prevData,
                rating: {
                    ...prevData.rating,
                    [name]: value
                }
            }));
        } else {
            setNewProductData(prevData => ({
                ...prevData,
                [name]: value,
                id: nanoid(),
            }));
        }
    };
    
    const submitFormDataHandler = (e) => {
        e.preventDefault();
        setProductsData(prevData => (
            [...prevData, newProductData]
        ));
        setNewProductData({
            id: "",
            "title": "",
            "price": "",
            "description": "",
            "category": "",
            "image": "",
            "rating": {
                rate: "",
                count: ""
            }
        })
    }

    return (
        <div className='min-h-screen w-full flex flex-col items-center p-8'>
            <div className='bg-slate-00 w-[50rem] max-w-full h-fit'>
                <h2 className='text-3xl font-semibold my-4'>Add New Product</h2>
                <form className='flex flex-col gap-4' onSubmit={submitFormDataHandler}>
                    <input required type="url" name="image" className='w-full p-2 rounded-md bg-zinc-100' placeholder='image link' value={newProductData.image} onChange={handleInputData} />
                    <input required type="text" name="title" className='w-full p-2 rounded-md bg-zinc-100' placeholder='title' value={newProductData.title} onChange={handleInputData} />
                    <div className='flex gap-4 md:gap-8 flex-col md:flex-row'>
                        <input required type="text" name="category" className='w-full p-2 rounded-md bg-zinc-100' placeholder='category' value={newProductData.category} onChange={handleInputData} />
                        <input required type="number" name="price" className='w-full p-2 rounded-md bg-zinc-100' placeholder='price' value={newProductData.price} onChange={handleInputData} />
                    </div>
                    <div className='flex gap-4 md:gap-8 flex-col md:flex-row'>
                        <input required type="number" name="rate" className='w-full p-2 rounded-md bg-zinc-100' placeholder='rate' value={newProductData.rating?.rate || ""} onChange={handleInputData} />
                        <input required type="number" name="count" className='w-full p-2 rounded-md bg-zinc-100' placeholder='count' value={newProductData.rating?.count || ""} onChange={handleInputData} />
                    </div>
                    <textarea required name="description" className='w-full h-[12rem] bg-zinc-100 p-2' placeholder="description" value={newProductData.description} onChange={handleInputData} ></textarea>

                    <button className='self-start border md:border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white duration-200 px-8 py-1 text-lg md:text-xl md:font-medium rounded-md text-center'>Add Product</button>
                </form>
            </div>
        </div>
    )
}

export default CreateProduct

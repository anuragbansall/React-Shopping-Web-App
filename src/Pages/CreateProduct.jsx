import React, { useContext, useState } from 'react'
import { ProductDetailsContext } from '../Context/Context'
import { useNavigate } from 'react-router-dom';
import { nanoid } from 'nanoid'
import ProductForm from '../Components/ProductForm';

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

        navigate(-1)
    }

    return (
        <div className='min-h-screen w-full flex flex-col items-center p-8'>
            <ProductForm 
                submitFormDataHandler={submitFormDataHandler}
                newProductData={newProductData}
                handleInputData={handleInputData}
                title={"Add New Product"}
            />
        </div>

    )
}

export default CreateProduct
